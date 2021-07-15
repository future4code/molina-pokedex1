import React, {useState, useContext} from "react"
import { ButtonsContainer, MainContainer, Buttons } from './style'
import { useHistory, useLocation } from "react-router"
import { GlobalStateContext } from "../../global/GlobalStateContext"


export const Pokecard = (props) => {
    const history = useHistory() 
    const location = useLocation()
    const {functions} = useContext(GlobalStateContext)
    const {addPokedex, removePokedex} = functions
    // const [pokeDexItems, SetPokedexItems] = useState ([])

    // const addPokedex = (item) => {
    //     const pokeDex = [...pokeDexItems,item]
    //     SetPokedexItems (pokeDex)
    // }
    
    return (
        <MainContainer>
            <p>{props.item.name}</p>
            <img src={props.item.sprites.front_shiny}></img>
            <ButtonsContainer>
                {location.pathname === "/pokedex" ? 
                <Buttons onClick ={() => removePokedex(props.item)}><p> Remover </p></Buttons> : 
                <Buttons onClick ={() => addPokedex(props.item)}><p>Adicionar</p></Buttons>}
                <Buttons onClick={()=> history.push("/details")}><p>Ver detalhes</p></Buttons>
            </ButtonsContainer>
        </MainContainer>
    )
}

