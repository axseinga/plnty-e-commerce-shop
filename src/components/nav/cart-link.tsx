import Link from "next/link";
import { CartIcon } from "@/components/icons/cart-icon";
import useCartStateStore from "@/store/cart-store";

const CartLink = () => {
  const { cart } = useCartStateStore();
  return (
    <Link href="/cart">
      <span>{cart.length}</span>
      <CartIcon />
    </Link>
  );
};

export default CartLink;
