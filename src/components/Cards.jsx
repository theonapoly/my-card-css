import React from "react";
// import "./style.scss";
import styled from "styled-components";
// import styled from "@emotion/styled";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;
  background-color: #c8baa8;
  border: 1px solid white;
  border-radius: 20px;
  row-gap: 1rem;
`;

const ImageCard = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  /* aspect-ratio: 1/1; */
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  -webkit-box-shadow: 0px 14px 0px 0px rgba(62, 66, 47, 0.69);
  box-shadow: 0px 20px 30px 0px rgba(62, 66, 47, 0.69);
`;

const TitleCard = styled.h1`
  text-align: left;
  padding-left: 1rem;
  margin: 0;
  color: #343434;
`;

const SecondaryTitleCard = styled.h2`
  text-align: left;
  padding-left: 1rem;
  margin: 0;
  color: #424242;
`;

const ParagraphCard = styled.p`
  text-align: left;
  padding-left: 1rem;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonCard = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 20%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.1);
    background-color: #7b5d5d;
  }
`;

function Cards() {
  return (
    <ContainerStyle>
      <ImageCard src="./src/assets/montagne.jpg" alt="montagne" />
      <TitleCard>Explorez les Montagnes</TitleCard>
      <SecondaryTitleCard>Une aventure inoubliable</SecondaryTitleCard>
      <ParagraphCard>
        Découvrez la beauté majestueuse des montagnes et profitez d'une
        expérience unique au cœur de la nature. <br />
        Ressourcez-vous dans l'air pur de la montagne, randonnez sur des
        sentiers panoramiques et admirez des vues à couper le souffle.
      </ParagraphCard>
      <ContainerButton>
        <ButtonCard>Réserver</ButtonCard>
        <ButtonCard>Infos</ButtonCard>
        <ButtonCard>Contact</ButtonCard>
      </ContainerButton>
    </ContainerStyle>
  );
}

export default Cards;
