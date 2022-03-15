const reducer = (state, action) => {
  switch (action.type) {
    case "SET-POKEMON-DATA":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET-ACTUAL-POKEMON":
      return {
        ...state,
        actualPokemon: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
