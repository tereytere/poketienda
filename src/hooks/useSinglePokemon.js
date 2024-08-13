import { useState, useEffect } from "react";

const useSinglePokemon = (urls) => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        if (urls && urls.length > 0) {
            const fetchData = [];

            urls.forEach((url, index) => {
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                        fetchData.push({
                            id: data.order,
                            name: data.name,
                            price: `$${(Math.random() * 100).toFixed(2)}`,
                            image: data.sprites.front_default,
                        });

                        if (index === urls.length - 1) {
                            setSearchData(fetchData);
                        }
                    });
            });
        }
    }, [urls]);

    return searchData;
};

export default useSinglePokemon;
