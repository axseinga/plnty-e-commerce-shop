import { Hero } from "@/components/hero/hero";
import dynamic from "next/dynamic";

const DynamicShoppingCart = dynamic(
  () => import("../components/shopping-cart/shopping-cart"),
  {
    ssr: false,
  }
);

const CartPage = () => {
  return (
    <>
      <Hero heroImage="/assets/contactpage-header.png" />
      <DynamicShoppingCart />
    </>
  );
};

export default CartPage;
