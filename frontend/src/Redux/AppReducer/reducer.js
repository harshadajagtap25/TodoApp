import * as types from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.CREATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.CREATE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export { reducer };
