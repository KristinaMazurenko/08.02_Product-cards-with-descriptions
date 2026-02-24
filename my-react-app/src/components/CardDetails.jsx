import { useParams } from "react-router-dom";
import { useProductsStore } from "../store/useProductsStore";

function CardDetails() {
  const { id } = useParams();
  const products = useProductsStore((state) => state.products);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 300 }}
      />
      <h2>{product.title}</h2>
      <p>Категория: {product.category}</p>
      <p>Цена: {product.price}$</p>
      <p>{product.description}</p>
    </div>
  );
}

export default CardDetails;
