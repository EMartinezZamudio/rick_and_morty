// modulos
import axios from "axios";

// variales
import { FETCH_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

// constantes
const END_POINT = "http://localhost:3001/rickandmorty/fav";

export const fetchFavorite = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(END_POINT);
      return dispatch({
        type: FETCH_FAV,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const addFav = (char) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(END_POINT, char);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      throw new Error("error en el action addFav");
    }
  };
  // axios.post(END_POINT, char).then(({ data }) => {
  //   return dispatch({
  //     type: ADD_FAV,
  //     payload: data,
  //   });
  // });
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${END_POINT}/${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      throw new Error("error en el action remove fav");
    }

    // axios.delete(`${END_POINT}/${id}`).then(({ data }) => {
    //   return dispatch({
    //     type: REMOVE_FAV,
    //     payload: data,
    //   });
    // });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
