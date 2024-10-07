import { Routes, Route } from "react-router-dom";

// Pages
import Portfolio from "./Pages/Portfolio";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
