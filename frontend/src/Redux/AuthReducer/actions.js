import * as types from "./actionTypes";
import axios from "axios";

const signup = (payload) => (dispatch) => {

  dispatch({ type: types.SIGNIN_REQUEST });

  return axios
    .post(`http://localhost:8080/user/signup`, payload)
    .then((r) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: r.data });
      return types.SIGNIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.SIGNIN_FAILURE, payload: e.msg });
      return types.SIGNIN_FAILURE;
    });
};

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("http://localhost:8080/user/login", payload)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      console.log(r.data);
      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE, payload:err.msg });
      return types.LOGIN_FAILURE;
    });
};

export { signup, login };
