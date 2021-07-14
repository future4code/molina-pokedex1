import React, { useState, useEffect } from "react"
import axios from "axios"
import { ButtonsContainer, MainContainer, Buttons } from './style'

export const Pokecard = (props) => {
    return (
        <MainContainer>
            <p>{props.item.name}</p>
            <img src={props.item.sprites.front_shiny}></img>
            <ButtonsContainer>
                <Buttons><p>Adicionar</p></Buttons>
                <Buttons><p>Ver detalhes</p></Buttons>
            </ButtonsContainer>
        </MainContainer>
    )
}

