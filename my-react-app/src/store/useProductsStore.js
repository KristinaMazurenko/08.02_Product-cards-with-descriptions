import { create } from "zustand";
import { products as initialProducts } from "../assets/products";

export const useProductsStore = create((set, get) => ({
  // Список всех товаров
  products: initialProducts,

  // Список избранных товаров
  favorites: [],

  // Получение продуктов
  getProducts: () => {
    return get().products; // возвращаем актуальное состояние
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

  // Добавление в избранное
  addToFavorites: (product) => {
    const { favorites } = get();

    // Проверяем, есть ли уже товар в избранном
    const exists = favorites.find((item) => item.id === product.id);

    if (!exists) {
      set({
        favorites: [...favorites, product],
      });
    }
  },

  // Удаление из избранного
  removeFromFavorites: (id) => {
    const { favorites } = get();

    set({
      favorites: favorites.filter((item) => item.id !== id),
    });
  },
}));