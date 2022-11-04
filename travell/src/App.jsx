import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChooseUS from "./Components/Home/ChooseUS";
import Homepage from "./Containers/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
