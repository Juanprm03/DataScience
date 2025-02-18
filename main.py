import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
from grafico import mostrar_grafico
from tabla_promedios import tabla_promedios
from barras import generar_barras
from informe import generar_informe_pdf
from analisis import analizar_datos
import requests

def appConGoogleSheets():
    # Define los permisos que se le darán a la API
    # Estos permisos permiten acceder a Google Sheets y Google Drive
    scope = ['https://spreadsheets.google.com/feeds',
            'https://www.googleapis.com/auth/drive']

    # Credenciales de la cuenta de servicio de Google Cloud
    # Se cargan las credenciales desde un archivo JSON
    creds = ServiceAccountCredentials.from_json_keyfile_name(
        'credentials.json', scope)

    # Autoriza al cliente con las credenciales
    # Esto permite acceder a la hoja de cálculo y leer los datos
    client = gspread.authorize(creds)

    # Abre la hoja de cálculo llamada "Around Life (Respuestas)" y selecciona la primera hoja
    sheet = client.open('Around Life (Respuestas)').sheet1

    # Obtiene los datos de la hoja de cálculo y los almacena en forma de lista de diccionarios
    # Cada fila de la hoja de cálculo se convierte en un diccionario
    data = sheet.get_all_records()

    # Convierte la lista de diccionarios en un DataFrame de Pandas para facilitar su manipulación
    # Un DataFrame es una estructura de datos similar a una tabla
    df = pd.DataFrame(data)

    # Obtiene los nombres de los participantes y los almacena en una lista
    names = df["Nombre completo"].tolist()

    # Elimina las columnas que no se utilizarán en el análisis de datos
    # Estas columnas no son relevantes para el análisis
    ColExcluidas = ["Marca temporal", "Nombre completo", "Correo", "Celular"]
    df_filtered = df.drop(columns=ColExcluidas, errors='ignore')

    # Calcula el promedio de cada categoría
    df_promedio = df_filtered.mean().reset_index()
    df_promedio.columns = ["Categoría", "Promedio"]

    # Calcula la mediana de cada categoría
    df_mediana = df_filtered.median().reset_index()
    df_mediana.columns = ["Categoría", "Mediana"]

    # Calcula la moda de cada categoría
    df_moda = df_filtered.mode().iloc[0].reset_index()
    df_moda.columns = ["Categoría", "Moda"]

    # Combina los DataFrames de promedio, mediana y moda
    df_resultado = pd.merge(df_promedio, df_mediana, on="Categoría")
    df_resultado = pd.merge(df_resultado, df_moda, on="Categoría")

    # Muestra el gráfico de radar con los datos filtrados y los nombres de los participantes
    mostrar_grafico(df_filtered, names)

    # Genera un gráfico de barras con los promedios de cada categoría
    generar_barras(df_promedio)

    # Muestra una tabla con los promedios, medianas y modas de cada categoría
    tabla_promedios(df_resultado)

def appConApiFlask():
    url = "http://127.0.0.1:5000/respuestas" #URL de la API que creamos
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(data)
        names = df["nombreCompleto"].tolist()
        ColExcluidas = ["id", "nombreCompleto", "correo", "celular", "edad", "sexo", "pais"]
        df_filtered = df.drop(columns=ColExcluidas, errors='ignore')
        
        # Calcula el promedio de cada categoría
        df_promedio = df_filtered.mean().reset_index()
        df_promedio.columns = ["Categoría", "Promedio"]

        # Calcula la mediana de cada categoría
        df_mediana = df_filtered.median().reset_index()
        df_mediana.columns = ["Categoría", "Mediana"]

        # Calcula la moda de cada categoría
        df_moda = df_filtered.mode().iloc[0].reset_index()
        df_moda.columns = ["Categoría", "Moda"]

        # Combina los DataFrames de promedio, mediana y moda
        df_resultado = pd.merge(df_promedio, df_mediana, on="Categoría")
        df_resultado = pd.merge(df_resultado, df_moda, on="Categoría")
        
        problemas, problemas_por_pais, problemas_por_edad, problemas_por_sexo = analizar_datos(df, df_resultado)

        mostrar_grafico(df_filtered, names)
        generar_barras(df_promedio)
        tabla_promedios(df_resultado)
        generar_informe_pdf(df_resultado, problemas, problemas_por_pais, problemas_por_edad, problemas_por_sexo)

appConApiFlask()