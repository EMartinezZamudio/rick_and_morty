import { FETCH_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      // eslint-disable-next-line no-case-declarations
      if (payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        const filterAllCharacters = state.allCharacters.filter((char) => {
          return char.gender === payload;
        });

        return {
          ...state,
          myFavorites: filterAllCharacters,
        };
      }

    case ORDER:
      // eslint-disable-next-line no-case-declarations
      const orderCharacters = state.myFavorites.sort((a, b) => {
        if (payload === "A") return a.id - b.id;
        if (payload === "D") return b.id - a.id;
      });
      return {
        ...state,
        myFavorites: orderCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
