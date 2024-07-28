import { useContext } from "react";
import BasketItem from "./BasketItem";
import { ShopContext } from "../context";

/* interface IBasketList {
  order: IGood[];
  handleBasketShow: () => void;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  removeFromBasket: (itemId: string) => void;
} */

const BasketList = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }
  const { order, handleBasketShow } = context;
  console.log(order);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.heal * (el.quantity ?? 1);
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимость: {totalPrice} грн
      </li>
      <li className="collection-item active">
        <button className=" btn">Оформить</button>
      </li>
      <i
        onClick={handleBasketShow}
        className="material-icons basket-close"
      >
        close
      </i>
    </ul>
  );
};

export default BasketList;
