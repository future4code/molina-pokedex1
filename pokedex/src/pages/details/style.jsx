import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vmin;
`
export const ContainerPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap:2%;
    width: 80%;
    height: 100%;

    #name{
        font-size: 3em;
    }

    #container-type{
        display: flex;
        gap: 2%;
        #type{
            padding: 0.4%;
            font-size: 1.4em;
            border: 1px solid lightgray;
            border-radius: 10px;
        }
    }

    #image{
        background-image: url("https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/12.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-color: blanchedalmond;
        border: 1px solid lightgray;
        width: 100px;
        height: 100px;
    }

    #container-specs-atacks{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap:2%
    }

    #specs{
        width: 25%;
        height: 100%;
        background-color: lightgray;
    }

    #atacks{
        width: 25%;
        height: 100%;
        background-color: lightgray;
        
    }

`