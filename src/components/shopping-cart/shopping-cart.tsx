import React from "react";
import useCartStateStore, { CartOperationT } from "../../store/cart-store";
import { ShoppingCartWrapper } from "./shopping-cart.styles";

const ShoppingCart = () => {
  const { cart, updateItemCount, removeItemFromCart } = useCartStateStore();
  return (
    <ShoppingCartWrapper>
      {cart.map((product, i) => (
        <li key={`${product.title}_${i}`}>
          {product.title} - {product.price} -{" "}
          <button
            type="button"
            onClick={() => {
              product.count !== 1 &&
                updateItemCount(product, CartOperationT.descrease);
            }}
          >
            minus
          </button>{" "}
          {product.count}{" "}
          <button
            type="button"
            onClick={() => updateItemCount(product, CartOperationT.increase)}
          >
            plus
          </button>{" "}
          <button type="button" onClick={() => removeItemFromCart(product.id)}>
            remove
          </button>
        </li>
      ))}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
