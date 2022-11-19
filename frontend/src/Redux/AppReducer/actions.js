import * as types from "./actionTypes";
import axios from "axios";

const createTodo = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_TODO_REQUEST });

  return axios
    .post(`https://TODO25.herokuapp.com/TODO/create`, payload)
    .then((r) => {
      dispatch({ type: types.CREATE_TODO_SUCCESS, payload: r.data });
      return types.CREATE_TODO_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.CREATE_TODO_FAILURE, payload: e });
      return types.CREATE_TODO_FAILURE;
    });
};
const getTodo = (payload) => (dispatch) => {
  dispatch({ type: types.GET_TODO_REQUEST });

  return axios
    .get(`https://TODO25.herokuapp.com/`)
    .then((r) => {
      dispatch({ type: types.GET_TODO_SUCCESS, payload: r.data });
      return types.GET_TODO_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_TODO_FAILURE, payload: e });
      return types.GET_TODO_FAILURE;
    });
};

export { createTodo, getTodo };
