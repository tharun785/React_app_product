


import React from 'react';

function  PriceFilter({ prices, onFilter }) {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All Prices</option>
      {prices.map((price) => (
        <option key={price} value={price}>
          {price}
        </option>
      ))}
    </select>
  );
}



export default PriceFilter;

 