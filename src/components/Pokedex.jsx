import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonData, getActualPokemon } from "../actions/index";
import { useState } from "react";
import PokedexInfo from "./PokedexInfo";
import PokemonList from "./PokemonList";
import "../assets/styles/Pokedex.css";

export default function Pokedex() {
  const dispatch = useDispatch();
  const [offset, setoffset] = useState(0);
  const [input, setInput] = useState("");

  const handdleChange = (e) => {
    setInput(e.target.value);
    handdleInput();
  };

  const handdleInput = () => {
    dispatch(getActualPokemon(input));
  };

  const getMore = () => {
    dispatch(getPokemonData(offset));
  };
  const getBack = () => {
    dispatch(getPokemonData(offset));
  };
  useEffect(() => {
    const getData = () => {
      dispatch(getPokemonData(offset));
      setoffset(15);
    };
    // eslint-disable-next-line
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="pokedex">
      <div className="pokedex__selector">
        <p>Pokemon</p>
        <input
          type="text"
          placeholder="Buscar pokemon"
          className="input"
          name={input}
          onChange={(e) => handdleChange(e)}
        />
        <button className="button" onClick={() => handdleInput()}>
          Buscar
        </button>
        <div className="pokedex__selector-cards">{<PokemonList />}</div>
        <div className="security-space-min actions-contaniner">
          <button
            className="button"
            onClick={() => getBack(setoffset(offset - 15))}
          >
            Retroceder
          </button>
          <button
            className="button"
            onClick={() => getMore(setoffset(offset + 15))}
          >
            Avanzar
          </button>
        </div>
      </div>
      <div className="pokedex-info">
        <PokedexInfo />
      </div>
    </div>
  );
}
