import React, { useContext, useEffect } from "react";
/// import {Title, Button, GeneralContainer} from "./style"
import { Pokecard } from '../../components/Pokecard/Pokecard'
import { GlobalStateContext } from "../../global/GlobalStateContext";

export const PokemonList = () => {

    const { states, setters, requests } = useContext(GlobalStateContext)
    const { getAllPokemons } = requests
    const { pokemonDetailList } = states

    // useEffect(() => {
    //     getAllPokemons()
    // }, [])
    // function testePromisse () {
    //     Promise.all([
    //         getPokemonList(),
    //         arrayPokemonDetails()
    //     ])
    // }

    const displayCards = pokemonDetailList && pokemonDetailList.length === 20 ? pokemonDetailList.map((item) => {
        return (
            <Pokecard item={item} />
        )
    }) : <p>carregando</p>

    // setTimeout(() => { console.log("chegou pelo GlobalState", pokemonDetailList) }, 5000)
    return (
        <div>
            <h1>PokemonList Page</h1>
            {pokemonDetailList ? displayCards : <p>eita</p>}
        </div>

    );
}