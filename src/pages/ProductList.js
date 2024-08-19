import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Product from "../components/Product";
import Carrousel from "../components/Carrousel";
import usePokemons from "../hooks/usePokemons";
import useSinglePokemon from "../hooks/useSinglePokemon";

export default function ProductList() {
    const allPokemon = usePokemons() || [];
    const products = useSinglePokemon(allPokemon);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleAddToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, unidades: item.unidades + 1 } : item);
        } else {
            updatedCart = [...cart, { ...product, unidades: 1 }];
        }

        setCart(updatedCart);
        calculateTotal(updatedCart);
    };

    const handleDelete = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct.unidades > 1) {
            updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, unidades: item.unidades - 1 } : item);
        } else {
            updatedCart = cart.filter(item => item.id !== product.id);
        }

        setCart(updatedCart);
        calculateTotal(updatedCart);
    };

    const calculateTotal = (updatedCart) => {
        let newTotal = 0;
        for (let i = 0; i < updatedCart.length; i++) {
            const prod = updatedCart[i];
            newTotal += parseFloat(prod.price.replace('$', '')) * prod.unidades;
        }
        setTotal(newTotal);
    };

    return (
        <div>
            <h1>Catálogo de Productos</h1>
            <div className="oferta">
                <Carrousel />
            </div>
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>

            <h2>Carrito</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - {item.price} × {item.unidades}
                        <Button className="eliminar" variant="danger" onClick={() => handleDelete(item)}>Eliminar</Button>
                    </li>
                ))}
            </ul>
            <p>Total a pagar: ${total.toFixed(2)}</p>
        </div>
    );
}
