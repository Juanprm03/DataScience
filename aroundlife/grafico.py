import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def mostrar_grafico(df_filtered, names):
    def dibujar():
        # Definir las categorías (nombres de las columnas del DataFrame)
        category = df_filtered.columns.tolist()
        # Número de categorías
        N = len(category)

        # Calcular los ángulos para cada categoría en el gráfico de radar
        angles = np.linspace(0, 2 * np.pi, N, endpoint=False).tolist()
        # Añadir el primer ángulo al final para cerrar el círculo
        angles.append(angles[0])

        # Crear la figura del gráfico
        fig, ax = plt.subplots(figsize=(8, 8), subplot_kw=dict(polar=True))

        # Ajustar el fondo del gráfico
        ax.set_facecolor('#f7f7f7')

        # Crear una paleta de colores para las líneas del gráfico
        colors = sns.color_palette("husl", len(df_filtered))

        # Dibujar una línea para cada participante
        for i in range(len(df_filtered)):
            # Obtener los valores de cada categoría para el participante
            values = df_filtered.iloc[i].astype(float).tolist()
            # Añadir el primer valor al final para cerrar el círculo
            values.append(values[0])
            # Dibujar la línea del radar para el participante
            ax.plot(angles, values, linewidth=1, alpha=0.7,
                    color=colors[i], label=names[i])
            # Rellenar el área bajo la línea del radar
            ax.fill(angles, values, alpha=0.15, color=colors[i])

        # Calcular el promedio de cada categoría
        promedio = df_filtered.mean().tolist()
        # Añadir el primer valor al final para cerrar el círculo
        promedio.append(promedio[0])
        
        # Dibujar la línea del promedio general
        ax.plot(angles, promedio, linewidth=3, color='black',
                linestyle="dashed", label="Promedio General")

        # Configurar las etiquetas de las categorías en el gráfico
        ax.set_xticks(angles[:-1])
        ax.set_xticklabels(category, fontsize=12, fontweight='bold',
                           color='black', ha='center')

        # Ajustar la posición de las etiquetas para que no se superpongan
        for label, angle in zip(ax.get_xticklabels(), angles):
            label.set_y(label.get_position()[1] - 0.1)

        # Configurar las líneas del eje radial
        ax.yaxis.grid(True, linestyle="dotted", alpha=0.5)
        # Establecer el rango de valores en el eje radial
        ax.set_ylim(0, 10)

        # Añadir una leyenda en la parte superior derecha del gráfico
        plt.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1), fontsize=10)
        # Añadir un título al gráfico
        plt.title("Around Life", size=20, color='#50C878', y=1.1, fontweight='bold')
        # Mostrar el gráfico
        plt.show()
    
    # Llamar a la función para dibujar el gráfico
    dibujar()