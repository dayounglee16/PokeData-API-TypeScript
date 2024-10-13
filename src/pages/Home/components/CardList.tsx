import styled from "styled-components";
import { flexStyles } from "../../../assets/styles/theme";
import CardItem from "./CardItem";

const mockData = [
  {
    id: 1,
    이름: "포켓몬",
  },
  {
    id: 2,
    이름: "포켓몬",
  },
  {
    id: 3,
    이름: "포켓몬",
  },
  {
    id: 4,
    이름: "포켓몬",
  },
  {
    id: 5,
    이름: "포켓몬",
  },
  {
    id: 6,
    이름: "포켓몬",
  },
  {
    id: 7,
    이름: "포켓몬",
  },
  {
    id: 8,
    이름: "포켓몬",
  },
  {
    id: 9,
    이름: "포켓몬",
  },
];

export type PokemonItem = {
  id: number;
  이름: string;
};

const CardList = () => {
  return (
    <CardListContainer>
      {mockData.map((pokemonItem: PokemonItem) => {
        return <CardItem pokemonItem={pokemonItem} key={pokemonItem.id} />;
      })}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  ${flexStyles("row", "flex-start", "center", 22.7)}
  max-width: 100%;
  margin-top: 80px;
  flex-wrap: wrap;
`;
