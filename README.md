# React_app_product
# Product Catalog Application
A simple React-based product catalog application with functionalities like filtering, searching, sorting, and adding products to a cart.

# Features
# Product Filtering: By category and price range.
# Search: Find products by name.
# Sorting: Sort products by price (ascending or descending).
# Reusable Components: Built using modular, reusable components like ProductList, ProductItem, SearchBar, and CategoryFilter.


# Installation and Setup
Prerequisites
Node.js (v14 or higher) installed.
npm or yarn installed.
Steps to Run Locally

# Clone the repository:
git clone  https://github.com/tharun785/React_app_product.git

# Navigate to the project directory:
cd React_app_product

# Install dependencies:
npm install

# Start the development server:
npm start

# Open the application in your browser:
### http://localhost:3000

## Libraries and Tools Used:::
## React: Frontend framework.
## React Router: For navigation and routing.
## CSS: For styling components.
## React Hooks: For state management (useState, useEffect).

### Challenges Faced:::
## State Management for Cart:
Initially struggled to share the cart state across components. Resolved by passing state and handlers via props.

## Price Filtering Logic:
Implemented dynamic filtering logic using filter and sort to handle both price ranges and ascending/descending order.

## Optional Enhancements::
## Sorting by Price: Implemented ascending and descending sorting for a better user experience.
  

## Product Filtering based on categories and price
   

 
 
## Future Enhancements
Add user authentication for managing personalized carts.
Introduce pagination for large product lists.
Integrate a backend API for product data.
