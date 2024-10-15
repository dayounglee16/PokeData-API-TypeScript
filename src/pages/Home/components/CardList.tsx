import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../../assets/styles/theme";
import CardItem from "./CardItem";
import { useRecoilState } from "recoil";
import { pokemonDataListState } from "../../../recoil/atom";
import { useEffect } from "react";

import instance from "../../../api/instance";
import {
  KoreanName,
  PokemonDataList,
  PokemonResponse,
} from "../../../types/pokemonTypes";

const CardList = () => {
  const [pokemonDataList, setPokemonDataList] =
    useRecoilState<PokemonDataList[]>(pokemonDataListState);

  useEffect(() => {
    const getData = async () => {
      try {
        const mainRes = await instance.get("/pokemon");

        const result = await Promise.all(
          mainRes.data.results.map(async (pokemonItem: PokemonResponse) => {
            //포켓몬 개별 데이터 요청 (이미지, 아이디, 타입 추출용)
            const detailRes = await instance.get(pokemonItem.url);

            //포켓몬 개별 데이터 요청 (이름 추출용)
            const speciesRes = await instance.get(detailRes.data.species.url);

            //포켓몬 개별 데이터 요청 (타입 추출용)
            const typesResult = await Promise.all(
              detailRes.data.types.map(async (typesItem: PokemonResponse) => {
                const typesRes = await instance.get(typesItem.type.url);
                return typesRes.data;
              })
            );
            console.log("typesResult", typesResult);

            //포켓몬 이미지
            const pokemonImage =
              detailRes.data.sprites.versions["generation-v"]["black-white"]
                .animated["front_default"];

            //포켓몬 한국어 이름
            const koreanName = speciesRes.data.names.find(
              (pokemonItem: KoreanName) => pokemonItem.language.name === "ko"
            );

            //포켓몬 한국어 타입
            const typesKoreanName =
              typesResult.map(
                (type) =>
                  type.names?.find(
                    (typeName: KoreanName) => typeName.language.name === "ko"
                  )?.name
              ) || [];

            return {
              id: detailRes.data.id,
              imgURL: pokemonImage,
              name: koreanName.name,
              types: typesKoreanName,
            };
          })
        );
        setPokemonDataList(result);
      } catch (err) {
        console.error(`error ${err}`);
        alert("오류가 발생했습니다.");
      }
    };

    getData();
  }, [setPokemonDataList]);

  return (
    <CardListContainer>
      <div className="cardList-inner">
        {pokemonDataList.map((pokemonItem: PokemonDataList) => {
          return (
            <CardItem
              key={pokemonItem.id}
              pokemonItem={pokemonItem}
              pokemonTypes={pokemonItem.types}
            />
          );
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
