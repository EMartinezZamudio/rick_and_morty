// modulos
import axios from "axios";

// variales
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

// constantes
const END_POINT = "http://localhost:3001/rickandmorty/fav";

export const addFav = (char) => {
  return (dispatch) => {
    axios.post(END_POINT, char).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  return (dispatch) => {
    axios.delete(`${END_POINT}/${id}`).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
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
