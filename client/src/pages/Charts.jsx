import BarChart from "../components/BarChart";
import CircleChart from "../components/CircleChart";
import LineChart from "../components/LineChart";
import ScatterPlot from "../components/ScatterPlot";
import TortaChart from "../components/TortaChart";
import WheelChart from "../components/WheelChart";
import ModaChart from "../components/ModaChart";
import MedianaChart from "../components/MedianaChart";
import { useState, useEffect } from "react";

function Charts() {
  const [modaData, setModaData] = useState({});
  const [medianaData, setMedianaData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Calcular la moda y la mediana de cada área
          const areas = ["saludFisica", "saludEmocional", "familia", "amigos", "vidaSocial", "diversionRecreacion", "estudiosTrabajo", "finanzas", "desarrolloPersonal", "espiritual"];
          const moda = {};
          const mediana = {};

          areas.forEach(area => {
            const values = data.map(res => res[area]);
            moda[area] = calculateModa(values);
            mediana[area] = calculateMediana(values);
          });

          setModaData(moda);
          setMedianaData(mediana);
        } else {
          console.error("La respuesta de la API no es un array:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const calculateModa = (values) => {
    const frequency = {};
    let maxFreq = 0;
    let moda = values[0];

    values.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
      if (frequency[value] > maxFreq) {
        maxFreq = frequency[value];
        moda = value;
      }
    });

    return moda;
  };

  const calculateMediana = (values) => {
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);

    return values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico de Barras
          </h3>
          <BarChart />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Grafico Rueda
          </h3>
          <WheelChart />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico Circular
          </h3>
          <TortaChart />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico Linear
          </h3>
          <LineChart />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico de Dispersión
          </h3>
          <ScatterPlot />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico de Circulo
          </h3>
          <CircleChart />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico de Moda
          </h3>
          <ModaChart modaData={modaData} />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Gráfico de Mediana
          </h3>
          <MedianaChart medianaData={medianaData} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
