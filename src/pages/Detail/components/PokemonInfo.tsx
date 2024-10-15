import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../../assets/styles/theme";
const PokemonInfo = () => {
  return (
    <PokemonInfoContainer>
      <div className="pokemon-profile">
        <span className="pokemon-id">No.4</span>
        <h2 className="pokemon-name">이상해씨</h2>
      </div>
      <div className="pokemon-ability-box">
        <ul className="pokemon-ability">
          <li className="ability-title">능력1</li>
          <li className="ability-title">능력2</li>
        </ul>
        <p className="pokemon-ability-text">
          내리쪼이는 태양 빛을 에너지로 변환할 수 있기 때문에 여름에 더욱
          강해진다.
        </p>
      </div>
      <div className="pokemon-size">
        <dl className="pokemon-weight-box">
          <dt className="pokemon-weight">신장</dt>
          <dd className="pokemon-weight-value">0.7m</dd>
        </dl>
        <dl className="pokemon-height-box">
          <dt className="pokemon-height">무게</dt>
          <dd className="pokemon-height-value">0.7m</dd>
        </dl>
      </div>
    </PokemonInfoContainer>
  );
};
export default PokemonInfo;

const PokemonInfoContainer = styled.div`
  ${flexStyles("column", "space-between", "flex-start", 30)}
  width: 48%;
  padding: 30px 0;
  .pokemon-profile {
    ${flexStyles("column", "flex-start", "flex-start", 10)}
    .pokemon-id {
      font-size: 1.2rem;
    }
    .pokemon-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .pokemon-ability-box {
    ${flexStyles("column", "flex-start", "flex-start", 25)}
    width: 100%;
    .pokemon-ability {
      ${flexStyles("row", "flex-start", "center", 20)}
      width: 100%;
      .ability-title {
        ${flexStyles("row", "center", "center", 10)}
        padding: 10px 20px;
        border-radius: 25px;
        background-color: #ccc;
        color: #fff;
      }
    }
    .pokemon-ability-text {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 24px;
    }
  }
  .pokemon-size {
    ${flexStyles("row", "space-between", "center")}
    width: 100%;
    .pokemon-weight-box {
      ${flexStyles("column", "center", "center", 20)}
      width: 48%;
      padding: 10px 0;
      border: 1px solid #eee;
      .pokemon-weight {
        padding: 5px 20px;
        border-radius: 20px;
        background-color: #da343c;
        color: #fff;
        font-size: 0.8rem;
        white-space: nowrap;
      }
    }
    .pokemon-height-box {
      ${flexStyles("column", "center", "center", 20)}
      width: 48%;
      padding: 10px 0;
      border: 1px solid #eee;
      .pokemon-height {
        padding: 5px 20px;
        border-radius: 20px;
        background-color: #da343c;
        color: #fff;
        font-size: 0.8rem;
        white-space: nowrap;
      }
    }
  }

  ${mediaQueries.tablet} {
    width: 100%;

    .pokemon-size {
      ${flexStyles("row", "space-between", "center", 20)}
      width: 100%;
      .pokemon-weight-box {
        ${flexStyles("row", "center", "center", 35)}
        width: 45%;
      }
      .pokemon-height-box {
        ${flexStyles("row", "center", "center", 35)}
        width: 45%;
      }
    }
  }

  ${mediaQueries.mobile} {
    width: 100%;

    .pokemon-size {
      ${flexStyles("column", "space-between", "center")}
      width: 100%;
      .pokemon-weight-box {
        ${flexStyles("row", "center", "center", 35)}
        width: 80%;
      }
      .pokemon-height-box {
        ${flexStyles("row", "center", "center", 35)}
        width: 80%;
      }
    }
  }
`;
