import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { BASE_URL } from '../../constantes/urls';
import styled from 'styled-components';
import { goToHomePage, goToPokedexPage } from '../../routes/coordinator';
import { pokeTypes, pokeTypePT } from '../../constantes/pokemonTypes';
import '../StyleReset/ResetCss.css'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import fundo from '../../img/fundo.jpg'
import escudo from '../../img/escudo.png';
import escudoo from '../../img/escudoo.png';
import botas from '../../img/botas.png';
import espadas from '../../img/espadas.png';
import coracao from '../../img/coracao.png';
import espadas1 from '../../img/espadas1.png'
// import { PageCompleta, InformaContainer, ImagemCard, DetalhesContainer, PokeContainer, PokemonInforma, ForcaContainer, TipoContainer, PokeType, PokeImageContainer, HabilidadesContainer, PokemonHabilidades, Habilidades, HabilidadesIcones, PokemonNome, MovimentoEspecial, pokeTypes } from './DetailsStyled';


const PageCompleta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial;
    width: 100vw;
    height: 100vh;
    
`;

const InformaContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    background-color: rgb(240, 238, 238);
    background-image:url(${fundo});
    @media (max-width: 375px) {
        background-color: white;
        align-items: normal;
        justify-content: center;
        
    };
    @media (min-width: 720px) {
        height: 100%;
    };
`;

const PokeType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    text-transform: uppercase;
    ${pokeTypes};
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const ImagemCard = styled.img`
    height: auto;
    width: 160px;
    @media (max-width: 375px) {
        flex-direction: column;
        width: 140px;
    };
`;

const DetalhesContainer = styled.div`
    align-self: center;
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding: 56px;
    border-radius: 25px;
    @media (max-width: 375px) {
        width: 70%;
        align-items: center;
        justify-content: start;
        padding: 0;
        margin-top: 15px;
    };
    @media (min-width: 720px) {
        margin-top: 15px;
    };
`;

const PokeContainer = styled.div`
    margin-bottom: 32px;
    text-transform: uppercase;
    @media (max-width: 375px) {
        margin-top: 1em;
        margin-bottom: 0.5em;
        
    };
`;

const PokemonInforma = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    
    @media (max-width: 375px) {
        margin-bottom: 0px;
        font-size: 16px;
        margin: 0.8em 0;
    };
`;
const ForcaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;
const TipoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1em;
    width: 60%;
    
    @media (max-width: 375px) {
        margin-top: 0.2em;
        margin-bottom: 0px;
        font-size: 13px;
        font-weight: bold;
    };
`;

const PokeImageContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

const HabilidadesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const PokemonHabilidades = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

const Habilidades = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const HabilidadesIcones = styled.img`
    margin-right: 5px;
`;

const PokemonNome = styled.div`
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 375px) {
        font-size: 22px;
    };
`;

const MovimentoEspecial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function PokemonDetailsPage() {

    const history = useHistory();
    const params = useParams();

    const [pokeDetails, setPokeDetails] = useState()

    const getPokemonDetails = () => {
        axios.get(`${BASE_URL}/pokemon/${params.name}`)
            .then((response) => {
                setPokeDetails(response.data);

            })
            .catch((error) => {
                console.log(error.response);
            })
    };

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <PageCompleta>
            <Header
                leftButton='HOME'
                rightButton='POKÉDEX'
                onClickLeftButton={() => goToHomePage(history)}
                onClickRightButton={() => goToPokedexPage(history)}
            />
            {pokeDetails ? (
                <InformaContainer>
                    <DetalhesContainer>
                        <PokeContainer>
                            <PokemonNome>{pokeDetails.name}</PokemonNome>
                        </PokeContainer>
                        <ForcaContainer>
                            <PokemonInforma>PODERES</PokemonInforma>
                            <TipoContainer>
                                {pokeDetails.types.map((poke) => {
                                    return (
                                        <PokeType
                                            key={poke.type.name}
                                            type={poke.type.name}>
                                            {pokeTypePT(poke.type.name)}
                                        </PokeType>)
                                })}
                            </TipoContainer>
                        </ForcaContainer>
                        <PokeImageContainer>
                            <ImagemCard src={pokeDetails.sprites.other.home.front_default} alt={`${pokeDetails.name} front default`} />
                            <ImagemCard src={pokeDetails.sprites.other.home.front_shiny} alt={`${pokeDetails.name} back shiny`} />
                        </PokeImageContainer>
                        <HabilidadesContainer>
                            <PokemonInforma>HABILIDADES</PokemonInforma>
                            <PokemonHabilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={coracao} />
                                    Saúde: {pokeDetails.stats[0].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={espadas1} />
                                    Ataque: {pokeDetails.stats[1].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={escudo} />
                                    Defesa: {pokeDetails.stats[2].base_stat}
                                </Habilidades>
                            </PokemonHabilidades>
                            <PokemonHabilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={espadas} />
                                    Ataque especial: {pokeDetails.stats[3].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={escudoo} />
                                    Defesa especial: {pokeDetails.stats[4].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={botas} />
                                    Velocidade: {pokeDetails.stats[5].base_stat}
                                </Habilidades>
                            </PokemonHabilidades>
                        </HabilidadesContainer>
                        <MovimentoEspecial>
                            <PokemonInforma>PODERES PRINCIPAIS</PokemonInforma>
                            {pokeDetails.moves.slice(0, 5).map((poke) => {
                                return <p key={poke.move.name}>{poke.move.name}</p>
                            })}
                        </MovimentoEspecial>
                    </DetalhesContainer>
                </InformaContainer>)
                : <div></div>
            }
        </PageCompleta>
    );
}

export default PokemonDetailsPage;