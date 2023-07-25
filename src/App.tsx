import "./Styles/global.scss";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Prices from "./Pages/Prices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<Prices />} />
    </Routes>
  );
}

export default App;
