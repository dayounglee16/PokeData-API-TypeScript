import styled from "styled-components";
import { flexStyles } from "../../assets/styles/theme";
import PokemonInfo from "./components/PokemonInfo";

const Detail = () => {
  return (
    <DetailContainer>
      <div className="detail-inner">
        <div className="pokemon-image-box">
          <div className=".pokemon-image">이미지</div>
        </div>
        <PokemonInfo />
      </div>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  ${flexStyles("row", "center", "flex-start")}
  width: 100%;
  min-height: calc(100dvh - 70px);
  padding: 20px;

  .detail-inner {
    ${flexStyles("row", "space-between")}
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;
    margin-top: 90px;
    padding: 30px;
    border-radius: 20px;
    border: 2px solid #da343c54;
    background-color: #f9f8f8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    .pokemon-image-box {
      ${flexStyles()}
      width: 48%;

      .pokemon-image {
        width: 330px;
      }
    }
  }
`;
