import pandas as pd

def analizar_datos(df, df_resultado):
    # Análisis por categoría
    problemas = {}
    for index, row in df_resultado.iterrows():
        if row["Promedio"] < 5:
            problemas[row["Categoría"]] = {
                "Promedio": row["Promedio"],
                "Mediana": row["Mediana"],
                "Moda": row["Moda"]
            }
    
    # Seleccionar solo las columnas numéricas para el análisis por país
    df_numeric = df.select_dtypes(include=[float, int])
    df_numeric["pais"] = df["pais"]
    problemas_por_pais = df_numeric.groupby("pais").mean(numeric_only=True).reset_index()
    
    # Seleccionar solo las columnas numéricas para el análisis por edad
    df["edad_grupo"] = pd.cut(df["edad"], bins=[0, 18, 30, 45, 60, 100], labels=["0-18", "19-30", "31-45", "46-60", "61+"])
    df_numeric["edad_grupo"] = df["edad_grupo"]
    problemas_por_edad = df_numeric.groupby("edad_grupo").mean(numeric_only=True).reset_index()
    
    # Seleccionar solo las columnas numéricas para el análisis por sexo
    df_numeric["sexo"] = df["sexo"]
    problemas_por_sexo = df_numeric.groupby("sexo").mean(numeric_only=True).reset_index()
    
    return problemas, problemas_por_pais, problemas_por_edad, problemas_por_sexo