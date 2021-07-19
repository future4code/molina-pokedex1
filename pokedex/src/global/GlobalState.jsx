import React, { useState, useEffect } from "react"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"


const GlobalState = (props) => {

    const [pokemonDetailList, setPokemonDetailList] = useState([])
    const [pokeDexItems, SetPokedexItems] = useState([])

    useEffect(() => {
        getPokemonList()
    }, [])

    const getPokemonList = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then((res) => {
                getPokemonDetail(res.data.results)
            })
            .catch((err) => { alert(err) })

        const getPokemonDetail = (array) => {
            for (let item of array) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                    .then((res) => {
                        setPokemonDetailList((receivedInfo => [...receivedInfo.sort((a, b) => a.id - b.id), res.data]))
                    })
                    .catch((err) => { alert(err) })
            }
        }
    }

    const addPokedex = (pokemon) => {

        const pokeDex = [...pokeDexItems, pokemon]
        SetPokedexItems(pokeDex.sort((a, b) => a.id - b.id))

        const pokedexRemove = pokemonDetailList.filter((item) => {
            return pokemon !== item
        })
        setPokemonDetailList(pokedexRemove)

    }

    const removePokedex = (pokemon) => {
        const pokedex = pokeDexItems.filter((item) => {
            return pokemon !== item
        })
        SetPokedexItems(pokedex)

        const returnPokelist = [...pokemonDetailList, pokemon]
        setPokemonDetailList(returnPokelist.sort((a, b) => a.id - b.id))
    }
    console.log(pokemonDetailList)

    const states = { pokemonDetailList, pokeDexItems }
    const setters = { setPokemonDetailList, SetPokedexItems }
    const requests = { getPokemonList }
    const functions = { addPokedex, removePokedex , getPokemonList}

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState