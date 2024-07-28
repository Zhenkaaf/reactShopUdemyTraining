import { IGood, IInitialState, ActionTypes } from "./types";

export function reducer(state: IInitialState, action: ActionTypes) {
  switch (action.type) {
    case "SET_GOODS": {
      return {
        ...state,
        goods: action.payload || [],
        loading: false,
      };
    }

    case "DEC_QUANTITY": {
      const newOrder = state.order.map((orderedItem) => {
        if (orderedItem.id === action.payload.id) {
          if (orderedItem.quantity > 1) {
            return {
              ...orderedItem,
              quantity: orderedItem.quantity - 1,
            };
          }
        }
        return orderedItem;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    case "INC_QUANTITY": {
      const newOrder = state.order.map((orderedItem) => {
        if (orderedItem.id === action.payload.id) {
          return {
            ...orderedItem,
            quantity: orderedItem.quantity + 1,
          };
        }
        return orderedItem;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    case "ADD_TO_BASKET":
      const addedItemIndex = state.order.findIndex(
        (addedItem) => addedItem.id === action.payload.item.id
      );
      if (addedItemIndex === -1) {
        const newItem = {
          ...action.payload.item,
          quantity: 1,
        };
        return {
          ...state,
          order: [...state.order, newItem],
          alertName: action.payload.item.name,
        };
      } else {
        const newOrder = state.order.map((orderedItem, idx) => {
          if (addedItemIndex === idx) {
            return {
              ...orderedItem,
              quantity: orderedItem.quantity + 1,
            };
          }
          return orderedItem;
        });

        return {
          ...state,
          order: newOrder,
          alertName: action.payload.item.name,
        };
      }

    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el: IGood) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
}
