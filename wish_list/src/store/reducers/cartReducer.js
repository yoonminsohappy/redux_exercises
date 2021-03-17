const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};
export default cartReducer;

const INITIAL_STATE = [
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
];
