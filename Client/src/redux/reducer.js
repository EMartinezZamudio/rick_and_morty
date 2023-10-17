import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(payload)
        ),
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
      const orderAllCharacters = state.allCharacters.sort((a, b) => {
        if (payload === "A") return a.id - b.id;
        if (payload === "D") return b.id - a.id;
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
