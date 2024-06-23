import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryButtons from './component/Homepage';
import CartPage from './component/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './component/navbar';
import AdminPage from './component/admin';
import Login from './component/login';
import Register from './component/Registration';
import UpdateForm from './component/updateitem';
// import 'mdb-ui-kit/css/mdb.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add item to cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from cart
  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <MyNavbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<CategoryButtons onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/new-category" element={<AdminPage />} />
        {/* <Route path="/edit/:id" element={<UpdateForm />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/login' element={<Login />} />   */}
      </Routes>
    </Router>
  );
}

export default App;
