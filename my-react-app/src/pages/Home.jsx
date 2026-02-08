import { products } from "../assets/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />  
      ))}
    </div>
  );
}

export default Home;
