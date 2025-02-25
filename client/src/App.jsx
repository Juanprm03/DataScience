import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Form from "./components/Form";
import Charts from "./pages/Charts";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
