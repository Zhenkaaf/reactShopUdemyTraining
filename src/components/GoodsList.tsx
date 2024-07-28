import { useContext } from "react";
import GoodsItem from "./GoodsItem";
import { ShopContext } from "../context";

/* interface GoodsListProps {
  goods: IGood[];
} */

const GoodsList = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }
  const { goods } = context;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default GoodsList;
