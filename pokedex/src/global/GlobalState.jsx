import React, { useState, useEffect } from "react"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"

const GlobalState = (props) => {

    const [pokemonDetailList, setPokemonDetailList] = useState([])
    const [pokeNames, setPokeNames] = useState([])

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

const states = { pokemonDetailList, pokeNames }
const setters = { setPokemonDetailList, setPokeNames }
const requests = { getPokemonList }


return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState