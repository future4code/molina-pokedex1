import React, { useState, useEffect } from "react"
import axios from "axios"
import { ButtonsContainer, MainContainer, Buttons } from './style'

export const Pokecard = () => {

    // const [pokemon, setPokemon] = useState({})


    // useEffect(() => {
    //     renderizaPokemon()
    // }, [])

    // const renderizaPokemon = () => {
    //     axios
    //         .get(`https://pokeapi.co/api/v2/pokemon/`)
    //         .then((res) => {
    //             setPokemon(res.data.results)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
    return (
        <MainContainer>
            <p>Charizard</p>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'></img>
            {/* <TextContainer>
                <p></p>
            </TextContainer> */}
            <ButtonsContainer>
                <Buttons><p>Adicionar</p></Buttons>
                <Buttons><p>Ver detalhes</p></Buttons>
            </ButtonsContainer>   
        </MainContainer>
    )
}

