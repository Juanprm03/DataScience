import tkinter as tk
from tkinter import ttk

def tabla_promedios(df_resultado):
    # Crear una ventana principal
    window = tk.Tk()
    window.title("Promedios, Medianas y Modas por Categoría")
    window.geometry("600x400")

    # Crear una tabla usando Treeview
    table = ttk.Treeview(window, columns=("Categoria", "Promedio", "Mediana", "Moda"), show='headings')

    # Definir los encabezados de la tabla
    table.heading("Categoria", text="Categoria")
    table.heading("Promedio", text="Promedio")
    table.heading("Mediana", text="Mediana")
    table.heading("Moda", text="Moda")

    # Insertar los datos en la tabla
    for index, row in df_resultado.iterrows():
        table.insert("", "end", values=(row["Categoría"], row["Promedio"], row["Mediana"], row["Moda"]))

    # Empaquetar la tabla en la ventana
    table.pack(expand=True, fill='both')

    # Crear un botón para cerrar la ventana
    button = tk.Button(window, text="Cerrar", command=window.destroy)
    button.pack(pady=10)

    # Iniciar el bucle principal de la ventana
    window.mainloop()