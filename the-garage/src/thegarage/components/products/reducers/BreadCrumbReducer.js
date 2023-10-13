import { types } from "./types";

export const historyReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      if (!state.some((item) => item.path === action.payload.path)) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};
