import React, { useContext, useEffect, useState } from "react"
import { Container, ContainerPokemon } from './style.jsx'
import { GlobalStateContext } from "../../global/GlobalStateContext"
import axios from "axios"
import { useParams } from "react-router"

export const Details = () => {
    useEffect(() => {
        getSpecies(species.url)
    }, [])
    
    
    const { pokeName } = useParams()
    const [specie, setSpecie] = useState("")
    
    const { states } = useContext(GlobalStateContext)
    const { pokemonDetailList, pokeDexItems } = states
    const allPokemons = pokemonDetailList.concat(pokeDexItems)
    
    const search = (pokeName) => {
        for (var i = 0; i < allPokemons.length; i++) {
            if (allPokemons[i].name === pokeName) { return i } 
        } 
    }
    const {
        name,
        types,
        sprites,
        height,
        weight,
        species,
    } = allPokemons[search(pokeName)]
    
        const getSpecies = (url) => {
            axios.get(url)
                .then((res) => {
                    setSpecie(String(res.data.genera[7].genus).split(" Pokémon"))
                })
                .catch((er) => {
                    alert(er)
                })

            return specie
        }

        const displayTypes = types && types.map((item) => {
            return <div id={"type"} className={item.type.name}><p>{item.type.name}</p></div>
        })

        return (
            <Container>
                <div id={"name"}>{name}</div>

                <ContainerPokemon img={sprites.other.dream_world.front_default}>

                    <div className={"container-pokemon"}>
                        <div id={"pokeball"}>
                            <div className={"circle1"} />
                            <div className={"circle2"} />
                            <img src={sprites.other.dream_world.front_default} />
                        </div>
                        <div id={"container-type"}>{displayTypes}</div>
                    </div>

                    <div id={"container-specs-atacks"}>
                        <div id={"specs"}>
                            <h3>Características</h3>
                            <p>Altura: {(Number(height) * 0.1).toFixed(2)}m</p>
                            <p>Peso: {(Number(weight) * 0.1).toFixed(2)}kg</p>
                            <p>Espécie: {specie}</p>
                        </div>
                        <div id={"atacks"}>
                            <h3>Principais Ataques</h3>
                            <p>bla bla bla</p>
                            <p>bla bla bla</p>
                            <p>bla bla bla</p>
                            <p>bla bla bla</p>
                            <p>bla bla bla</p>
                        </div>
                    </div>
                </ContainerPokemon>
            </Container>
        )
    }