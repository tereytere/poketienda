import { useState, useEffect } from "react";

const useSinglePokemon = (urls) => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {

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
            );

            Promise.all(promises).then((pokemonData) => setSearchData(pokemonData));

        }
    }, [urls]);

    return searchData;
};

export default useSinglePokemon;
