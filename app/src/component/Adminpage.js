// src/components/AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/get-foods');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        {foodItems.length > 0 ? (
          foodItems.map(foodItem => (
            <div key={foodItem._id}>
              <h2>{foodItem.name}</h2>
              <img src={foodItem.image} alt={foodItem.name} />
              <Link to={`/admin/update/${foodItem._id}`}>
                <button>Update</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
