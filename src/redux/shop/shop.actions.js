import SHOP_ACTIONS_TYPES from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: SHOP_ACTIONS_TYPES.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
