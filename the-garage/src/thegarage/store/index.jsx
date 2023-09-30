import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { item, cant } = action.payload;
      const itemInCart = state.cart.find((i) => i.id === item.id);
      const newCart = itemInCart
        ? state.cart.map((i) =>
            i.id === item.id ? { ...i, cant: i.cant + cant } : i
          )
        : [...state.cart, { ...item, cant: cant }];

      const totalItems = newCart.map((i) => i.cant).reduce((a, b) => a + b, 0);
      const total = newCart.reduce((acc, i) => acc + i.cant * i.precio, 0);
      return { ...state, cart: newCart, total, totalItems };
    }

    case "REMOVE_FROM_CART": {
      const { id } = action.payload;

      console.log(id + "desde reducer");
      const newCart = state.cart.filter((i) => i.id !== id);
      const totalItems = newCart.map((i) => i.cant).reduce((a, b) => a + b, 0);
      const total = newCart.reduce((acc, i) => acc + i.cant * i.precio, 0);
      return { ...state, cart: newCart, total, totalItems };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useCart = () => {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error("No se ha encontrado el Conexto");
  }

  return store;
};
