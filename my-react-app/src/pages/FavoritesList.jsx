import { useProductsStore } from "../store/useProductsStore";
import { Link } from "react-router-dom";

function FavoritesList() {
  const favorites = useProductsStore((state) => state.favorites);
  const removeFromFavorites = useProductsStore(
    (state) => state.removeFromFavorites
  );

  if (favorites.length === 0) {
    return <h2>Избранных товаров пока нет</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Избранное</h2>

      <Link to="/">← Назад на главную</Link>

      <div style={{ marginTop: 20 }}>
        {favorites.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 15,
              width: 250,
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%" }}
            />

            <h3>{product.title}</h3>
            <p>{product.price}$</p>

            <button
              onClick={() => removeFromFavorites(product.id)}
            >
              Удалить из избранного
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;