import React, { useEffect, useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import 'chart.js/auto';

function BubbleChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

          const saludFisica = calculateAverage(data.map((res) => res.saludFisica));
          const saludEmocional = calculateAverage(data.map((res) => res.saludEmocional));
          const familia = calculateAverage(data.map((res) => res.familia));
          const amigos = calculateAverage(data.map((res) => res.amigos));
          const vidaSocial = calculateAverage(data.map((res) => res.vidaSocial));
          const diversionRecreacion = calculateAverage(data.map((res) => res.diversionRecreacion));
          const estudiosTrabajo = calculateAverage(data.map((res) => res.estudiosTrabajo));
          const finanzas = calculateAverage(data.map((res) => res.finanzas));
          const desarrolloPersonal = calculateAverage(data.map((res) => res.desarrolloPersonal));
          const espiritual = calculateAverage(data.map((res) => res.espiritual));

          setChartData({
            datasets: [
              {
                label: 'Promedio de Áreas',
                data: [
                  { x: saludFisica, y: saludEmocional, r: familia },
                  { x: amigos, y: vidaSocial, r: diversionRecreacion },
                  { x: estudiosTrabajo, y: finanzas, r: desarrolloPersonal },
                  { x: espiritual, y: saludFisica, r: saludEmocional },
                  { x: familia, y: amigos, r: vidaSocial },
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
      <h2>Gráfico de Burbujas</h2>
      {chartData.datasets ? <Bubble data={chartData} /> : <p>Cargando datos...</p>}
    </div>
  );
}

export default BubbleChart;