const add = (name) => {
  return {
    type: "ADD",
    name
  };
};

const select = (index) => {
  return {
    type: "SELECT",
    index
  };
};

export { add, select };
