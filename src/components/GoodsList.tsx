import { IGood } from "../types";
import GoodsItem from "./GoodsItem";

interface GoodsListProps {
  goods: IGood[];
  addToBasket: (item: IGood) => void;
}

const GoodsList = ({ goods = [], addToBasket }: GoodsListProps) => {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
};

export default GoodsList;
