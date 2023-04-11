import { Hero } from "@/components/hero/hero";
import useCartStateStore from "@/store/cart-store";
import { CartOperationT } from "@/store/cart-store";

const CartPage = () => {
  const { cart, updateItemCount, removeItemFromCart } = useCartStateStore();
  return (
    <>
      <Hero heroImage="/assets/contactpage-header.png" />
      {cart.map((product, i) => (
        <li key={`${product.title}_${i}`}>
          {product.title} - {product.price} -{" "}
          <button
            type="button"
            onClick={() => { product.count !== 1 && updateItemCount(product, CartOperationT.descrease)}}
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
          <button type="button" onClick={() => removeItemFromCart(product.id)}>remove</button>
        </li>
      ))}
    </>
  );
};

export default CartPage;
