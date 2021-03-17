export const addToCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteFromCart = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};
