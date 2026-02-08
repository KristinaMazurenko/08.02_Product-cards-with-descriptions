import { useParams } from "react-router-dom";
import { products } from "../assets/products";

function CardDetails() {
  const { id } = useParams();
  const product = products.find(item => item.id === Number(id));

  if (!product) return <h2>Товар не найден</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Детали товара</h1>
      <img src={product.image} width={250} />
      <h2>{product.title}</h2>
      <p>Цена: {product.price}$</p>
      <p>{product.description}</p>
    </div>
  );
}

export default CardDetails;
