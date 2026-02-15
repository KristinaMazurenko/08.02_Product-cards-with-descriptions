import { useBasketList } from "../store/useBasketList";
import { Link } from "react-router-dom";

function Basket() {
  const basket = useBasketList((state) => state.basket);
  const removeFromBasket = useBasketList(
    (state) => state.removeFromBasket
  );
  const decreaseCount = useBasketList(
    (state) => state.decreaseCount
  );
  const addToBasket = useBasketList((state) => state.addToBasket);

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  if (basket.length === 0) {
    return (
      <div>
        <Link to="/" style={{ marginBottom: 20, display: "inline-block" }}>
          ← Назад
        </Link>
        <h2>Корзина пуста 🛒</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Кнопка назад */}
      <div style={{ marginBottom: 20 }}>
        <Link to="/" style={{ fontSize: 16, fontWeight: "bold" }}>
          ← Назад
        </Link>
      </div>

      <h1>Корзина</h1>

      {basket.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: 10,
            padding: 10,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />

          <div style={{ flexGrow: 1 }}>
            <h3>{item.title}</h3>
            <p>{item.price}$</p>
            <p>Количество: {item.count}</p>
          </div>

          <button onClick={() => decreaseCount(item.id)}>➖</button>
          <button onClick={() => removeFromBasket(item.id)}>❌ Удалить</button>
          <button onClick={() => addToBasket(item)}>➕</button>
        </div>
      ))}

      <h2>Итого: {totalPrice}$</h2>
    </div>
  );
}

export default Basket;
