import { create } from "zustand";
import { products as initialProducts } from "../assets/products";

export const useProductsStore = create((set) => ({
  products: initialProducts,

  // Получение продуктов
  getProducts: () => {
    return initialProducts;
  },

  // Создание нового продукта
  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...newProduct,
          id: Date.now(), // уникальный id
        },
      ],
    })),
}));