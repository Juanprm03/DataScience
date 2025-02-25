import BarChart from "../components/BarChart";
import CircleChart from "../components/CircleChart";
import LineChart from "../components/LineChart";
import ScatterPlot from "../components/ScatterPlot";
import TortaChart from "../components/TortaChart";
import WheelChart from "../components/WheelChart";


function Charts() {
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
    </div>
  );
}

export default Charts;
