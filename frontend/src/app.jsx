import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Report from "./pages/Report";
import Map from "./pages/Map";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
