import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="large-image" />
      <p>ID: {product.id}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </div>
  );
}

export default ProductDetail;
 