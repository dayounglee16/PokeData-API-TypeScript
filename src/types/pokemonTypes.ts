export type PokemonDataList = {
  id: number;
  imgURL: string;
  name: string;
  types: string[];
};

export type PokemonResponse = {
  result: PokemonDataList[];
  url: string;
  type: {
    url: string;
  };
};

export type KoreanName = {
  language: {
    name: string;
  };
};

export interface CardItemProps {
  pokemonItem: PokemonDataList;
  pokemonTypes: string[];
}

export type PokemonAbilityItemProps = {
  $typeitem: string;
};
