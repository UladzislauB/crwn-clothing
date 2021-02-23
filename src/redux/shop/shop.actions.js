import SHOP_ACTIONS_TYPES from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
