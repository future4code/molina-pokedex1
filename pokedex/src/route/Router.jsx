import React from "react"
import { Header } from '../components/Header/Header'
import { PokemonList } from '../pages/pokemonlist/PokemonList'
import { Pokedex } from '../pages/pokedex/Pokedex'
import { Details } from '../pages/details/Details'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";


export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path={"/"}>
                    <PokemonList />
                </Route>

                <Route exact path={"/pokedex"}>
                    <Pokedex />
                </Route>

                <Route exact path={"/details"}>
                    <Details />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}