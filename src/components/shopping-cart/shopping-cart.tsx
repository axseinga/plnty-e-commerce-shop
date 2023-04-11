import React from "react";
import useCartStateStore, { CartOperationT } from "../../store/cart-store";
import {
  ShoppingCartWrapper,
  ShoppingCartList,
  ShoppingCartListHeader,
  ShoppingCartListItems,
  ShoppingCartListItem,
  ShoppingCartListItemQuantity,
} from "./shopping-cart.styles";
import { Spacer, Divider } from "@/styles/elements";
import { Button, ButtonVariantType } from "@/components/button/button";
import Link from "next/link";
import { formatCurrency } from "@/utils";
import { BinIcon } from "@/components/icons/bin-icon";

const ShoppingCart = () => {
  const { cart, updateItemCount, removeItemFromCart } = useCartStateStore();
  return (
    <ShoppingCartWrapper>
      <h2>Your shopping cart</h2>
      <Link href="/plants">
        <Button variant={ButtonVariantType.dark}>Continue shopping</Button>
      </Link>
      <Spacer times={2} />
      <Divider />
      <Spacer times={1} />
      <ShoppingCartList>
        <ShoppingCartListHeader>
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </ShoppingCartListHeader>
        <ShoppingCartListItems>
          {cart.map((product, i) => (
            <ShoppingCartListItem key={`${product.title}_${i}`}>
              <p>{product.title}</p>
              <ShoppingCartListItemQuantity>
                <button
                  type="button"
                  onClick={() => {
                    product.count !== 1 &&
                      updateItemCount(product, CartOperationT.descrease);
                  }}
                >
                  -
                </button>
                <span>{product.count}</span>
                <button
                  type="button"
                  onClick={() =>
                    updateItemCount(product, CartOperationT.increase)
                  }
                >
                  +
                </button>
              </ShoppingCartListItemQuantity>
              <p>£{formatCurrency(product.price)}</p>
              <button
                type="button"
                onClick={() => removeItemFromCart(product.id)}
              >
                <BinIcon />
              </button>
            </ShoppingCartListItem>
          ))}
        </ShoppingCartListItems>
      </ShoppingCartList>
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
