import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, payload] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(payload)
        ),
      };

    case FILTER:
      const filterAllCharacters = [...state.allCharacters].filter(
        (char) => char === payload
      );

      return {
        ...state,
        myFavorites: filterAllCharacters,
      };

    case ORDER:
      const orderAllCharacters = [...state.allCharacters].sort((a, b) => {
        if (payload === "A") return a - b;
        if (payload === "D") return b - a;
      });

      return {
        ...state,
        myFavorites: orderAllCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
