import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

function ScatterPlot() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const scatterData = data.map((res) => ({
            x: res.saludFisica,
            y: res.saludEmocional,
          }));

          setChartData({
            datasets: [
              {
                label: "Salud Física vs Salud Emocional",
                data: scatterData,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          });
        } else {
          console.error("La respuesta de la API no es un array:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      <h2>Gráfico de Dispersión</h2>
      {chartData.datasets ? <Scatter data={chartData} /> : <p>Cargando datos...</p>}
    </div>
  );
}

export default ScatterPlot;