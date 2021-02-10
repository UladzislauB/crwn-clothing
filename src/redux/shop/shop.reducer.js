import SHOP_ACTIONS_TYPES from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTIONS_TYPES.FETCH_COLLECTIONs_START:
      return {
        ...state,
        isFetching: true,
      };

    case SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
