import React, { useRef } from "react";
import ModaChart from "../components/ModaChart";
import MedianaChart from "../components/MedianaChart";
import BarChart from "../components/BarChart";
import CircleChart from "../components/CircleChart";
import LineChart from "../components/LineChart";
import ScatterPlot from "../components/ScatterPlot";
import TortaChart from "../components/TortaChart";
import WheelChart from "../components/WheelChart";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Informe({
  modaData,
  medianaData,
  barData,
  circleData,
  lineData,
  scatterData,
  tortaData,
  wheelData,
}) {
  const componentRef = useRef(null);

  const handlePrint = () => {
    const input = componentRef.current;
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("informe.pdf");
    });
  };

  // Función para obtener la conclusión de la moda
  const getModaConclusion = () => {
    const maxModa = Math.max(...Object.values(modaData));
    const areaMaxModa = Object.keys(modaData).find(
      (area) => modaData[area] === maxModa
    );
    return `Podemos observar que el área que cuenta con la moda más alta es "${areaMaxModa}" con un valor de ${maxModa}.`;
  };

  // Función para obtener la conclusión de la mediana
  const getMedianaConclusion = () => {
    const maxMediana = Math.max(...Object.values(medianaData));
    const areaMaxMediana = Object.keys(medianaData).find(
      (area) => medianaData[area] === maxMediana
    );
    return `Podemos observar que el área que cuenta con la mediana más alta es "${areaMaxMediana}" con un valor de ${maxMediana}.`;
  };

  return (
    <div className="p-4">
      <div ref={componentRef}>
        <h1 className="text-3xl font-bold mb-4">Informe Detallado</h1>
        <p className="mb-4">
          Este informe proporciona un análisis detallado de las diferentes áreas
          evaluadas. A continuación, se presentan los gráficos que muestran la
          moda y la mediana de cada área, así como otros gráficos relevantes.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Moda de las Áreas de la Vida
          </h2>
          <p className="mb-4">
            La moda representa el valor que más se repite en cada una de las
            áreas evaluadas. A continuación, se muestra un gráfico que ilustra
            la moda de cada área.
          </p>
          <div className="chart-container">
            <ModaChart modaData={modaData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> {getModaConclusion()}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Mediana de las Áreas de la Vida
          </h2>
          <p className="mb-4">
            La mediana es el valor que se encuentra en el medio de un conjunto
            de datos ordenados. A continuación, se muestra un gráfico que
            ilustra la mediana de cada área.
          </p>
          <div className="chart-container">
            <MedianaChart medianaData={medianaData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> {getMedianaConclusion()}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico de Barras</h2>
          <p className="mb-4">
            El gráfico de barras muestra la distribución de las respuestas en
            cada área evaluada. A continuación, se presenta el gráfico de
            barras.
          </p>
          <div className="chart-container">
            <BarChart data={barData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico de barras nos permite
            visualizar la distribución de las respuestas y detectar patrones o
            tendencias en cada área.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico Circular</h2>
          <p className="mb-4">
            El gráfico circular muestra la proporción de respuestas en cada área
            evaluada. A continuación, se presenta el gráfico circular.
          </p>
          <div className="chart-container">
            <CircleChart data={circleData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico circular nos ayuda a
            entender la proporción de respuestas en cada área y a identificar
            áreas que requieren más atención.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico Lineal</h2>
          <p className="mb-4">
            El gráfico lineal muestra la tendencia de las respuestas a lo largo
            del tiempo. A continuación, se presenta el gráfico lineal.
          </p>
          <div className="chart-container">
            <LineChart data={lineData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico lineal nos permite
            visualizar las tendencias y cambios en las respuestas a lo largo del
            tiempo.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico de Dispersión</h2>
          <p className="mb-4">
            El gráfico de dispersión muestra la relación entre dos variables. A
            continuación, se presenta el gráfico de dispersión.
          </p>
          <div className="chart-container">
            <ScatterPlot data={scatterData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico de dispersión nos ayuda a
            identificar correlaciones entre diferentes variables.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico de Torta</h2>
          <p className="mb-4">
            El gráfico de torta muestra la proporción de respuestas en cada área
            evaluada. A continuación, se presenta el gráfico de torta.
          </p>
          <div className="chart-container">
            <TortaChart data={tortaData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico de torta nos permite
            visualizar la proporción de respuestas en cada área y detectar áreas
            que requieren más atención.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Gráfico de Rueda</h2>
          <p className="mb-4">
            El gráfico de rueda muestra la distribución de las respuestas en
            cada área evaluada. A continuación, se presenta el gráfico de rueda.
          </p>
          <div className="chart-container">
            <WheelChart data={wheelData} />
          </div>
          <p className="mt-4">
            <strong>Conclusión:</strong> El gráfico de rueda nos permite
            visualizar la distribución de las respuestas y detectar patrones o
            tendencias en cada área.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusión General</h2>
          <p className="mb-4">
            En general, los datos recopilados nos proporcionan una visión
            integral del estado personal en diferentes áreas de la vida. Los
            gráficos nos ayudan a identificar áreas de fortaleza y áreas que
            requieren más atención. Este análisis es fundamental para tomar
            decisiones informadas y mejorar el bienestar general.
          </p>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-4 px-4 py-2 bg-cyan-700 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer"
      >
        Descargar Informe en PDF
      </button>
    </div>
  );
}

export default Informe;
