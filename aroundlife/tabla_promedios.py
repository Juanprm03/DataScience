import tkinter as tk
from tkinter import ttk

def tabla_promedios(df_promedio):
    # Crear una ventana principal
    window = tk.Tk()
    window.title("Promedios por Categoría")
    window.geometry("400x400")

    # Crear una tabla usando Treeview
    table = ttk.Treeview(window, columns=("Categoria", "Promedio"), show='headings')

    # Definir los encabezados de la tabla
    table.heading("Categoria", text="Categoria")
    table.heading("Promedio", text="Promedio")

    # Insertar los datos en la tabla
    for index, row in df_promedio.iterrows():
        table.insert("", "end", values=(row["Categoría"], row["Promedio"]))

    # Empaquetar la tabla en la ventana
    table.pack(expand=True, fill='both')

    # Crear un botón para cerrar la ventana
    button = tk.Button(window, text="Cerrar", command=window.destroy)
    button.pack(pady=10)

    # Iniciar el bucle principal de la ventana
    window.mainloop()