import React, { useState, useEffect } from 'react';

function ProductListing({ products }) {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Categories for filtering (assuming they are available in the products)
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    // Filter products based on search term and selected categories
    let updatedProducts = products;

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, selectedCategories, products]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />

      {/* Category Filters */}
      <h4>Filter by Category:</h4>
      {categories.map(category => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
 