import axios from "axios";
import { Pokemon } from "../models";
import { PokemonResult } from "../models/pokemons";

class PokemonAPI {
  fetchPokemons = async (limit: number): Promise<PokemonResult> => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: { limit, offset: 0 },
    });
    return response.data;
  };

  fetchPokemon = async (pokemonUrl: string): Promise<Pokemon> => {
    const response = await axios.get(pokemonUrl, {
      params: {},
    });
    return response.data;
  };
}
const pokemonAPI = new PokemonAPI();
export default pokemonAPI;
