import styled from "styled-components";
import { PokemonItem } from "./CardList";
import { flexStyles, mediaQueries } from "../../../assets/styles/theme";
import { useNavigate } from "react-router-dom";

const CardItem = ({ pokemonItem }: { pokemonItem: PokemonItem }) => {
  const navigate = useNavigate();

  return (
    <CardItemContainer onClick={() => navigate("/detail")}>
      <div className="pokemon-id-box">
        <span className="pokemon-id"># {pokemonItem.id} </span>
      </div>
      <div className="pokemon-image">이미지</div>
      <h3 className="pokemon-name">포켓몬이름</h3>
      <ul className="pokemon-ability-box">
        <li>능력 1</li>
        <li>능력 2</li>
      </ul>
    </CardItemContainer>
  );
};

export default CardItem;

const CardItemContainer = styled.div`
  ${flexStyles("column", "space-between", "center", 25)}
  width: 100%;
  max-width: 24%;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    translate: 0 -5px;
    transition: all 0.4s;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    .pokemon-image {
      scale: calc(1.1);
      transition: all 0.3s;
    }
  }

  .pokemon-id-box {
    ${flexStyles("row", "flex-start", "center")}
    width: 100%;

    .pokemon-id {
      font-weight: bold;
      color: #666;
    }
  }

  .pokemon-image {
    ${flexStyles()}
    width: 32%;
    height: 40%;
    text-align: center;
  }
  .pokemon-image:hover {
  }

  .pokemon-name {
    font-weight: bold;
  }

  .pokemon-ability-box {
    ${flexStyles("row", "center", "center", 10)}
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }

  ${mediaQueries.desktop} {
    max-width: 31.9%;
  }

  ${mediaQueries.tablet} {
    max-width: 47.5%;
  }

  ${mediaQueries.mobile} {
    max-width: 100%;
  }
`;
