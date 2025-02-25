import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function MedianaChart({ medianaData }) {
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
        label: 'Mediana',
        data: [
          medianaData.saludFisica,
          medianaData.saludEmocional,
          medianaData.familia,
          medianaData.amigos,
          medianaData.vidaSocial,
          medianaData.diversionRecreacion,
          medianaData.estudiosTrabajo,
          medianaData.finanzas,
          medianaData.desarrolloPersonal,
          medianaData.espiritual,
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Color de fondo más claro
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)', // Color de los puntos
        pointBorderColor: '#fff', // Color del borde de los puntos
        pointHoverBackgroundColor: '#fff', // Color de fondo de los puntos al pasar el mouse
        pointHoverBorderColor: 'rgba(153, 102, 255, 1)', // Color del borde de los puntos al pasar el mouse
        fill: true, // Habilitar el área sombreada debajo de la línea
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'rgba(153, 102, 255, 1)',
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    },
  };

  return (
    <div>
      <h2>Mediana de las Áreas de la Vida</h2>
      <div style={{ height: '400px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default MedianaChart;