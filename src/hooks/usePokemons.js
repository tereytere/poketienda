import { useState, useEffect } from "react";

const usePokemons = () => {
    const [allPokemon, setAllPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=88`)
            .then((res) => res.json())
            .then((data) => {
                const pokemons = data.results.map((r) => [r.name, r.url]);
                setAllPokemon(pokemons);
            })
            .catch((error) => {
                console.error("Error fetching Pokémon data:", error);
            });
    }, []);

    return allPokemon;
};

export default usePokemons;