import { useState, useEffect } from "react";

const useSinglePokemon = (allPokemon) => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const urls = allPokemon.map((pokemon) => pokemon[1]);

        if (urls && urls.length > 0) {

            const promises = urls.map((pokemon) =>
                fetch(pokemon)
                    .then((res) => res.json())
                    .then((resData) => ({
                        id: resData.order,
                        name: resData.name,
                        price: `$${(Math.random() * 100).toFixed(2)}`,
                        image: resData.sprites.front_default,
                    }))
                    .catch((error) => {
                        console.error("Error fetching Pokémon data:", error);
                    })
            );

            Promise.all(promises).then((pokemonData) => setSearchData(pokemonData));

        }
    }, [allPokemon]);

    return searchData;
};

export default useSinglePokemon;
