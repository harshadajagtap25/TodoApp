import * as types from "./actionTypes";
import axios from "axios";

const signup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNIN_REQUEST });

  return axios
    .post(`https://ticket25.herokuapp.com/user/signup`, payload)
    .then((r) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: r.data });
      // console.log("Reg Success");
      return types.SIGNIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.SIGNIN_FAILURE, payload: e });
      return types.SIGNIN_FAILURE;
    });
};

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("https://ticket25.herokuapp.com/user/login", payload)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      console.log(r.data);
      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
      return types.LOGIN_FAILURE;
    });
};

export { signup, login };
