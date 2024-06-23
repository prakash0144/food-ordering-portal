import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArrowIcon from './ArrowIcon';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { navigate } from 'react-router-dom';

function CategoryButtons({ onAddToCart, cartCount }) {

  const [menuCategories, setMenuCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State to control the visibility of the message
  const scrollContainer = useRef(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/food-items');
        setMenuCategories(response.data);
      } catch (error) {
        console.error('Error fetching the food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const scrollLeft = () => {
    scrollContainer.current?.scrollBy({ left: -175, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainer.current?.scrollBy({ left: 175, behavior: 'smooth' });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset selected item when changing category
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleAddToCart = (item) => {
    onAddToCart(item);
    setShowMessage(true); // Show the message when item is added to cart
    // Hide the message after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div>
      <div className='container'>
        <div className="d-flex justify-content-end mt-3">
          <span className='m-2' aria-label="click here to move previous" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="23" height="23" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </span>
          <span className='m-2' aria-label="click here to move next" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="23" height="23" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </span>
        </div>
        <div
  ref={scrollContainer}
  className='slide-container category-list d-flex' style={{ overflow: 'auto', scrollbarWidth: 'none' }} >
          {menuCategories.map((category, index) => (
            <div key={index} className='card border-light m-2 w-auto category-item col-2 p-0' onClick={() => handleSelectCategory(category)}>
              <img className='category-item-img' src={category.image} width="170" height="208" alt={category.name} />
              <div className='card-body text-center'>{category.name}</div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className='mt-3'>
            <div className='row subcategory-list d-flex justify-content-center'>
              {selectedCategory.subitems.map((item, idx) => (
                <div key={idx} className='col-md-9 mb-3' onClick={() => handleSelectItem(item)}>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12 d-flex'>
                          <div className='col-4'>
                            <img className='subcatehory-menu-img' src={item.url} width="204" height="180" alt='apple' />
                          </div>
                          <div className='col-8'>
                            <h5 className='card-title'>{item.name}</h5>
                            <p className='card-text'>{item.description}</p>
                            <div className='d-flex justify-content-between'>
                              <p className='card-text'><small className='text-muted'>${item.price}</small></p>
                              <span className={`badge ${item.type === 'veg' ? 'bg-success h-50' : 'bg-danger h-50'}`}>{item.type}</span>
                            </div>
                            <div className='d-flex justify-content-between'>

                             <span>
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                              <b><span> </span>{item.rating}</b>
                             </span>
                              <button className='btn' style={{ background: "#e45f2b", color: '#fff' }} onClick={() => handleAddToCart(item)}>Add To Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showMessage && (
          <div className='d-flex justify-content-center'>
            <div className="alert alert-success mt-3 d-flex align-items-center justify-content-between w-50" style={{ position: 'fixed', bottom: 0, }}>
              <div className="d-flex align-items-center alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="26" height="26" viewBox="0 0 24 24" stroke-width="1" stroke="#155724" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 12l5 5l10 -10" />
                  <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
                <span className=''>You have successfully added {cartCount} items to your cart!</span>
              </div>
              <div className='alert-success alert-success d-flex justify-content-between'>
                <Nav.Link style={{ color: 'white' }} onClick={handleCartClick}>


                </Nav.Link>
                <Nav.Link onClick={handleCartClick}><b>View Cart</b></Nav.Link>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CategoryButtons;