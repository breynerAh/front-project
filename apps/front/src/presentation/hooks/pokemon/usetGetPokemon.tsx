import { useQuery } from "@tanstack/react-query";
import { getPokemonByNameOrId } from "@/application/use-cases/pokemon";

export function useGetPokemon(pokemon: string | number) {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemonByNameOrId(pokemon),
  });

  return { data, isLoading };
}
