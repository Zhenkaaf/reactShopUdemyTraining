import { useContext } from "react";
import { ShopContext } from "../context";

/* interface ICartProps {
  quantity: number;
  handleBasketShow: () => void;
} */

const Cart = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }
  const { order, handleBasketShow } = context;
  const quantity = order.length;
  return (
    <div
      onClick={handleBasketShow}
      className="cart blue darken-4 white-text"
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
