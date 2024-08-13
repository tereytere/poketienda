import React, { useState } from "react";
import "../App.css";
import Product from "../components/Product";
import usePokemons from "../hooks/usePokemons";
import useSinglePokemon from "../hooks/useSinglePokemon";

export default function ProductList() {
    const allPokemon = usePokemons() || [];

    const pokemonUrls = allPokemon.map((pokemon) => pokemon[1]);
    const products = useSinglePokemon(pokemonUrls);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleAddToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);

        let newTotal = 0;

        for (let i = 0; i < updatedCart.length; i++) {
            const prod = updatedCart[i];

            newTotal += parseFloat(prod.price.replace('$', ''));
        }

        setTotal(newTotal);
    };

    const handleDelete = () => {
        const updatedCart = cart.slice(0, -1);
        setCart(updatedCart);
        let newTotal = 0;
        for (let i = 0; i < updatedCart.length; i++) {
            const prod = updatedCart[i];
            newTotal += parseFloat(prod.price.replace('$', ''));
        }
        setTotal(newTotal);
    };

    return (
        <div>
            <h1>Catálogo de Productos</h1>
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>

            <h2>Carrito</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}
                        <button className="eliminar" onClick={handleDelete}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total a pagar: ${total.toFixed(2)}</p>
        </div>
    );
}