import { Link } from "react-router-dom";
import { useBasketList } from "../store/useBasketList";
import { useProductsStore } from "../store/useProductsStore";

function ProductCard({ product }) {
  // Корзина
  const basket = useBasketList((state) => state.basket);
  const addToBasket = useBasketList((state) => state.addToBasket);
  const decreaseCount = useBasketList((state) => state.decreaseCount);

  // Избранное
  const favorites = useProductsStore((state) => state.favorites);
  const addToFavorites = useProductsStore((state) => state.addToFavorites);
  const removeFromFavorites = useProductsStore(
    (state) => state.removeFromFavorites
  );

  // Находим товар в корзине
  const basketItem = basket.find((item) => item.id === product.id);
  const count = basketItem ? basketItem.count : 0;

  // Проверяем, есть ли товар в избранном
  const isFavorite = favorites.some((item) => item.id === product.id);

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

      {/* Счётчик товаров в корзине */}
      {count > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 5,
          }}
        >
          <button onClick={() => decreaseCount(product.id)}>➖</button>
          <span>{count}</span>
          <button onClick={() => addToBasket(product)}>➕</button>
        </div>
      )}

      {/* Кнопка избранного */}
      <button
        onClick={() =>
          isFavorite
            ? removeFromFavorites(product.id) // если есть — удаляем
            : addToFavorites(product) // если нет — добавляем
        }
        style={{
          marginTop: 8,
          backgroundColor: isFavorite ? "#ffcccc" : "white",
        }}
      >
        {isFavorite ? "❤️ В избранном" : "🤍 В избранное"}
      </button>
    </div>
  );
}

export default ProductCard;
