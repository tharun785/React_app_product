// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import Product from './Product';

// // function ProductList({ products }) {
// //   return (
// //     <div className="product-list">
// //       {products.map(product => (
// //         <Product key={product.id} product={product} />
// //       ))}
// //     </div>
// //   );
// // }

// // export default ProductList;
 

import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ products }) {
  const [sortOrder, setSortOrder] = useState(''); // Sorting state

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="product-list-container">
      {/* Sorting Dropdown */}
      <div className="sort-options">
        <label htmlFor="sort">Sort by Price:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-list">
        {sortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

 