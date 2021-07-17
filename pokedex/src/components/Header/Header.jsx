import React, { useState } from "react";
import { Title, GeneralContainer, Button } from "./style"
import { useHistory } from "react-router"
// import { PokemonList } from "../../pages/pokemonlist/PokemonList";
// import { Pokedex } from "../../pages/pokedex/Pokedex";

export const Header = () => {
  const history = useHistory()

  const [Screen, setScreen] = useState(true)

  const goPokedex = () => {
    history.push("/pokedex")
  }

  const changeScreen = (() => {
    if (Screen === true) {
      setScreen(!Screen)
      return goPokedex()
    } else {
      setScreen(!Screen)
      return goPokemonList()
    }
  })

  const goPokemonList = () => {
    history.push("/")
  }

  return (
    <GeneralContainer>
      <Title><img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'></img></Title>
      <Button onClick={changeScreen}>{Screen ? "Go to Pokedex" : "Back to PokemonList"}</Button>
    </GeneralContainer>
  );
}

