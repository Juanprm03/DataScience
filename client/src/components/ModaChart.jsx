import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function ModaChart({ modaData }) {
  const data = {
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
        label: 'Moda',
        data: [
          modaData.saludFisica,
          modaData.saludEmocional,
          modaData.familia,
          modaData.amigos,
          modaData.vidaSocial,
          modaData.diversionRecreacion,
          modaData.estudiosTrabajo,
          modaData.finanzas,
          modaData.desarrolloPersonal,
          modaData.espiritual,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Cambia el eje de las barras a horizontal
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Moda de las Áreas de la Vida</h2>
      <div style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ModaChart;