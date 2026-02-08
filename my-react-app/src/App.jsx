import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

