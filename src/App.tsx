import "./Styles/global.scss";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Prices from "./Pages/Prices";
import Trainings from "./Pages/Trainings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/trainings" element={<Trainings />} />
    </Routes>
  );
}

export default App;
