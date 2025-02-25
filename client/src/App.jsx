import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Form from "./components/Form";
import Charts from "./pages/Charts";
import Layout from "./components/Layout";
import Terminos from "./pages/Terminos";
import Politica from "./pages/Politica";

function App() {
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
