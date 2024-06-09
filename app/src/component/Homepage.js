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
        <div ref={scrollContainer} className='row slide-container category-list'>
          {menuCategories.map((category, index) => (
            <div key={index} className='card border-light m-2 w-auto category-item' onClick={() => handleSelectCategory(category)}>
              <img className='category-item-img' src={category.image} width="170" height="208" alt={category.name} />
              <div className='card-body'></div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className='mt-3'>
            <div className='row subcategory-list'>
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
                            <p className='card-text'><small className='text-muted'>${item.price}</small></p>
                            <div className='d-flex justify-content-end'>
                             

                              {/* <div class="sc-JrDLc fCWvDK">
                                <button style={{border:"none", height: '38px', width: '38px', background:'#f0f0f0'}} >
                                  <div style={{color: "#00b050"}}>−</div>
                                </button>
                                <div>
                                  <div style={{color: "#00b050"}}>1</div>
                                </div>
                                  <button style={{border:"none", height: '38px', width: '38px', color:'#f0f0f0'}}>
                                    <div style={{color: "#00b050"}}>+</div>
                                  </button>
                                  </div> */}

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
