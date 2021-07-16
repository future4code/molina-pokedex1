import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vmin;
    background-color: #3267B2;
    
    #name{
        font-size: 3em;
        font-weight: 600;
        ::first-letter{
            text-transform: capitalize;
        }
    }
`
export const ContainerPokemon = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:2%;
    width: 80%;
    height: 100%;


    #container-type{
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

    #pokeball{
        position: relative;
        width: 20vw;
        padding-bottom: 20vw;
        border: 0.4em solid black;
        border-radius: 50%;
        background: linear-gradient(0.45turn, red 0 47%, black 48% 53%, white 54% 100%);
        background-repeat: no-repeat;
        filter: drop-shadow(2px 0 0.5em blue);
        -webkit-filter: drop-shadow(2px 0 0.5em #265392);
        overflow: visible;

        .circle1{
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

        .circle2{
            position: absolute;
            z-index: 0;
            top:36%;
            left: 36%;
            width: 28%;
            height: 28%;
            background: white;
            border:0.1em solid black;
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

    #container-specs-atacks{
        display: flex;
        align-items: center;
        justify-content: start;
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