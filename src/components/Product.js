export default function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
    </div>
  );
}