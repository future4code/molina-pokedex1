import React from "react"
import { Container, ContainerPokemon } from './style.jsx'
// import { mockData } from "./mockData.js"

function Details() {

    // const pokeDetail = mockData

    // const selectedSpec = pokeDetail.map((item)=>{
    //     return (
    //         <ContainerPokemon>
    //             <div id={"name"}></div>
    //             <div id={"type"}></div>
    //         </ContainerPokemon>
    //     )
    // })

    return (
        <Container>
            <ContainerPokemon>
                <div id={"name"}>butterfree</div>
                <div id={"container-type"}>
                    <div id={"type"}>Grass</div>
                    <div id={"type"}>Grass</div>
                    <div id={"type"}>Grass</div>
                </div>
                <div id={"image"}></div>
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
export default Details