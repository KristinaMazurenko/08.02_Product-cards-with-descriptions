import { Link } from "react-router-dom";
import { useBasketList } from "../store/useBasketList";

function ProductCard({ product }) {
  const basket = useBasketList((state) => state.basket);
  const addToBasket = useBasketList((state) => state.addToBasket);
  const decreaseCount = useBasketList((state) => state.decreaseCount);

  // Находим товар в корзине
  const basketItem = basket.find((item) => item.id === product.id);
  const count = basketItem ? basketItem.count : 0;

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, width: 220 }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 200, height: 200, objectFit: "cover" }}
      />

      <h3>{product.title}</h3>
      <p>{product.price}$</p>

      <Link to={`/card/${product.id}`}>
        <button>Подробнее</button>
      </Link>

      {/* Кнопка "В корзину" */}
      <button onClick={() => addToBasket(product)} style={{ marginTop: 5 }}>
        В корзину
      </button>

      {/* Счётчик товаров */}
      {count > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
          <button onClick={() => decreaseCount(product.id)}>➖</button>
          <span>{count}</span>
          <button onClick={() => addToBasket(product)}>➕</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
