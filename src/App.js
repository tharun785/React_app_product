import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import './styles.css';

// Sample product data (15 products)
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', description: 'A high-end laptop.', price: 1000, image: 'https://m.media-amazon.com/images/I/61T9XbFqcgL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, name: 'Smartphone', category: 'Electronics', description: 'Latest smartphone with 5G.', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNNR0VudBzgoL1qy1fFDQWpqAlWGcERNGNw&s' },
  { id: 3, name: 'Shoes', category: 'Fashion', description: 'Comfortable running shoes.', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7PcTWi41LA0mYEJk0E8aS8u2hWLNMEIu6w&s' },
  { id: 4, name: 'Jacket', category: 'Fashion', description: 'Winter jacket.', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqf-IYwV3mhBtwDSIp5_D_9NrN1FZMWMEEA&s' },
  { id: 5, name: 'Blender', category: 'Home Appliances', description: 'Powerful blender.', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefovWvR9ggMyZWSVKEyddkNQHgsH2cI1RWw&s' },
  { id: 6, name: 'Wireless Headphones', category: 'Electronics', description: 'High-quality wireless headphones with noise cancellation.', price: 99.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ScDNk1Ev8MjDQphlYGqwsopQmKcIYdY5yQ&s' },
  { id: 7, name: 'Smart Watch', category: 'Electronics', description: 'Stay connected on the go with this stylish smart watch.', price: 199.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv77rmDi6oU3aJlHGirLzHQR5FL6M4ECT8zA&s' },
  { id: 8, name: 'Bluetooth Speaker', category: 'Electronics', description: 'Portable Bluetooth speaker with excellent sound quality.', price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOnCTh16P3o25HAJMVVR5iO7tcMbsxMcnOQ&s' },
  { id: 9, name: 'Fitness Tracker', category: 'Fitness', description: 'Track your daily activity and stay healthy with this fitness tracker.', price: 79.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScM-sInZ5vNwKF9DFhuSwl_iv8Ng9KOkydBQ&s' },
  { id: 10, name: 'Laptop Backpack', category: 'Accessories', description: 'Durable laptop backpack with multiple compartments.', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4ftgh3003qHW8FKYrlW3Azt3V_uqttZD_A&s' },
  { id: 11, name: 'Gaming Mouse', category: 'Electronics', description: 'Ergonomic gaming mouse with customizable RGB lighting.', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT348_P-Bz-69bAaWKyUI1XeeEItSsTVAFvrQ&s' },
  { id: 12, name: 'Coffee Maker', category: 'Home Appliances', description: 'Brew the perfect cup of coffee with this coffee maker.', price: 89.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmBdNAlvk3Kdh-YFzLoJuw53RlMkR0WFeRw&s' },
  { id: 13, name: 'Digital Camera', category: 'Electronics', description: 'Capture stunning photos and videos with this high-resolution camera.', price: 399.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKjTusL-SaA7jc5shDMp-f9p0mZwckRC1SQ&s' },
  { id: 14, name: 'Yoga Mat', category: 'Fitness', description: 'Non-slip yoga mat for a comfortable workout experience.', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjUClcQwBMNskWEBDzsXQ1WlBcHlTMJRkWg&s' },
  { id: 15, name: 'Electric Kettle', category: 'Home Appliances', description: 'Boil water quickly with this stylish electric kettle.', price: 24.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAvGxq0nFoRV6fTxPU4INKZIQprD7r_JcdA&s' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState(null);

  const handleSearch = (term) => setSearchTerm(term);
  const handleCategoryChange = (selectedCategory) => setCategory(selectedCategory);
  const handlePriceChange = (range) => setPriceRange(range);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice =
      priceRange
        ? product.price >= priceRange.min && product.price <= priceRange.max
        : true;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: 'Above $500', min: 500, max: Infinity },
  ];

  return (
    <Router>
      <div>
        <h1>Product Catalog</h1>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={['Electronics', 'Fashion', 'Home Appliances', 'Accessories', 'Fitness']}
          onFilter={handleCategoryChange}
        />
        <div>
          <h4>Price Range</h4>
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => handlePriceChange(range)}
              className={priceRange === range ? 'active' : ''}
            >
              {range.label}
            </button>
          ))}
          <button onClick={() => setPriceRange(null)}>Clear Price Filter</button>
        </div>
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
