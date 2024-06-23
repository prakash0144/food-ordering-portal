import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState({
    name: '',
    image: '',
    subitems: [{ subname: '', type: '', name: '', url: '', description: '', price: 0, rating: 0 }]
  });

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/admin/get-food/${id}`);
        setFoodItem(response.data);
      } catch (error) {
        console.error('Error fetching food item', error);
      }
    };

    fetchFoodItem();
  }, [id]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSubitems = [...foodItem.subitems];
    updatedSubitems[index] = { ...updatedSubitems[index], [name]: value };
    setFoodItem({ ...foodItem, subitems: updatedSubitems });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:5000/admin/update-food/${id}`, foodItem); // Corrected URL
      alert('Food item updated successfully');
    } catch (error) {
      console.error('Error updating food item', error);
      alert('Error updating food item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Category Name"
        value={foodItem.name}
        onChange={(e) => setFoodItem({ ...foodItem, name: e.target.value })}
        
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={foodItem.image}
        onChange={(e) => setFoodItem({ ...foodItem, image: e.target.value })}
        
      />
      {foodItem.subitems.map((subitem, index) => (
        <div key={index}>
          <input
            type="text"
            name="subname"
            placeholder="Subitem Name"
            value={subitem.subname}
            onChange={(e) => handleInputChange(index, e)}
            
          />
          <input
            type="text"
            name="type"
            placeholder="Type (veg/non veg)"
            value={subitem.type}
            onChange={(e) => handleInputChange(index, e)}
            
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={subitem.name}
            onChange={(e) => handleInputChange(index, e)}
            
          />
          <input
            type="text"
            name="url"
            placeholder="Image URL"
            value={subitem.url}
            onChange={(e) => handleInputChange(index, e)}
            
          />
          <textarea
            name="description"
            placeholder="Description"
            value={subitem.description}
            onChange={(e) => handleInputChange(index, e)}
            
          ></textarea>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={subitem.price}
            onChange={(e) => handleInputChange(index, e)}
            
          />
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={subitem.rating}
            onChange={(e) => handleInputChange(index, e)}
            
          />
        </div>
      ))}
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
