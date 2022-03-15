import React from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { getActualPokemon } from "../actions/index"
import '../assets/styles/PokemonList.css'

export default function PokemonList() {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.pokemon)
    const handdleClick=(e , data)=>{
        e.preventDefault()
        dispatch(getActualPokemon(data)) 
    }
    return (
        <div className="cards-container">
            {pokemonList.length > 0 ? pokemonList.map((data) =>{
            return(
                <button className="card" key={data.url} onClick={(e)=>handdleClick(e, data.name)}>
                    <p>{data.name}</p>
                </button>
            )
            })  : null}
        </div>
    )
}
