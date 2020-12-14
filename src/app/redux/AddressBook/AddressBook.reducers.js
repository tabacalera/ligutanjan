import * as types from "./AddressBook.types";

const initialState = {
  loading: false,
  addressBooks: [],
};

function addressBooks(state = initialState, action = null) {
  switch (action.type) {
    case types.LIST_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LIST_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case types.LIST_LOAD_SUCCESS:
      return {
        ...state,
        addressBooks: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default addressBooks;
