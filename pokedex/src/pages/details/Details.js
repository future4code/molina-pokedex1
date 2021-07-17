import React, { useContext, useEffect, useState } from "react"
import { Container, PokedexDeviceScreenBorder, PokedexDeviceScreenTopBorder, PokedexDeviceScreenBottonBorder, PokedexDeviceScreen, ContainerRow, ContainerColumn, PokemonName, PokemonImage, PokeType, ContainerSpecs, ContainerStats, Skill, LevelBar } from './style.jsx'
import { Button } from '../../components/Header/style'
import { GlobalStateContext } from "../../global/GlobalStateContext"
import axios from "axios"
import { useHistory, useParams } from "react-router"

export const Details = () => {
    useEffect(() => {
        getSpecies(species.url)
    }, [])

    const history = useHistory()
    const { pokeName } = useParams()
    const [specie, setSpecie] = useState("")

    const { states } = useContext(GlobalStateContext)
    const { pokemonDetailList, pokeDexItems } = states
    const allPokemons = pokemonDetailList.concat(pokeDexItems)

    const search = (pokeName) => {
        for (let i = 0; i < allPokemons.length; i++) {
            if (allPokemons[i].name === pokeName) { return i }
        }
    }
    const {
        name,
        order,
        types,
        sprites,
        height,
        weight,
        species,
        abilities,
        stats,
    } = allPokemons[search(pokeName)]

    const getSpecies = (url) => {
        axios.get(url)
            .then((res) => {
                setSpecie(String(res.data.genera[7].genus).split(" Pokémon"))
            })
            .catch((er) => {
                alert(er)
            })

        return specie
    }

    const displayTypes = types && types.map((item) => {
        return <div id={"type"} className={item.type.name}><p>{item.type.name}</p></div>
    })

    const displayAbilities = abilities && abilities.map((item) => {
        return <p>{item.ability.name}</p>
    })

    const statsHp = stats[0].base_stat
    const statsAttack = stats[1].base_stat
    const statsDefense = stats[2].base_stat
    const statsSpecialAttack = stats[3].base_stat
    const statsSpecialDefense = stats[4].base_stat
    const statsSpeed = stats[5].base_stat

    return (
        <Container>
            <Button
                onClick={() => history.goBack()}>
                voltar
            </Button>
            <PokedexDeviceScreenBorder>
                <PokedexDeviceScreenTopBorder>
                    <div /><div />
                </PokedexDeviceScreenTopBorder>
                <PokedexDeviceScreen>
                    <PokemonName>
                        {name} #{order}
                    </PokemonName>

                    <ContainerRow>

                        <PokemonImage>
                            <div id={"pokeball"}>
                                <div className={"circle"} />
                                <img
                                    alt={name}
                                    src={sprites.other.dream_world.front_default} />
                            </div>
                            <PokeType>{displayTypes}</PokeType>
                        </PokemonImage>

                        <ContainerColumn>

                            <ContainerSpecs>
                                <h3>Habilidades</h3>
                                {displayAbilities}
                                <hr />
                                <h3>Características</h3>
                                <p>Espécie: {specie}</p>
                                <p>Altura: {(Number(height) * 0.1).toFixed(2)}<span>m</span></p>
                                <p>Peso: {(Number(weight) * 0.1).toFixed(2)}<span>kg</span></p>
                                <hr />
                            </ContainerSpecs>

                            <ContainerStats>
                                <h3>Estatísticas</h3>

                                <Skill>
                                    <p id={"skill-title"}>Força</p>
                                    <LevelBar level={statsHp}>
                                        <div className={"level"}>
                                            <p>{statsHp}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>

                                <Skill>
                                    <p id={"skill-title"}>Ataque</p>
                                    <LevelBar level={statsAttack}>
                                        <div className={"level"}>
                                            <p>{statsAttack}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>

                                <Skill>
                                    <p id={"skill-title"}>Defesa</p>
                                    <LevelBar level={statsDefense}>
                                        <div className={"level"}>
                                            <p>{statsDefense}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>

                                <Skill>
                                    <p id={"skill-title"}>Ataque Especial</p>
                                    <LevelBar level={statsSpecialAttack}>
                                        <div className={"level"}>
                                            <p>{statsSpecialAttack}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>


                                <Skill>
                                    <p id={"skill-title"}>Defesa Especial</p>
                                    <LevelBar level={statsSpecialDefense}>
                                        <div className={"level"}>
                                            <p>{statsSpecialDefense}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>

                                <Skill>
                                    <p id={"skill-title"}>Velocidade</p>
                                    <LevelBar level={statsSpeed}>
                                        <div className={"level"}>
                                            <p>{statsSpeed}</p>
                                        </div>
                                    </LevelBar>
                                </Skill>

                            </ContainerStats>

                        </ContainerColumn>

                    </ContainerRow>
                </PokedexDeviceScreen>

                <PokedexDeviceScreenBottonBorder>
                    <div id={"led"} />
                    <div>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                    </div>
                </PokedexDeviceScreenBottonBorder>
            </PokedexDeviceScreenBorder>

        </Container>
    )
}