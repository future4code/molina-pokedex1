import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: darkred;
`
export const ContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    @media (max-device-width: 414px) {
        flex-direction: column;   
        }
`
export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media (max-device-width: 414px) {
        width: 100%;
}  
`
export const PokemonName = styled.div`
        font-size: 3em;
        font-weight: 900;
        margin: 2vh 0;
        color: #2a75bb;
        -webkit-text-stroke: 2px #ffcb05;
        ::first-letter{
            text-transform: capitalize;
        }
        font-variant: small-caps;
`
export const PokeType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1vh;
    width: 100%;
    h3{
        font-variant: small-caps;
        text-align: center;
        margin: 0;
    }
    #container-type{   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1vh;
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
    }
`
export const PokemonImage = styled.div`
    #pokeball{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }          
    #front-image{
        width: 10vw;
        height: 10vw;
        filter: drop-shadow( 5px 5px 3px rgba(0, 0, 0, .3));
    }
    #back-image{
        width: 10vw;
        height: 10vw;
        filter: drop-shadow( 5px 5px 3px rgba(0, 0, 0, .3));
    }
    @media (max-device-width: 414px){
            #front-image{
                width: 30vw;
                height: 30vw;
            }
            #back-image{ 
                width: 30vw;
                height: 30vw;
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
        @media (max-device-width: 414px) {
            width: 100%;
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
        font-variant: small-caps;
        text-align: center;
        margin: 0;
    }
    #container-skill-and-bar{
        width: 100%;
    }

    @media (max-device-width: 414px) {
        width: 90%;
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
        min-width: 50%;
        text-align: right;
        font-size: small;
        font-variant: small-caps;
        margin: 0;
        margin-right: 1%;
        padding: 0;
        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`
export const LevelBar = styled.div`
        min-width: 50%;
        height: 100%;
        margin-right: 1%;
        background-color: white;
        border: 1px solid black;
        .level{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: ${(props) => `${props.level / 2.55}%`};
            height: 100%;
            background-color: limegreen;
            p{
                width: 96%;
                text-align: right;
                font-size: small;
                margin: 0;
                color: blue;
            }
        }
`
export const PokedexDeviceScreen = styled.div`
    width: 100%;
    padding: 1%;
    text-align: center;
    background-color: #68af68a0;
    box-shadow: -1px -2px 2px black;
    @media (max-device-width: 414px) {
    width: 100%
    }
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
    @media (max-device-width: 414px) {
        width: 85%;
    }
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
    @media (max-device-width: 414px) {
        #led{
            width: 6vw;
            padding-bottom: 6vw;
            margin-left: 4%;
        }
    }
`