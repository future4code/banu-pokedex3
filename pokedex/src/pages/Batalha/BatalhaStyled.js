import styled from 'styled-components'

export const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 10px;
  margin: 20px 10px 10px 0px;
  width: 15%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  @media (max-width: 375px) {
    width: 40%;
  };
`;

export const ContainerCardPoke = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: rgb(240, 238, 238);
  width: 90%;
`;

export const ImagemContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  align-items: center; 
`;

export const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  height: 90vh;
  @media (max-width: 375px) {
    justify-content: start;
  };
`;

export const ContUm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const ContDo = styled.div`
  background-color: rgb(240, 238, 238);
`;

export const ContTre = styled.img`
  width: 10vw;
  @media (max-width: 375px) {
    width: 30vw;
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeBattleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: space-evenly;
  };
`;

export const BattleButton = styled.button`
  width: 120px;
  height: 40px;
`;

export default styled;