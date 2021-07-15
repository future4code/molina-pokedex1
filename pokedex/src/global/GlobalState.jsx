import React, { useState, useEffect } from "react"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"


const GlobalState = (props) => {

    const [pokemonDetailList, setPokemonDetailList] = useState([])
    const [pokeNames, setPokeNames] = useState([])
    const [pokeDexItems, SetPokedexItems] = useState ([])
    
    useEffect(() => {
        getPokemonList()
    }, [])

    const getPokemonList = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then((res)=>{
            getPokemonDetail(res.data.results)
        })
        .catch((err)=>{alert(err)})

        const getPokemonDetail = (array) => {
            for (let item of array) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then((res)=>{
                    setPokemonDetailList((receivedInfo => [...receivedInfo, res.data]))
                })
                .catch((err)=>{alert(err)}) 
            }
        }
    }

    const addPokedex = (item) => {
        const pokeDex = [...pokeDexItems,item]
        SetPokedexItems (pokeDex)
        console.log(pokeDexItems)
    }

    const states = { pokemonDetailList, pokeNames, pokeDexItems }
    const setters = { setPokemonDetailList, setPokeNames, SetPokedexItems }
    const requests = { getPokemonList }
    const functions = {addPokedex}

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
    }

export default GlobalState