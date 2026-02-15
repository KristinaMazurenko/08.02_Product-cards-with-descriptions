import { Link } from "react-router-dom";
import { products } from "../assets/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      {/* Ссылка на корзину */}
      <div style={{ marginBottom: 20 }}>
        <Link to="/basket" style={{ fontSize: 18, fontWeight: "bold" }}>
          🛒 Перейти в корзину
        </Link>
      </div>

      {/* Список товаров */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
