import React, { useContext, useEffect } from "react";
import { Pokecard } from '../../components/Pokecard/Pokecard'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { GridContainer } from './style'

export const PokemonList = () => {

    const { states } = useContext(GlobalStateContext)
    const { pokemonDetailList } = states

    const displayCards = pokemonDetailList && pokemonDetailList.length > 0 ? pokemonDetailList.map((item) => {
        return (
            <Pokecard key={item.id} item={item} />
        )
    }) : <p>carregando</p>

    return (
        <GridContainer>
            {displayCards}
        </GridContainer>

    );
}