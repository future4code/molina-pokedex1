import React, {useContext} from "react";
// import {Title, Button, GeneralContainer} from "./style"
import {Pokecard} from '../../components/Pokecard/Pokecard'
import {useHistory} from "react-router"
import { GlobalStateContext } from "../../global/GlobalStateContext";


export const Pokedex = () => {


    const { states } = useContext(GlobalStateContext)
    const { pokeDexItems } = states

    const displayCards =  pokeDexItems ? pokeDexItems.map((item) => {
        return (  
                <Pokecard item={item} />
        )
    }) : <p>Carregando...</p>
   

    return (
        <div>
          {displayCards.length > 0  ? displayCards : <p>Não tem cards</p>}
        </div>

    );
  }