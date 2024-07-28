import { useContext } from "react";
import { ShopContext } from "../context";

interface IBasketProps {
  id: string;
  name: string;
  heal: number;
  quantity?: number;
  /* incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void; */
}
const BasketItem = ({ id, name, heal, quantity }: IBasketProps) => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }
  const { removeFromBasket, incQuantity, decQuantity } = context;

  return (
    <li className="collection-item">
      {name} x <button onClick={() => decQuantity(id)}>-</button>
      {quantity}
      <button onClick={() => incQuantity(id)}>+</button> ={" "}
      {heal * (quantity ?? 1)}
      <span className="secondary-content">
        <i
          onClick={() => removeFromBasket(id)}
          className="material-icons basket-delete"
        >
          close
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
