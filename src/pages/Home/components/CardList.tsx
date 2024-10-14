import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../../assets/styles/theme";
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
  {
    id: 10,
    이름: "포켓몬",
  },
  {
    id: 11,
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
      <div className="cardList-inner">
        {mockData.map((pokemonItem: PokemonItem) => {
          return <CardItem pokemonItem={pokemonItem} key={pokemonItem.id} />;
        })}
      </div>
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  ${flexStyles("row", "center")}
  width: 100%;
  margin-top: 80px;

  .cardList-inner {
    ${flexStyles("row", "flex-start", "center", 15.2)}
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 25px;
  }

  ${mediaQueries.tablet} {
    .cardList-inner {
      ${flexStyles("row", "space-between")}
    }
  }
`;
