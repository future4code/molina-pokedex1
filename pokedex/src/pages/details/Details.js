import React, { useContext } from "react"
import { Container, ContainerPokemon } from './style.jsx'
import { GlobalStateContext } from "../../global/GlobalStateContext"

export const Details = () => {

    const { states } = useContext(GlobalStateContext)
    const { pokemonDetailList } = states
    const { name , types, sprites } = pokemonDetailList[0]

    const displayTypes = types && types.map((item)=>{
        return <div id={"type"}><p>{item.type.name}</p></div>
    })

    return (
        <Container>
            <ContainerPokemon img={sprites.other.dream_world.front_default}>
                <div id={"name"}>{name}</div>
                <div id={"container-type"}>
                    {displayTypes}
                </div>
                <div id={"image"}/>
                <div id={"container-specs-atacks"}>
                    <div id={"specs"}>
                        <h3>
                            Poderes
                        </h3>
                        <p>bla bla bla</p>
                        <p>bla bla bla</p>
                        <p>bla bla bla</p>
                        <p>bla bla bla</p>
                        <p>bla bla bla</p>
                    </div>
                    <div id={"atacks"}>
                        <h3>
                            Principais Ataques
                        </h3>
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