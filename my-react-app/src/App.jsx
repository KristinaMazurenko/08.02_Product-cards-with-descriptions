import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CardDetails from "./components/CardDetails";
import Basket from "./pages/Basket";
import FavoritesList from "./pages/FavoritesList";
import { useProductsStore } from "./store/useProductsStore";

function App() {
  // Получаем количество избранных товаров
  const favoritesCount = useProductsStore(
    (state) => state.favorites.length
  );

  return (
    <BrowserRouter>
      {/* Верхнее меню */}
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

        {/* Ссылка на избранное со счётчиком */}
        <Link to="/favorites">
          ❤️ Избранное ({favoritesCount})
        </Link>
      </nav>

      {/* Роуты */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;