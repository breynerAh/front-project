import { dataResponse } from "@/domain/interfaces/pokeApi/pokeApiResponses";
import { PokeApiRepository } from "@/infrastructure/repositories/pokeApi/pokeApi.repository";

/**
 * Get a pokemon by name or id
 * @param field - Name or id of the pokemon
 * @returns Promise<Pokemon>
 */
export async function getPokemonByNameOrId(
  field: string | number
): Promise<dataResponse> {
  try {
    const pokeApiResponse = await PokeApiRepository.getPokemonByNameOrId(field);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeApiResponse?.id}.png`;
    const { id, name } = pokeApiResponse;

    return { id, name, avatar };
  } catch (error) {
    throw new Error("Error fetching getPokemonByNameOrId: " + error);
  }
}
