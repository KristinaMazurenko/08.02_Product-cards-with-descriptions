import { Link } from "react-router-dom";

function ProductCard({ product }) {   
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
    </div>
  );
}

export default ProductCard;
