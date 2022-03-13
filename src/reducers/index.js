const reducer = (state, action) => {
  switch (action.type) {
    case "SET-ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
