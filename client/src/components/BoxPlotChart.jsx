import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import 'chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js';

function BoxPlotChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const saludFisica = data.map((res) => res.saludFisica);
          const saludEmocional = data.map((res) => res.saludEmocional);
          const familia = data.map((res) => res.familia);
          const amigos = data.map((res) => res.amigos);
          const vidaSocial = data.map((res) => res.vidaSocial);
          const diversionRecreacion = data.map((res) => res.diversionRecreacion);
          const estudiosTrabajo = data.map((res) => res.estudiosTrabajo);
          const finanzas = data.map((res) => res.finanzas);
          const desarrolloPersonal = data.map((res) => res.desarrolloPersonal);
          const espiritual = data.map((res) => res.espiritual);

          setChartData({
            labels: [
              "Salud Física",
              "Salud Emocional",
              "Familia",
              "Amigos",
              "Vida Social",
              "Diversión y Recreación",
              "Estudios y Trabajo",
              "Finanzas",
              "Desarrollo Personal",
              "Espiritual",
            ],
            datasets: [
              {
                label: 'Distribución de Áreas',
                data: [
                  saludFisica,
                  saludEmocional,
                  familia,
                  amigos,
                  vidaSocial,
                  diversionRecreacion,
                  estudiosTrabajo,
                  finanzas,
                  desarrolloPersonal,
                  espiritual,
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
      <h2>Gráfico de Caja y Bigotes</h2>
      {chartData ? (
        <Chart
          type="boxplot"
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default BoxPlotChart;