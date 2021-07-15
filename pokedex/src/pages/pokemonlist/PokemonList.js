import React, { useContext, useEffect } from "react";
/// import {Title, Button, GeneralContainer} from "./style"
import { Pokecard } from '../../components/Pokecard/Pokecard'
import { GlobalStateContext } from "../../global/GlobalStateContext";

export const PokemonList = () => {

    const { states } = useContext(GlobalStateContext)
    const { pokemonDetailList } = states

    const displayCards = pokemonDetailList && pokemonDetailList.length === 20 ? pokemonDetailList.map((item) => {
        return (
            <Pokecard item={item} />
        )
    }) : <p>carregando</p>

    return (
        <div>
            <h1>PokemonList Page</h1>
            {pokemonDetailList ? displayCards : <p>eita</p>}
        </div>

    );
}