import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [subitems, setSubitems] = useState([{ subname: '', type: '', name: '', image: null, description: '', price: '', rating: '' }]);

  const handleSubitemChange = (index, event) => {
    const values = [...subitems];
    if (event.target.name === 'image') {
      values[index].image = event.target.files[0]; // Store the file object
    } else {
      values[index][event.target.name] = event.target.value;
    }
    setSubitems(values);
  };

  const handleAddSubitem = () => {
    setSubitems([...subitems, { subname: '', type: '', name: '', image: null, description: '', price: '', rating: '' }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('subitems', JSON.stringify(subitems));

    try {
      await axios.post('http://localhost:5000/admin/add-food', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Food item added successfully');
    } catch (error) {
      console.error(error.response.data);
      alert('Error adding food item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      {subitems.map((subitem, index) => (
        <div key={index}>
          <input
            type="text"
            name="subname"
            placeholder="Subitem Name"
            value={subitem.subname}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type (veg/non veg)"
            value={subitem.type}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={subitem.name}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
          <input
            type="file"
            name="image"
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={subitem.description}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          ></textarea>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={subitem.price}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={subitem.rating}
            onChange={(e) => handleSubitemChange(index, e)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddSubitem}>Add Subitem</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminForm;
