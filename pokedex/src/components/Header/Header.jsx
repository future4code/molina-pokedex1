import React, { useContext, useEffect, useState } from "react";
import { Title, GeneralContainer, Button } from "./style"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { PokemonName } from "../../pages/details/style";
import { GlobalStateContext } from "../../global/GlobalStateContext";

export const Header = () => {

  const history = useHistory()
  const { pokeName } = useParams() //por algum motivo nao está identificando url
  const location = useLocation() //alternativa para useParams
  const displayPokeName = location.pathname.includes("detail") && location.pathname.split("/details/")[1]
  const { states, functions } = useContext(GlobalStateContext)
  const { pokeDexItems, pokemonDetailList } = states
  const { addPokedex, removePokedex, getPokemonList } = functions
  const [Screen, setScreen] = useState(true)
  const allPokemons = pokemonDetailList.concat(pokeDexItems)

  const itemAddOrRemove = (pokeName) => {
    for (let i = 0; i < allPokemons.length; i++) {
      if (allPokemons[i].name === pokeName) { return allPokemons[i] }
    }
  }

  let pokemonItem = itemAddOrRemove(displayPokeName)

  const search = (pokemon) => {
    let result
    for (let item of pokeDexItems) {
      if (item.name === pokemon) {
        result = true
      } else {
        result = false
      }
    }
    return result
  }

  let pokemonAddOrRemove = search(displayPokeName)

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
  return location.pathname.includes("detail") && !location.pathname.includes("more")?
    <GeneralContainer>
      <Button onClick={() => history.goBack()}> voltar </Button>
      <PokemonName>{displayPokeName}</PokemonName>
      {pokemonAddOrRemove ?
        <Button onClick={() => removePokedex(pokemonItem)}>Remover da Pokedex</Button>
        :
        <Button onClick={() => addPokedex(pokemonItem)}>Adicionar na Pokedex</Button>}
    </GeneralContainer>
    :
    <GeneralContainer>
      <Title><img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'></img></Title>
      <Button onClick={changeScreen}>{Screen ? "Go to Pokedex" : "Back to PokemonList"}</Button>
    </GeneralContainer>

}