import { create } from "zustand";

export const useBasketList = create((set) => ({
  basket: [],

  // ➕ Добавить товар
  addToBasket: (product) =>
    set((state) => {
      // Проверяем — есть ли уже товар
      const exists = state.basket.find(
        (item) => item.id === product.id
      );

      if (exists) {
        // Если есть — увеличиваем количество
        return {
          basket: state.basket.map((item) =>
            item.id === product.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

      // Если нет — добавляем новый
      return {
        basket: [...state.basket, { ...product, count: 1 }],
      };
    }),

  // Удалить товар полностью
  removeFromBasket: (id) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.id !== id),
    })),

  // Уменьшить количество
  decreaseCount: (id) =>
    set((state) => ({
      basket: state.basket
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0),
    })),

  // 🧹 Очистить корзину
  clearBasket: () => set({ basket: [] }),
}));
