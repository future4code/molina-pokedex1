import React, { useContext, useEffect, useState } from "react"
import { Container, PokedexDeviceScreenBorder, PokedexDeviceScreenTopBorder, PokedexDeviceScreenBottonBorder, PokedexDeviceScreen, ContainerRow, ContainerColumn, PokemonName, PokemonImage, PokeType, ContainerSpecs, ContainerStats, Skill, LevelBar } from './style.jsx'
import { Button } from '../../components/Header/style'
import { GlobalStateContext } from "../../global/GlobalStateContext"
import axios from "axios"
import { useHistory, useParams } from "react-router"

export const Details = () => {

    const history = useHistory()
    const { pokeName } = useParams()
    const [specie, setSpecie] = useState("")

    useEffect(() => {
        getSpecies(species.url)
    }, [pokeName])

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
        moves,
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

    const displayMoves = moves && moves.map((item, index) => {
        return <p>{item.move.name}</p>
    }).filter((item, index) => { return index < 6 })

    const statsHp = stats[0].base_stat
    const statsAttack = stats[1].base_stat
    const statsDefense = stats[2].base_stat
    const statsSpecialAttack = stats[3].base_stat
    const statsSpecialDefense = stats[4].base_stat
    const statsSpeed = stats[5].base_stat

    return (
        <Container>
            
            <Button onClick={()=>history.push(`/details/more/${pokeName}`)}>mais detalhes</Button>

            <PokedexDeviceScreenBorder>
                <PokedexDeviceScreenTopBorder>
                    <div /><div />
                </PokedexDeviceScreenTopBorder>
                <PokedexDeviceScreen>

                    <ContainerRow>

                        <PokemonImage>
                            <div id={"pokeball"}>
                                <div className={"circle"} />
                                <img id="front-image"
                                    alt={name}
                                    src={sprites.front_default} />
                                <img id="back-image"
                                    alt={name}
                                    src={sprites.back_default} />
                            </div>

                        </PokemonImage>

                        <ContainerColumn>

                            <ContainerStats>
                                <h3>Estatísticas</h3>
                                <div id={"container-skill-and-bar"}>
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
                                </div>
                            </ContainerStats>

                        </ContainerColumn>

                        <ContainerColumn>
                            <PokeType>
                                <h3>Tipo</h3>
                                <div id={"container-type"}>
                                    {displayTypes}
                                </div>
                            </PokeType>
                            <ContainerSpecs>
                                <h3>Principais Ataques</h3>
                                {displayMoves}
                            </ContainerSpecs>
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