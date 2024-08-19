import Carousel from 'react-bootstrap/Carousel';
import usePokemons from "../hooks/usePokemons";
import useSinglePokemon from "../hooks/useSinglePokemon";

function Carrousel() {
    const allPokemon = usePokemons() || [];
    const products = useSinglePokemon(allPokemon);

    return (
        <Carousel>
            {(() => {
                const items = [];
                for (let i = 0; i < 3 && i < products.length; i++) {
                    const product = products[i];
                    items.push(
                        <Carousel.Item key={i} className='item'>
                            <img src={product.image} alt={product.name} />
                            <Carousel.Caption>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                }
                return items;
            })()}
        </Carousel>
    );
}

export default Carrousel;
