import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Extra_Header from "./Components/Header/Extra_Header";
import ChooseUS from "./Components/Home/ChooseUS";
import Homepage from "./Containers/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUS />} />
          <Route path="/header" element={<Extra_Header />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
