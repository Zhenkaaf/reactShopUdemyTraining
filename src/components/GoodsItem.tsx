import { useContext } from "react";
import { IGood } from "../types";
import { ShopContext } from "../context";

interface IGoodProps {
  id: string;
  name: string;
  image: string;
  description: string;
  heal: number;
}
const GoodsItem = ({ id, name, image, description, heal }: IGoodProps) => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }

  const { addToBasket } = context;
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={image}
          alt="fish"
        ></img>
        <span className="card-title">{name}</span>
      </div>

      <div className="card-content">
        <p>{description}</p>
      </div>

      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({ id, name, image, description, heal, quantity: 1 })
          }
          className="btn"
        >
          Купить
        </button>
        <span
          className="right"
          style={{ fontSize: "1.8rem" }}
        >
          {heal} грн
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
