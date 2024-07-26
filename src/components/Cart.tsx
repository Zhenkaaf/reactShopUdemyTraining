interface ICartProps {
  quantity: number;
  handleBasketShow: () => void;
}

const Cart = ({ quantity = 0, handleBasketShow }: ICartProps) => {
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
