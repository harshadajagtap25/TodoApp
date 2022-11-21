import * as types from "./actionTypes";
import axios from "axios";

const createTodo = (payload, token) => (dispatch) => {
  dispatch({ type: types.CREATE_TODO_REQUEST });

  return axios
    .post(`http://localhost:8080/todo/create`, payload, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.CREATE_TODO_SUCCESS, payload: r.data });
      return types.CREATE_TODO_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.CREATE_TODO_FAILURE, payload: e });
      return types.CREATE_TODO_FAILURE;
    });
};
const getTodo = (token) => (dispatch) => {
  dispatch({ type: types.GET_TODO_REQUEST });

  return axios
    .get(`http://localhost:8080/todo/`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
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
