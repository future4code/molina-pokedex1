import React, { useContext } from "react"
import { ButtonsContainer, MainContainer, Buttons, Image } from './style'
import { useHistory, useLocation } from "react-router"
import { GlobalStateContext } from "../../global/GlobalStateContext"


export const Pokecard = (props) => {
    const history = useHistory()
    const location = useLocation()
    const { functions } = useContext(GlobalStateContext)
    const { addPokedex, removePokedex } = functions

    return (
        <MainContainer>
                <Image src={props.item.sprites.front_default}></Image>
                <p>{props.item.name} #{props.item.order} </p>
            <ButtonsContainer>
                {location.pathname === "/pokedex" ?
                    <Buttons onClick={() => removePokedex(props.item)}><p> Remover </p></Buttons> :
                    <Buttons onClick={() => addPokedex(props.item)}><p>Add Pokedex</p></Buttons>}
                <Buttons onClick={() => history.push(`/details/${props.item.name}`)}><p>Ver detalhes</p></Buttons>
            </ButtonsContainer>
        </MainContainer>
    )
}