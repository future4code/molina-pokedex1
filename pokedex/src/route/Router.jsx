import React from "react"
import { Header } from '../components/Header/Header'
import { PokemonList } from '../pages/pokemonlist/PokemonList'
import { Pokedex } from '../pages/pokedex/Pokedex'
import { Details } from '../pages/details/Details.js'
import { DetailsOld } from '../pages/details/Details_old'
import { BrowserRouter, Switch, Route } from "react-router-dom";


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

                <Route exact path={"/details/:pokeName"}>
                    <Details />
                </Route>

                <Route exact path={"/details/more/:pokeName"}>
                    <DetailsOld />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}