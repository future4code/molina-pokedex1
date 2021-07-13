import React, { useState, useEffect } from "react"
import axios from "axios"
import { ButtonsContainer, MainContainer, Buttons } from './style'

export const Pokecard = () => {

    const [pokemon, setPokemon] = useState({})
    const [pokeNames, setPokeNames] = useState([])


    useEffect(() => {
        renderPokemon()
        getPokemonDetail(1)
    }, [])

    const renderPokemon = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=20/${pokeNames}`)
            .then((res) => {
                setPokeNames(res.data.results)
                console.log("Nomes",pokeNames)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getPokemonDetail = pokeNames => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNames}`)
            .then((res) => {
                setPokemon(res.data)
                console.log("Detalhes", pokemon)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    

    return (
        <MainContainer>
            <p>{pokemon.name}</p>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'></img>
            <ButtonsContainer>
                <Buttons><p>Adicionar</p></Buttons>
                <Buttons><p>Ver detalhes</p></Buttons>
            </ButtonsContainer>   
        </MainContainer>
    )
}

