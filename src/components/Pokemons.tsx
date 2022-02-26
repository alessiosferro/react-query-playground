import axios from "axios";
import { useQuery } from "react-query";

export interface PokemonApiResponse<T> {
  count: number;
  results: T;
}

export interface IPokemon {
  name: string;
  url: string;
}

export const Pokemons = () => {
  const { data, isLoading } = useQuery(
    "pokemons",
    async () => {
      const pokemons = await axios.get<PokemonApiResponse<IPokemon[]>>(
        "https://pokeapi.co/api/v2/pokemon"
      );
      return pokemons.data.results;
    },
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <h2>Pokemons</h2>
      <ul>
        {data?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
