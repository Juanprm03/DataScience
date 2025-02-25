import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";

function CircleChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const calculateAverage = (arr) =>
            arr.reduce((a, b) => a + b, 0) / arr.length;

          const saludFisica = calculateAverage(
            data.map((res) => res.saludFisica)
          );
          const saludEmocional = calculateAverage(
            data.map((res) => res.saludEmocional)
          );
          const familia = calculateAverage(data.map((res) => res.familia));
          const amigos = calculateAverage(data.map((res) => res.amigos));
          const vidaSocial = calculateAverage(
            data.map((res) => res.vidaSocial)
          );
          const diversionRecreacion = calculateAverage(
            data.map((res) => res.diversionRecreacion)
          );
          const estudiosTrabajo = calculateAverage(
            data.map((res) => res.estudiosTrabajo)
          );
          const finanzas = calculateAverage(data.map((res) => res.finanzas));
          const desarrolloPersonal = calculateAverage(
            data.map((res) => res.desarrolloPersonal)
          );
          const espiritual = calculateAverage(
            data.map((res) => res.espiritual)
          );

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
                label: "Promedio",
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
                backgroundColor: [
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                ],
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
      <h2>Rueda de barras</h2>
      {chartData.labels ? (
        <PolarArea data={chartData} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default CircleChart;
