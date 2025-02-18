from fpdf import FPDF
import os

def generar_informe_pdf(df_resultado, problemas, problemas_por_pais, problemas_por_edad, problemas_por_sexo):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    
    pdf.cell(200, 10, txt="Informe de Resultados", ln=True, align='C')
    pdf.ln(10)
    
    pdf.cell(200, 10, txt="Análisis por Categoría", ln=True, align='L')
    pdf.ln(10)
    for categoria, datos in problemas.items():
        pdf.cell(200, 10, txt=f"Categoría: {categoria}", ln=True)
        pdf.cell(200, 10, txt=f"Promedio: {datos['Promedio']}", ln=True)
        pdf.cell(200, 10, txt=f"Mediana: {datos['Mediana']}", ln=True)
        pdf.cell(200, 10, txt=f"Moda: {datos['Moda']}", ln=True)
        pdf.ln(10)
    
    pdf.cell(200, 10, txt="Análisis por País", ln=True, align='L')
    pdf.ln(10)
    for index, row in problemas_por_pais.iterrows():
        pdf.cell(200, 10, txt=f"País: {row['pais']}", ln=True)
        for col in problemas_por_pais.columns[1:]:
            pdf.cell(200, 10, txt=f"{col}: {row[col]}", ln=True)
        pdf.ln(10)
    
    pdf.cell(200, 10, txt="Análisis por Grupo de Edad", ln=True, align='L')
    pdf.ln(10)
    for index, row in problemas_por_edad.iterrows():
        pdf.cell(200, 10, txt=f"Grupo de Edad: {row['edad_grupo']}", ln=True)
        for col in problemas_por_edad.columns[1:]:
            pdf.cell(200, 10, txt=f"{col}: {row[col]}", ln=True)
        pdf.ln(10)
    
    pdf.cell(200, 10, txt="Análisis por Sexo", ln=True, align='L')
    pdf.ln(10)
    for index, row in problemas_por_sexo.iterrows():
        pdf.cell(200, 10, txt=f"Sexo: {row['sexo']}", ln=True)
        for col in problemas_por_sexo.columns[1:]:
            pdf.cell(200, 10, txt=f"{col}: {row[col]}", ln=True)
        pdf.ln(10)
    
    pdf.cell(200, 10, txt="Conclusiones", ln=True, align='L')
    pdf.ln(10)
    pdf.cell(200, 10, txt="Basado en los datos analizados, se pueden observar las siguientes conclusiones:", ln=True)
    pdf.ln(10)
    for categoria, datos in problemas.items():
        pdf.cell(200, 10, txt=f"En la categoría {categoria}, se observa que el promedio es bajo ({datos['Promedio']}).", ln=True)
        pdf.cell(200, 10, txt=f"Esto indica que hay problemas en esta área.", ln=True)
        pdf.ln(10)
    
    pdf.output("informe.pdf")
    print("Informe generado: informe.pdf")
    
    os.startfile("informe.pdf")