import React, {useState} from "react";
import {Title, Button, GeneralContainer} from "./style"
import {useHistory} from "react-router"
import { useLocation } from "react-router";
// import { PokemonList } from "../../pages/pokemonlist/PokemonList";
// import { Pokedex } from "../../pages/pokedex/Pokedex";

export const Header = () => {
    const location = useLocation()
    const history = useHistory()  
    
    const [Screen, setScreen] = useState (false)
  
    const goPokedex = () => {
      history.push ("/pokedex")
    }

    const changeScreen = (() => {
      setScreen (!Screen)
      if (Screen === true) {
        return goPokedex()
      } else {
        return goPokemonList()
      }
    })

    const goPokemonList = () => {
      history.push ("/")
    }

    return (
      <GeneralContainer >
        {/* {Screen ? goPokedex : goPokemonList} */}
        <Button> 
            <button onClick = {changeScreen}>{Screen? "Go to Pokedex" : "Back to PokemonList"}</button>
            
        </Button>

        <div>
          <Title>Teste</Title>
        </div>      
      </GeneralContainer>
    );
  }
  
