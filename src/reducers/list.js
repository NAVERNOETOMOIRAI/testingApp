const initialState = {
  items: [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
    { name: "item 5" }
  ],
  selected: ""
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(state.items[state.items.length - 1]);
      return {
        ...state,
        items: state.items.concat({ name: action.name })
      };
    }
    case "SELECT": {
      return {
        ...state,
        selected: action.index
      };
    }
    default:
      return state;
  }
};

export default list;
