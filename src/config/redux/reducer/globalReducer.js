const initialState = {
  name: "Arifin",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Nur",
    };
  }
  return state;
};

export default globalReducer;
