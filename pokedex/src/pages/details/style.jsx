import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding-top: 1%;
    background-color: darkred;
`
export const ContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const PokemonName = styled.div`
        font-size: 3em;
        font-weight: 600;
        margin: 2vh 0;
        ::first-letter{
            text-transform: capitalize;
        }
`   
export const PokeType = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1vh;
        width: 100%;
        margin-top: 2%;
        
        #type{
            display: flex;
            align-items: center;
            justify-content: center;            
            width: 6em;
            height: 1.2em;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #00000032;
            padding: 1%;
            
            p{
                font-size: 1.2em;
                font-weight: 900;
                font-variant: small-caps;
                text-shadow: 1px 0px 1px black;
                color: white;
                margin: 0%;
                padding: 0%;
            }
        }
        .bug{
            background-color:#729f3f;
        }
        .dark{
            background-color:#707070;
        }
        .dragon{
            background-color:#53a4cf;
        }
        .electric{
            background-color:#eed535;
        }
        .fairy{
            background-color:#fdb9e9;
        }
        .fighting{
            background-color:#d56723;
        }
        .fire{
            background-color:#fd7d24;
        }
        .flying{
            background-color:#3dc7ef;
        }
        .ghost{
            background-color:#7b62a3;
        }
        .grass{
            background-color:#9bcc50;
        }
        .ground{
            background-color:#f7de3f;
        }
        .ice{
            background-color:#51c4e7;
        }
        .normal{
            background-color:#a4acaf;
        }
        .poison{
            background-color:#b97fc9;
            
        }
        .psychic{
            background-color:#f366b9;
        }
        .rock{
            background-color:#a38c21;
        }
        .steel{
            background-color:#9eb7b8;
        }
        .water{
            background-color:#4592c4;
        }
`
export const PokemonImage = styled.div`
    #pokeball{
        position: relative;
        width: 20vw;
        padding-bottom: 20vw;
        border: 0.4em solid black;
        border-radius: 50%;
        background: linear-gradient(0.45turn, red 0 47%, black 48% 53%, white 54% 100%);
        background-repeat: no-repeat;
        filter: drop-shadow(2px 0 0.5em blue);
        -webkit-filter: drop-shadow(2px 0 0.5em black);
        overflow: visible;
        
        .circle{
            position: absolute;
            z-index: 0;
            top:30%;
            left: 30%;
            width: 32%;
            height: 32%;
            background: white;
            border:0.8em solid black;
            border-radius: 50%;
        }
        
        img{
            position: absolute;
            z-index: 2;
            width: 20vw;
            height: 20vw;
            left: 0;
            filter: drop-shadow( 5px 5px 3px rgba(0, 0, 0, .3));
        }
    }
    
    @media (max-device-width: 414px){
        #pokeball{
            width: 50vw;
            padding-bottom: 50vw;
            #image{
                top:-10%;
                left: -10%; 
                width: 60vw;
                padding-bottom: 60vw;
            }
        }
    }
`
export const ContainerSpecs = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 20vw;
        height: 100%;
        *{
            margin: 0;
        }
        h3{
            width: 100%;
            font-variant: small-caps;
            text-align: center;
        }
        p{
            font-size: small;
            font-variant: small-caps;
            margin: 0;
            padding: 0;
        }
        span{
            font-size: x-small;
            font-variant: normal;

        }
        hr{
            width: 2vw;
            margin: 1vh 0;
            border: 1px solid lightgray
        }
`
export const ContainerStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 100%;
    margin-top: 1vh;
    
    h3{
        font-size: medium;
        font-variant: small-caps;
        text-align: center;
        margin: 0;
    }
`
export const Skill = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 2.8vh;
    margin-top: 1vh;
    #skill-title{
        font-size: small;
        font-variant: small-caps;
        margin: 0;
        margin-right: 1%;
        padding: 0;
    }
`
export const LevelBar = styled.div`
        width: 50%;
        height: 100%;
        margin-right: 1%;
        background-color: white;
        border: 1px solid black;
        .level{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: ${(props) => `${props.level/2.55}%`};
            height: 100%;
            background-color: limegreen;
            p{
                font-size: small;
                margin: 0;
                margin-left: 1%;
                color: blue;
            }
        }
`
export const PokedexDeviceScreen = styled.div`
    width: 44vw;
    padding: 1%;
    text-align: center;
    background-color: #68af68a0;
    box-shadow: -1px -2px 2px black;
`
export const PokedexDeviceScreenBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin:1%;
    padding: 0 5%;
    border: 10px;
    border-radius: 10px;
    border-bottom-left-radius: 80px 80px;
    border-style: outset;
    background-color: lightgray;
    /* clip-path: stroke-box polygon(0 0, 100% 0, 100% 100%, 14% 100%, 0 86%); */
`
export const PokedexDeviceScreenTopBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;
    margin: 2% 0;
    div{
        width: 2vw;
        padding-bottom: 2vw;
        border-radius: 50%;
        background-color: red;
        box-shadow: inset 8px 4px 5px darkred;
        border-style: inset ;

    }
`
export const PokedexDeviceScreenBottonBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
    width: 100%;
    margin: 2% 0;
    #led{
        width: 2.8vw;
        padding-bottom: 2.8vw;
        border-radius: 50%;
        background-color: red;
        box-shadow: inset 8px 4px 5px darkred;
        border-style: inset ;

    }
    hr{
        width: 8vw;
        border: 3px solid gray;
        border-style: inset ;
    }
`