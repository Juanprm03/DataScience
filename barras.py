import matplotlib.pyplot as plt

def generar_barras(df_promedio):
    def dibujar():
        # Definir colores para las barras según el promedio
        colores = []
        for i in df_promedio["Promedio"]:
            if i < 2:
                colores.append("red")  # Rojo para promedios menores a 2
            elif i < 4:
                colores.append("orange")  # Naranja para promedios entre 2 y 4
            elif i < 6:
                colores.append("yellow")  # Amarillo para promedios entre 4 y 6
            elif i < 8:
                colores.append("lightgreen")  # Verde claro para promedios entre 6 y 8
            else:
                colores.append("green")  # Verde para promedios mayores o iguales a 8
        
        # Graficar los promedios
        plt.figure(figsize=(10, 5))  # Definir el tamaño de la figura
        plt.barh(df_promedio["Categoría"], df_promedio["Promedio"], color=colores)  # Crear un gráfico de barras horizontal
        plt.xlabel("Promedio")  # Etiqueta del eje X
        plt.ylabel("Categoría")  # Etiqueta del eje Y
        plt.title("Grafico de barras de estado general de los participantes")  # Título del gráfico
        plt.show()  # Mostrar el gráfico
    
    # Llamar a la función para dibujar el gráfico
    dibujar()