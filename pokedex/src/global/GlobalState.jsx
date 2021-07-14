import React, { useState ,useEffect } from "react"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"

const GlobalState = (props) => {

    const [pokemonDetailList, setPokemonDetailList] = useState([])
    const [pokeNames, setPokeNames] = useState(['https://pokeapi.co/api/v2/pokemon?limit=20'])

    useEffect(() => {
        getAllPokemons()
    }, [])

    // const getPokemonList = async () => {
    //     try {
    //         const res = await axios
    //             .get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
    //         setPokeNames(res.data.results)
    //         // console.log("o que recebeu PARA pokeNames", res.data.results)
    //         // console.log("o que tem em pokeNames", pokeNames)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    
    // const getPokemonDetail = async (pokeNames) => {
    //     try {
    //         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNames}`)
    //         // console.log("o que recebeu PARA pokemon", res.data)
    //         return res.data
    //     } catch (err) {
    //         console.log("erro no getPokeminDetail", err)
    //     }
    // }

    // const arrayPokemonDetails = async () => {
    //     const receivedInfo = []
    //     for (let item of pokeNames) {
    //         const info = await getPokemonDetail(item.name)
    //         receivedInfo.push(info)
    //     }
    //     setPokemonDetailList(receivedInfo)
    // }


    // const[pokemonDetailList, setPokemonDetailList] = useState([])
    // const [pokeNames, setPokeNames] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
 
   const getAllPokemons = async () => {
     const res = await fetch(pokeNames)
     const data = await res.json()
 
     setPokeNames(data.next)
 
     function createPokemonObject(results)  {
       results.forEach( async pokemon => {
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
         const data =  await res.json()
         setPokemonDetailList( currentList => [...currentList, data])
        //  await pokemonDetailList.sort((a, b) => a.id - b.id)
       })
     }
     createPokemonObject(data.results)
   }

    const states = {pokemonDetailList, pokeNames}
    const setters = { setPokemonDetailList, setPokeNames}
    const requests = {getAllPokemons}
    
    return (
        <GlobalStateContext.Provider value={{states , setters, requests}}>
          {props.children}
        </GlobalStateContext.Provider>
      )
    }

export default GlobalState