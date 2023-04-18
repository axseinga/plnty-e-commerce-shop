import React from "react";
import useCartStateStore, { CartOperationT } from "@/store/cart-store";
import {
  ShoppingCartWrapper,
  ShoppingCartList,
  ShoppingCartListHeader,
  ShoppingCartListItems,
  ShoppingCartListItem,
  ShoppingCartListItemQuantity,
  ShoppingCartSubtotal,
  ShoppingCartOrderNotes,
  ShoppingCartDelivery,
  ShoppingCartTotal,
} from "./shopping-cart.styles";
import { Checkbox } from "@/components/form/elements/checkbox/checkbox";
import { Spacer, Divider } from "@/styles/elements";
import { Button, ButtonVariantType } from "@/components/button/button";
import Link from "next/link";
import { formatCurrency } from "@/utils/utils";
import { BinIcon } from "@/components/icons/bin-icon";

// @todo connect delivery options with cart, add delivery in total, add ordernotes to cart

const ShoppingCart = () => {
  const { cart, updateItemCount, removeItemFromCart } = useCartStateStore();

  const calcSubtotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      const totalItemsPrice = product.count * product.price;
      total += totalItemsPrice;
    });
    return total;
  };

  return (
    <ShoppingCartWrapper>
      <h2>Your shopping cart {cart.length === 0 && "is empty"}</h2>
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
          <p></p>
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
              <BinIcon handleClick={() => removeItemFromCart(product.id)} />
              <p>£{formatCurrency(product.price)}</p>
            </ShoppingCartListItem>
          ))}
        </ShoppingCartListItems>
      </ShoppingCartList>
      <ShoppingCartSubtotal>
        <p>
          Subtotal: <span>(Including VAT)</span>
        </p>
        <p>£{cart?.length > 0 ? formatCurrency(calcSubtotalPrice()) : 0}</p>
      </ShoppingCartSubtotal>
      <ShoppingCartOrderNotes>
        <label htmlFor="orderNotes">Order instructions:</label>
        <textarea id="orderNotes" name="orderNotes" placeholder="" rows={5} />
        <span>Maximum 250 characters</span>
      </ShoppingCartOrderNotes>
      <Spacer times={1} />
      <Divider />
      {/* <ShoppingCartDelivery>
        <fieldset>
          <legend>Choose your delivery:</legend>
          <Checkbox
            name="royalMailStandard"
            label="Royal Mail - £3.99"
            value={399}
          />
          <Checkbox
            name="royalMail48"
            label="Royal Mail 48hours tracked - £5.99"
            value={399}
          />
          <Checkbox
            name="evriStandard"
            label="Evri Courier Standard - £3.29"
            value={399}
          />
          <Checkbox
            name="dpdCourier"
            label="DPD Courier Next day delivery - £7.99"
            value={399}
          />
        </fieldset>
      </ShoppingCartDelivery> */}
      <ShoppingCartTotal>
        <p>
          Total: <span>(Including VAT)</span>
        </p>
        <p>£{cart?.length > 0 ? formatCurrency(calcSubtotalPrice()) : 0}</p>
      </ShoppingCartTotal>
      {cart.length !== 0 && (
        <>
          <Spacer times={1} />
          <Link href="/checkout">
            <Button type="button" variant={ButtonVariantType.dark}>
              Click to checkout
            </Button>
          </Link>
        </>
      )}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
