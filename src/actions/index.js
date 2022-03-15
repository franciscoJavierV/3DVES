import axios from "axios";

export const setPokemonData = (payload) => ({
  type: "SET-POKEMON-DATA",
  payload,
});

export const setActualPokemon = (payload) => ({
  type: "SET-ACTUAL-POKEMON",
  payload,
});

//not completed yet
export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const getPokemonData = (payload) => {
  const limit = 28; //consts should be on a single archive
  const offset = payload;
  return (dispatch) => {
    //fetch to backend register service
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((payload) => dispatch(setPokemonData(payload.data.results)))
      .catch((err) => dispatch(setError(err)));
  };
};

export const getActualPokemon = (data) => {
  return (dispatch) => {
    console.log(process.env.apiUrl);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`).then(({ data }) => {
      dispatch(setActualPokemon(data));
    });
  };
};

export { setError as default };
