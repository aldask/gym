import "./Styles/global.scss";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Prices from "./Pages/Prices";
import Trainings from "./Pages/Trainings";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Coaches from "./Pages/Coaches";
import Trial from "./Pages/Trial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/coaches" element={<Coaches />}></Route>
      <Route path="/Trial" element={<Trial />}></Route>
    </Routes>
  );
}

export default App;
