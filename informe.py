from fpdf import FPDF
import os

class PDF(FPDF):
    def header(self):
        # Establecer la fuente para el encabezado
        self.set_font("Arial", "B", 16)
        
        # Agregar "AroundLife" en rojo
        self.set_text_color(255, 0, 0)  # Rojo
        self.cell(0, 10, "AroundLife", 0, 1, "C")
        
        # Restablecer el color del texto a negro para el resto del documento
        self.set_text_color(0, 0, 0)
        
        # Agregar un espacio debajo del encabezado
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 8)
        self.cell(0, 10, f"Página {self.page_no()}", 0, 0, "C")

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, title, 0, 1, "L")
        self.ln(5)

    def chapter_body(self, body):
        self.set_font("Arial", "", 12)
        self.multi_cell(0, 10, body)
        self.ln()

    def add_image(self, image_path, x=None, y=None, w=0, h=0):
        self.image(image_path, x, y, w, h)

def generar_informe_pdf(df_resultado, problemas, problemas_por_pais, problemas_por_edad, problemas_por_sexo):
    pdf = PDF()
    pdf.add_page()
    
    pdf.chapter_title("Análisis por Categoría")
    for categoria, datos in problemas.items():
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"Categoría: {categoria}", ln=True)
        pdf.set_font("Arial", "", 12)
        pdf.cell(0, 10, f"Promedio: {datos['Promedio']}", ln=True)
        pdf.cell(0, 10, f"Mediana: {datos['Mediana']}", ln=True)
        pdf.cell(0, 10, f"Moda: {datos['Moda']}", ln=True)
        pdf.ln(5)
    
    pdf.chapter_title("Análisis por País")
    for index, row in problemas_por_pais.iterrows():
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"País: {row['pais']}", ln=True)
        pdf.set_font("Arial", "", 12)
        for col in problemas_por_pais.columns[1:]:
            pdf.cell(0, 10, f"{col}: {row[col]}", ln=True)
        pdf.ln(5)
    
    pdf.chapter_title("Análisis por Grupo de Edad")
    for index, row in problemas_por_edad.iterrows():
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"Grupo de Edad: {row['edad_grupo']}", ln=True)
        pdf.set_font("Arial", "", 12)
        for col in problemas_por_edad.columns[1:]:
            pdf.cell(0, 10, f"{col}: {row[col]}", ln=True)
        pdf.ln(5)
    
    pdf.chapter_title("Análisis por Sexo")
    for index, row in problemas_por_sexo.iterrows():
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"Sexo: {row['sexo']}", ln=True)
        pdf.set_font("Arial", "", 12)
        for col in problemas_por_sexo.columns[1:]:
            pdf.cell(0, 10, f"{col}: {row[col]}", ln=True)
        pdf.ln(5)
    
    pdf.chapter_title("Conclusiones")
    pdf.set_font("Arial", "", 12)
    pdf.multi_cell(0, 10, "Basado en los datos analizados, se pueden observar las siguientes conclusiones:")
    pdf.ln(5)
    for categoria, datos in problemas.items():
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"En la categoría {categoria}, se observa que el promedio es bajo ({datos['Promedio']}).", ln=True)
        pdf.set_font("Arial", "", 12)
        pdf.cell(0, 10, "Esto indica que hay problemas en esta área.", ln=True)
        pdf.ln(5)
    
    # Agregar las imágenes de los gráficos al PDF
    pdf.add_page()
    pdf.chapter_title("Gráfico de Radar")
    pdf.add_image("grafico_radar.png", x=10, y=None, w=190)
    pdf.ln(10)
    
    pdf.chapter_title("Gráfico de Barras")
    pdf.add_image("grafico_barras.png", x=10, y=None, w=190)
    pdf.ln(10)
    
    pdf.output("informe.pdf")
    print("Informe generado: informe.pdf")
    
    os.startfile("informe.pdf")