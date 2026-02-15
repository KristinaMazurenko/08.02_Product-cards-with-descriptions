import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
