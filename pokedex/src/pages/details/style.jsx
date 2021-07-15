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
        font-weight: 600;
        ::first-letter{
            text-transform: capitalize;
        }
    }

    #container-type{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2%;
        width: 100%;
        #type{
            border: 1px solid lightgray;
            border-radius: 10px;
            padding: 1%;
            p{
                font-size: 1.2em;
                margin: 0%;
                padding: 0%;
            }
        }
    }

    #image{
        background-image: url(${(props) => props.img});
        background-repeat: no-repeat;
        background-size: 90%;
        background-position: center;
        border: 1px solid lightgray;
        width: 16vw;
        padding-bottom: 16vw;
        @media (max-device-width: 414px){
            width: 28vh;
            padding-bottom: 28vh;
        }
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