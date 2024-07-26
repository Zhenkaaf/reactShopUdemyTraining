import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { IGood } from "../types";
import Alert from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<IGood[]>([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const closeAlert = () => {
    setAlertName("");
  };
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        ...(API_KEY && { Authorization: API_KEY }),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.fish && setGoods(data.fish);
        setLoading(false);
      });
  }, []);

  const addToBasket = (item: IGood) => {
    setOrder((prevOrder) => {
      const addedItemIndex = prevOrder.findIndex(
        (addedItem) => addedItem.id === item.id
      );
      if (addedItemIndex === -1) {
        const newItem = {
          ...item,
        };
        setAlertName(item.name);
        return [...prevOrder, newItem];
      } else {
        return prevOrder.map((orderedItem, idx) => {
          if (addedItemIndex === idx) {
            setAlertName(item.name);
            return {
              ...orderedItem,
              quantity: (orderedItem.quantity ?? 0) + 1,
            };
          } else {
            setAlertName(item.name);
            return orderedItem;
          }
        });
      }
    });
  };

  const incQuantity = (itemId: string) => {
    setOrder((prevOrder) => {
      return prevOrder.map((orderedItem) => {
        return orderedItem.id === itemId
          ? { ...orderedItem, quantity: orderedItem.quantity + 1 }
          : orderedItem;
      });
    });
  };
  /* const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if(el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }; */
  const decQuantity = (itemId: string) => {
    setOrder((prevOrder) => {
      return prevOrder.map((orderedItem) => {
        if (orderedItem.id === itemId) {
          if (orderedItem.quantity > 1) {
            return {
              ...orderedItem,
              quantity: orderedItem.quantity - 1,
            };
          }
        }
        return orderedItem;
      });
    });
  };

  return (
    <main className="container content">
      <Cart
        quantity={order.length}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList
          goods={goods}
          addToBasket={addToBasket}
        />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && (
        <Alert
          name={alertName}
          closeAlert={closeAlert}
        />
      )}
    </main>
  );
};

export default Shop;
