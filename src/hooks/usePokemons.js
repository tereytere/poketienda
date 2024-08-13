import { useState, useEffect } from "react";

const usePokemons = () => {
    const [allPokemon, setAllPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=13`)
            .then((res) => res.json())
            .then((res) => {
                let pokemons = [];
                res.results.forEach((r) => {
                    pokemons.push([r.name, r.url]);
                });
                setAllPokemon(pokemons.sort());
            });
    }, []);

    return allPokemon;
};

export default usePokemons;