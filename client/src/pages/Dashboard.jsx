import React, { useEffect, useState } from "react";
import { BarChart3, FileText, Users } from "lucide-react";
import { FaLinkedin as Linkedin, FaInstagram as Instagram, FaGithub as Github } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  const [totalRespuestas, setTotalRespuestas] = useState(0);
  const [averageOverall, setAverageOverall] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/respuestas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTotalRespuestas(data.length);

          // Calcular el promedio de todas las áreas evaluadas
          const totalAreas = data.reduce((sum, res) => {
            return sum + res.saludFisica + res.saludEmocional + res.familia + res.amigos + res.vidaSocial + res.diversionRecreacion + res.estudiosTrabajo + res.finanzas + res.desarrolloPersonal + res.espiritual;
          }, 0);
          const average = totalAreas / (data.length * 10);
          setAverageOverall(average.toFixed(2));
        } else {
          console.error("La respuesta de la API no es un array:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white overflow-hidden shadow rounded-lg p-4 flex flex-col gap-8">
        <h1 className="font-semibold text-2xl text-cyan-700">Equipo de desarrollo</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <img
              className="w-28 rounded-full"
              src="https://avatars.githubusercontent.com/u/145505590?v=4"
            />
            <h2 className="font-semibold text-lg">Gero Trujillo</h2>
            <div className="flex gap-2">
              <Link
                to="https://www.linkedin.com/in/geronimo-trujillo-82053525a/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://github.com/Gero-Trujillo" target="_blank">
                <Github className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://www.instagram.com/trujillog11_/" target="_blank">
                <Instagram className="w-6 h-6 text-black" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              className="w-28 rounded-full"
              src="https://avatars.githubusercontent.com/u/145801000?v=4"
            />
            <h2 className="font-semibold text-lg">Juan Ruiz</h2>
            <div className="flex gap-2">
              <Link
                to="https://www.linkedin.com/in/juan-pablo-ruiz-b949432b5/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://github.com/juanprm03" target="_blank">
                <Github className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://www.instagram.com/jpm_003/" target="_blank">
                <Instagram className="w-6 h-6 text-black" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              className="w-28 rounded-full"
              src="https://avatars.githubusercontent.com/u/145505587?v=4"
            />
            <h2 className="font-semibold text-lg">Julian Cataño</h2>
            <div className="flex gap-2">
              <Link
                to="https://www.linkedin.com/in/julian-estiven-posso-cata%C3%B1o-05914b286/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://github.com/Julian-Catano" target="_blank">
                <Github className="w-6 h-6 text-black" />
              </Link>
              <Link to="https://www.instagram.com/jpc___03/" target="_blank">
                <Instagram className="w-6 h-6 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card
          title="Respuestas totales"
          icon={FileText}
          value={totalRespuestas}
          change={`Promedio General: ${averageOverall}`}
        />
        <div className="bg-white overflow-hidden shadow rounded-lg p-4 flex flex-col gap-8">
            <p><span className="font-semibold">Around</span><span className="text-cyan-700 font-semibold">Life</span> es un proyecto educativo abierto al publico cuyo fin es recolectar datos acerca del estado personal en diferentes areas de la vida y con esto generar graficos e informes de un estado general aplicando Ciencia de datos.</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, icon: Icon, value, change }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span className="font-medium text-cyan-700 hover:text-cyan-900">
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
