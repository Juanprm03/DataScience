import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Form from "./components/Form";
import Charts from "./pages/Charts";
import Layout from "./components/Layout";
import Terminos from "./pages/Terminos";
import Politica from "./pages/Politica";
import Informe from "./pages/Informe";

function App() {
  const [modaData, setModaData] = useState({});
  const [medianaData, setMedianaData] = useState({});
  const [barData, setBarData] = useState({});
  const [circleData, setCircleData] = useState({});
  const [lineData, setLineData] = useState({});
  const [scatterData, setScatterData] = useState({});
  const [tortaData, setTortaData] = useState({});
  const [wheelData, setWheelData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Calcular la moda y la mediana de cada área
          const areas = [
            "saludFisica",
            "saludEmocional",
            "familia",
            "amigos",
            "vidaSocial",
            "diversionRecreacion",
            "estudiosTrabajo",
            "finanzas",
            "desarrolloPersonal",
            "espiritual",
          ];
          const moda = {};
          const mediana = {};

          areas.forEach((area) => {
            const values = data.map((res) => res[area]);
            moda[area] = calculateModa(values);
            mediana[area] = calculateMediana(values);
          });

          setModaData(moda);
          setMedianaData(mediana);

          // Aquí puedes configurar los datos para los otros gráficos
          setBarData(data); // Ejemplo, ajusta según tus necesidades
          setCircleData(data); // Ejemplo, ajusta según tus necesidades
          setLineData(data); // Ejemplo, ajusta según tus necesidades
          setScatterData(data); // Ejemplo, ajusta según tus necesidades
          setTortaData(data); // Ejemplo, ajusta según tus necesidades
          setWheelData(data); // Ejemplo, ajusta según tus necesidades
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

    values.forEach((value) => {
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

    return values.length % 2 !== 0
      ? values[mid]
      : (values[mid - 1] + values[mid]) / 2;
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/informe" element={<Informe
              modaData={modaData}
              medianaData={medianaData}
              barData={barData}
              circleData={circleData}
              lineData={lineData}
              scatterData={scatterData}
              tortaData={tortaData}
              wheelData={wheelData}
            />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
