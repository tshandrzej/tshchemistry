import * as types from './table.types';

const initialState = {
  data: [],
  whileFetching: false,
  element: [],
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LIST_REQUEST:
      return {
        ...state,
        whileFetching: true,
      };
    case types.FETCH_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        whileFetching: false,
      };
    case types.FETCH_LIST_FAILURE:
      return {
        ...state,
        whileFetching: false,
      };
    case types.FETCH_ELEMENT_REQUEST:
      return {
        ...state,
        whileFetching: true,
      };
    case types.FETCH_ELEMENT_SUCCESS:
      return {
        ...state,
        element: action.payload,
        whileFetching: false,
      };
    case types.FETCH_ELEMENT_FAILURE:
      return {
        ...state,
        whileFetching: false,
      };
    case types.EDIT_ELEMENT_REQUEST:
      return {
        ...state,
        whileFetching: true,
      };
    case types.EDIT_ELEMENT_SUCCESS:
      return {
        ...state,
        whileFetching: false,
      };
    case types.EDIT_ELEMENT_FAILURE:
      return {
        ...state,
        whileFetching: false,
      };
    default:
      return state;
  }
};
