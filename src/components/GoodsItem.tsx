import { IGood } from "../types";

interface IGoodProps {
  id: string;
  name: string;
  image: string;
  description: string;
  heal: number;
  addToBasket: (item: IGood) => void;
}
const GoodsItem = ({
  id,
  name,
  image,
  description,
  heal,
  addToBasket,
}: IGoodProps) => {
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
