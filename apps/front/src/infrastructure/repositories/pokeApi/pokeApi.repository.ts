import { PokeAPIResponseOne } from "@/domain/interfaces/pokeApi/pokeApiResponses";
import { pokeApi } from "@/infrastructure/dataSources/pokeApi.dataSource";

/**
 * @class PokeApiRepository
 */
export class PokeApiRepository {
  /**
   * Get a pokemon by name or id
   * @param field - Name or id of the pokemon
   * @returns Promise<PokeAPIResponseOne>
   */
  static async getPokemonByNameOrId(
    field: string | number
  ): Promise<PokeAPIResponseOne> {
    try {
      const response = await pokeApi.get<PokeAPIResponseOne>(
        `/pokemon/${field}`
      );
      return response;
    } catch (error) {
      throw new Error("Error fetching getPokemonByNameOrId: " + error);
    }
  }
}
