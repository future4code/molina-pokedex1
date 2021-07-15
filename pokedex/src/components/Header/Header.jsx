import React, {useState} from "react";
import {Title, ContainerButton, GeneralContainer, Button} from "./style"
import {useHistory} from "react-router"
// import { PokemonList } from "../../pages/pokemonlist/PokemonList";
// import { Pokedex } from "../../pages/pokedex/Pokedex";

export const Header = () => {
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
      <GeneralContainer>
     
        <ContainerButton> 
            <Button onClick = {changeScreen}>{Screen? "Go to Pokedex" : "Back to PokemonList"}</Button>
            <button onClick={()=>history.push("/details")}>apagar esse botão depois</button>        
        </ContainerButton>
          
        <div>
          <Title>Teste</Title>
        </div>      
      </GeneralContainer>
    );
  }
  
