import Button from 'react-bootstrap/Button';

export default function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Button onClick={() => onAddToCart(product)} variant="success">Añadir al carrito</Button>
    </div>
  );
}