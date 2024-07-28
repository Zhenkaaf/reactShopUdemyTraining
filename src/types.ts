export interface IGood {
  id: string;
  name: string;
  image: string;
  description: string;
  heal: number;
  quantity: number;
}
export interface IInitialState {
  goods: IGood[];
  loading: boolean;
  order: IGood[];
  isBasketShow: boolean;
  alertName: string;
  /*   closeAlert: () => void;
  removeFromBasket: (itemId: string) => void; */
}

interface CloseAlertAction {
  type: "CLOSE_ALERT";
}

interface RemoveFromBasketAction {
  type: "REMOVE_FROM_BASKET";
  payload: {
    id: string;
  };
}
interface DecQuantityAction {
  type: "DEC_QUANTITY";
  payload: { id: string };
}

interface IncQuantityAction {
  type: "INC_QUANTITY";
  payload: { id: string };
}

interface AddToBasketAction {
  type: "ADD_TO_BASKET";
  payload: { item: IGood };
}

interface HandleBasketShowAction {
  type: "HANDLE_BASKET_SHOW";
}

interface CloseAlertAction {
  type: "CLOSE_ALERT";
}

interface RemoveFromBasketAction {
  type: "REMOVE_FROM_BASKET";
  payload: { id: string };
}
interface SetGoodsAction {
  type: "SET_GOODS";
  payload: IGood[]; // Предполагается, что `data` является массивом товаров
}

export type ActionTypes =
  | DecQuantityAction
  | IncQuantityAction
  | AddToBasketAction
  | HandleBasketShowAction
  | CloseAlertAction
  | SetGoodsAction
  | RemoveFromBasketAction;
