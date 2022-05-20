export interface PokemonResult {
  results: PokemonDescription[];
}

export interface PokemonDescription {
  name: string;
  url: string;
}
