import { createContext, ReactNode, useReducer } from "react";
import { reducer } from "./reducer";
import { IGood, IInitialState } from "./types";

interface ShopContextType extends IInitialState {
  closeAlert: () => void;
  removeFromBasket: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  incQuantity: (itemId: string) => void;
  addToBasket: (item: IGood) => void;
  handleBasketShow: () => void;
  setGoods: (data: any) => void;
}
interface ContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  const closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  const removeFromBasket = (itemId: string) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  const decQuantity = (itemId: string) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id: itemId } });
  };
  const incQuantity = (itemId: string) => {
    dispatch({ type: "INC_QUANTITY", payload: { id: itemId } });
  };
  const addToBasket = (item: IGood) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { item: item } });
  };
  const handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };

  const setGoods = (data: any) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  const contextValue: ShopContextType = {
    ...value,
    closeAlert,
    removeFromBasket,
    decQuantity,
    incQuantity,
    addToBasket,
    handleBasketShow,
    setGoods,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
