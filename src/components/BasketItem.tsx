interface IBasketProps {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
}
const BasketItem = ({
  id,
  name,
  price,
  quantity,
  incQuantity,
  decQuantity,
}: IBasketProps) => {
  return (
    <li className="collection-item">
      {name} x <button onClick={() => decQuantity(id)}>-</button>
      {quantity}
      <button onClick={() => incQuantity(id)}>+</button> ={" "}
      {price * (quantity ?? 1)}
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
