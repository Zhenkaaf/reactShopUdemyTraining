import { IGood } from "../types";
import BasketItem from "./BasketItem";

interface IBasketList {
  order: IGood[];
  handleBasketShow: () => void;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
}

const BasketList = ({
  order,
  handleBasketShow,
  incQuantity,
  decQuantity,
}: IBasketList) => {
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
            id={item.id}
            name={item.name}
            price={item.heal}
            quantity={item.quantity}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
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
