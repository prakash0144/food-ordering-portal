import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryButtons from './component/Homepage';
// import CategoryDetails from './component/CategoryPage';
import CartPage from './component/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './component/navbar';
import AdminPage from './component/admin';
import Login from './component/login';
import Register from './component/Registration';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <Router>
      <MyNavbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<CategoryButtons onAddToCart={handleAddToCart} cartCount={cartCount}/>} />
        {/* <Route path="/category/:categoryName" element={<CategoryDetails onAddToCart={handleAddToCart} />} /> */}
        <Route path="/cart" element={<CartPage cartItems={cartItems}/>} />

        <Route path="/admin" element={<AdminPage/>} />

        <Route path='/Registration' element={<Register/>} />

        <Route path='/login' element={<Login/>} />  

      </Routes>
    </Router>
  );
}

export default App;
