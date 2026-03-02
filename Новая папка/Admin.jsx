import { useState } from "react";
import { useProductsStore } from "../store/useProductsStore";

function Admin() {
  const addProduct = useProductsStore((state) => state.addProduct);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Apple");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      title,
      category,
      price: Number(price),
      description,
      image,
    });

    alert("Товар добавлен!");

    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}
      >
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Apple</option>
          <option>Samsung</option>
          <option>Xiaomi</option>
        </select>

        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <textarea
          placeholder="О товаре"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Ссылка на фото"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Добавить товар</button>
      </form>
    </div>
  );
}

export default Admin;