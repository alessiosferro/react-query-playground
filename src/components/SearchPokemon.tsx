import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const SearchPokemon = () => {
  const [value, setValue] = useState("");

  const pokemon = useQuery(
    value,
    async () => {
      const pokemon = (await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${value}`
      )) as any;
      return pokemon.data;
    },
    {
      enabled: !!value,
    }
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <img width="300" alt="" src={pokemon.data?.sprites?.front_default} />
    </div>
  );
};

export default SearchPokemon;
