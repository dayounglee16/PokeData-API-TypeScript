import { atom } from "recoil";
import { PokemonDataList } from "../types/pokemonTypes";

export const pokemonDataListState = atom<PokemonDataList[]>({
  key: "pokemonDataList",
  default: [],
});
