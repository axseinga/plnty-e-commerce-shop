import { create } from "zustand";

interface CartItemT {
  id: string;
  title: string;
  price: number;
  count: number;
}

export enum CartOperationT {
  increase = "increase",
  descrease = "decrease",
}

type CartStateStoreT = {
  cart: CartItemT[];
  addItemToCart: (item: CartItemT) => void;
  updateItemCount: (item: CartItemT, operation: CartOperationT) => void;
  removeItemFromCart: (item: CartItemT) => void;
};

const useCartStateStore = create<CartStateStoreT>((set) => {
  return {
    cart: [],
    addItemToCart(item) {
      set((state) => {
        const existingItem = state.cart.find(
          (existingItem) => existingItem.id === item.id
        );
        if (!existingItem) {
          return {
            cart: [...state.cart, item],
          };
        }
        return {
          cart: state.cart.map((existingItem) => {
            if (existingItem.id === item.id) {
              return {
                ...existingItem,
                count: existingItem.count + item.count,
              };
            }
            return existingItem;
          }),
        };
      });
    },
    updateItemCount(item, operation) {
      set((state) => {
        const existingItem = state.cart.find(
          (existingItem) => existingItem.id === item.id
        );
        if (!existingItem) {
          return {
            cart: [...state.cart, item],
          };
        }
        return {
          cart: state.cart.map((existingItem) => {
            if (existingItem.id === item.id) {
              if (operation === CartOperationT.increase) {
                return { ...existingItem, count: existingItem.count + 1 };
              } else {
                return { ...existingItem, count: existingItem.count - 1 };
              }
            }
            return existingItem;
          }),
        };
      });
    },
    removeItemFromCart(item) {
      set((state) => {
        const existingItem = state.cart.find(
          (existingItem) => existingItem.id === item.id
        );
        if (!existingItem) {
          return {
            cart: [...state.cart, item],
          };
        }
        return {};
      });
    },
  };
});

export default useCartStateStore;
