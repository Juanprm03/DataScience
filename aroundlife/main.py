import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
from grafico import mostrar_grafico
from tabla_promedios import tabla_promedios
from barras import generar_barras

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
# Se calcula el promedio de las respuestas para cada categoría
df_promedio = df_filtered.mean().reset_index()
df_promedio.columns = ["Categoría", "Promedio"]

# Muestra el gráfico de radar con los datos filtrados y los nombres de los participantes
mostrar_grafico(df_filtered, names)

# Genera un gráfico de barras con los promedios de cada categoría
generar_barras(df_promedio)

# Muestra una tabla con los promedios de cada categoría
tabla_promedios(df_promedio)