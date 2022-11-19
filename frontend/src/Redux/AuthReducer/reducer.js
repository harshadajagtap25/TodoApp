import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  token: localStorage.getItem("todoapp_token") | undefined,
  isLoading: false,
  isError: false,
};
const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      localStorage.setItem("ticket_token", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: undefined,
      };
    }
    default:
      return state;
  }
};
export { reducer };
