import React, {useContext} from "react";
import {Pokecard} from '../../components/Pokecard/Pokecard'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { GridContainer } from "../pokemonlist/style";


export const Pokedex = () => {


    const { states } = useContext(GlobalStateContext)
    const { pokeDexItems } = states

    const displayCards =  pokeDexItems ? pokeDexItems.map((item) => {
        return (  
                <Pokecard item={item} />
        )
    }) : <p>Carregando...</p>
   

    return (
          <GridContainer>
            {displayCards.length > 0  ? displayCards : <p>Não tem cards</p>}
          </GridContainer>
    );
  }