import React from "react";
import { useSelector } from "react-redux";
import "../assets/styles/PokedexInfo.css";

export default function PokedexInfo() {
  const actualPokemon = useSelector((state) => state.actualPokemon);

  return (
    <>
      {actualPokemon.name ? (
        <div className="container__small">
          <p className="container__small-tittle">
            {actualPokemon.name || "Nombre del pokemon"}
          </p>
          <img
            src={
              actualPokemon.sprites.front_default ||
              actualPokemon.sprites.front_shiny ||
              actualPokemon.sprites.back_default
            }
            alt="pokemonimage"
            className="container__small-img"
            width="220px"
          />
          <div className="container__small-description">
            <div className="">
             id: {actualPokemon.id}
            </div>

            <div>Tipo: {actualPokemon.types.map(e=>{return(
              <span className="container__small-type" key={e.type.name}>{e.type.name}</span>
            )}) || 'Sin tipo'}</div>
            
            <div>Movimientos: {actualPokemon.abilities.map(e=>{return(
              <span className="container__small-type" key={e.ability.name}>{e.ability.name}</span>
            )}) || 'Sin tipo'}</div>
                     </div>
        </div>
      ) : (
        <div className="container__small">
          <p className="container-small-txt">
            Selecciona un pokemon para ver aca su informacíon
          </p>
        </div>
      )}
    </>
  );
}
