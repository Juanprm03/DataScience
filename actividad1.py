import sqlite3
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Nombre del archivo SQL que contiene la creación de la tabla y los inserts
sql_file_path = '././instance/personas.db'  # Asegúrate de poner la ruta correcta

# Conectar a la base de datos
conn = sqlite3.connect('personas.db')
cursor = conn.cursor()

# Leer y ejecutar el archivo SQL
with open(sql_file_path, 'r', encoding='utf-8') as sql_file:
    sql_script = sql_file.read()
    cursor.executescript(sql_script)

# Leer datos desde la base de datos
query = "SELECT * FROM Personas"
df = pd.read_sql_query(query, conn)

# Cerrar conexión
conn.close()

# Mostrar las primeras filas del DataFrame
print(df)

# Descripción general de los datos
print(df.describe())

# Identificación de valores atípicos con Boxplot
plt.figure(figsize=(12, 8))
sns.boxplot(data=df[['saludFisica', 'saludEmocional', 'familia', 'amigos', 'vidaSocial', 'diversion', 'estudios', 'finanzas', 'desarrolloPersonal', 'espiritual']])
plt.title("Boxplot de las dimensiones de bienestar")
plt.show()

# Visualización de la distribución de los datos con histogramas
df[['saludFisica', 'saludEmocional', 'familia', 'amigos', 'vidaSocial', 'diversion', 'estudios', 'finanzas', 'desarrolloPersonal', 'espiritual']].hist(bins=10, figsize=(12, 8))
plt.suptitle("Histogramas de las dimensiones de bienestar")
plt.show()

# Mapa de calor de la correlación entre características
plt.figure(figsize=(10, 8))
sns.heatmap(df[['saludFisica', 'saludEmocional', 'familia', 'amigos', 'vidaSocial', 'diversion', 'estudios', 'finanzas', 'desarrolloPersonal', 'espiritual']].corr(), annot=True, cmap='coolwarm', linewidths=0.5)
plt.title("Mapa de calor de la correlación entre dimensiones de bienestar")
plt.show()

# Comparación de la salud física por género
plt.figure(figsize=(8, 6))
sns.boxplot(x='sexo', y='saludFisica', data=df)
plt.title("Comparación de la salud física por género")
plt.show()

# Conclusiones del análisis exploratorio
print("Conclusiones del análisis exploratorio:")
print("- Se han identificado posibles valores atípicos en las dimensiones de bienestar.")
print("- Se observó la distribución de las dimensiones y sus patrones.")
print("- Se identificaron correlaciones entre diferentes dimensiones.")
print("- Se analizaron diferencias en la salud física entre géneros.")

print("Base de datos inicializada con datos desde el archivo SQL.")
