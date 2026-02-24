import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CardDetails from "./components/CardDetails";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: 20,
          padding: 15,
          borderBottom: "1px solid #ccc",
          marginBottom: 20,
        }}
      >
        <Link to="/">Главная</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/basket">Корзина</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
