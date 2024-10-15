import styled from "styled-components";
import {
  flexStyles,
  mediaQueries,
  abilitiesColor,
} from "../../../assets/styles/theme";
import { useNavigate } from "react-router-dom";
import {
  CardItemProps,
  PokemonAbilityItemProps,
} from "../../../types/pokemonTypes";

const CardItem = ({ pokemonItem, pokemonTypes }: CardItemProps) => {
  const navigate = useNavigate();

  return (
    <CardItemContainer onClick={() => navigate("/detail")}>
      <div className="pokemon-id-box">
        <span className="pokemon-id"># {pokemonItem.id} </span>
      </div>
      <img className="pokemon-image" src={pokemonItem.imgURL} width="20%" />
      <h3 className="pokemon-name">{pokemonItem.name}</h3>
      <div className="pokemon-ability-box">
        {pokemonTypes.map((typeitem) => {
          return (
            <PokemonAbilityItem key={typeitem} $typeitem={typeitem}>
              {typeitem}
            </PokemonAbilityItem>
          );
        })}
      </div>
    </CardItemContainer>
  );
};

export default CardItem;

const CardItemContainer = styled.div`
  ${flexStyles("column", "space-between", "center", 10)}
  width: 100%;
  aspect-ratio: 4/3;
  max-width: 24%;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  padding: 10px 12px;
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
    white-space: nowrap;
  }

  .pokemon-ability-box {
    ${flexStyles("row", "space-between", "center", 10)}
    width: 100%;
    text-align: center;
    margin: 7px 0;
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

const PokemonAbilityItem = styled.div<PokemonAbilityItemProps>`
  ${flexStyles()}
  width: 100%;
  background-color: ${(props) => abilitiesColor[props.$typeitem]};
  color: ${({ theme }) => theme.white};
  padding: 3px 0;
  border-radius: 5px;
  font-size: 0.8rem;

  ${mediaQueries.desktop} {
    padding: 5px 0;
  }

  ${mediaQueries.tablet} {
    padding: 5px 0;
    font-size: 0.9rem;
  }

  ${mediaQueries.mobile} {
    padding: 5 px 0;
    font-size: 0.9rem;
  }
`;
