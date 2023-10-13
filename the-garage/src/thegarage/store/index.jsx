/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = [];

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
    case 'ADD_TO_CART': {
      const { item, cant } = action.payload;
      const { razon_social: nombre_empresa } = item.empresa;
      const { id_empresa } = item;
      const empresaIndex = state.findIndex((e) => e.id_empresa === id_empresa);
      if (empresaIndex !== -1) {
        const itemInCart = state[empresaIndex].cart.find(
          (i) => i.id === item.id,
        );
        const newCart = itemInCart
          ? state[empresaIndex].cart.map((i) =>
              i.id === item.id ? { ...i, cant: i.cant + cant } : i,
            )
          : [...state[empresaIndex].cart, { ...item, cant }];
        const totalItems = newCart
          .map((i) => i.cant)
          .reduce((a, b) => a + b, 0);
        const total = newCart
          .map((i) => i.cant * i.precio)
          .reduce((a, b) => a + b, 0);
        return [
          ...state.slice(0, empresaIndex),
          {
            id_empresa,
            nombre_empresa,
            cart: newCart,
            total,
            totalItems,
          },
          ...state.slice(empresaIndex + 1),
        ];
      } else {
        const newCart = [{ ...item, cant, id_empresa }];
        const totalItems = newCart
          .map((i) => i.cant)
          .reduce((a, b) => a + b, 0);
        const total = newCart
          .map((i) => i.cant * i.precio)
          .reduce((a, b) => a + b, 0);
        return [
          ...state,
          {
            id_empresa,
            nombre_empresa,
            cart: newCart,
            total,
            totalItems,
          },
        ];
      }
    }

    case 'REMOVE_FROM_CART': {
      const { id, id_empresa } = action.payload;
      const empresaIndex = state.findIndex((e) => e.id_empresa === id_empresa);
      if (empresaIndex !== -1) {
        const itemIndex = state[empresaIndex].cart.findIndex(
          (i) => i.id === id,
        );
        const newCart =
          state[empresaIndex].cart[itemIndex].cant === 1
            ? state[empresaIndex].cart.filter((i) => i.id !== id)
            : state[empresaIndex].cart.map((i) =>
                i.id === id ? { ...i, cant: i.cant - 1 } : i,
              );
        const totalItems = newCart
          .map((i) => i.cant)
          .reduce((a, b) => a + b, 0);
        const total = newCart
          .map((i) => i.cant * i.precio)
          .reduce((a, b) => a + b, 0);

        if (totalItems === 0) {
          return [
            ...state.slice(0, empresaIndex),
            ...state.slice(empresaIndex + 1),
          ];
        } else {
          return [
            ...state.slice(0, empresaIndex),
            {
              ...state[empresaIndex],
              cart: newCart,
              total,
              totalItems,
            },
            ...state.slice(empresaIndex + 1),
          ];
        }
      } else {
        return state;
      }
    }

    case 'REMOVE_COMPANY': {
      const id_empresa = action.payload;
      const empresaIndex = state.findIndex((e) => e.id_empresa === id_empresa);
      if (empresaIndex !== -1) {
        return [
          ...state.slice(0, empresaIndex),
          ...state.slice(empresaIndex + 1),
        ];
      } else {
        return state;
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useCart = () => {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error('No se ha encontrado el Conexto');
  }

  return store;
};
