import "./Styles/global.scss";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Prices from "./Pages/Prices";
import Trainings from "./Pages/Trainings";
import About from "./Pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
