

// FRONT END

// src/components/AdminForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AdminForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [subitems, setSubitems] = useState([{ subname: '', type: '', name: '', url: '', description: '', price: '', rating: '' }]);

  const handleSubitemChange = (index, event) => {
    const values = [...subitems];
    values[index][event.target.name] = event.target.value;
    setSubitems(values);
  };

  const handleAddSubitem = () => {
    setSubitems([...subitems, { subname: '', type: '', name: '', url: '', description: '', price: '', rating: '' }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newFood = { name, image, subitems };
    try {
      await axios.post('/admin/add-food', newFood);

      alert('Food item added successfully');
      navigate('/');
    } catch (error) {
      alert('Error adding food item');
    }
  };

  return (
    <>
      <div className='p-3'>

      </div>

      <div className='container'>
        <span className='mb-5'>
          home / New Category
        </span>
        <div className='row'>
          <div className='col-12'>
            <form onSubmit={handleSubmit}>


              <div className='row'>
                <div className='form-group col-6'>
                  <label>Category name</label>
                  <input
                    type="text"
                    name="name" className='form-control'
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className='from-group col-6'>
                  <label>Image URL</label>
                  <input
                    type="text"
                    name="image" className='form-control'
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
              </div>


              {subitems.map((subitem, index) => (

                <div key={index}>

<div className='border m-3'></div>


                  <div className='row d-flex justify-content-center'>
                    <div className='form-group col-4'>
                      <input
                        type="text"
                        className='form-control'
                        name="subname"
                        placeholder="Subitem Name"
                        value={subitem.subname}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>

                    <div className='form-group col-4'>
                      <input
                        type="text"
                        name="type" className='form-control'
                        placeholder="Type (veg/non veg)"
                        value={subitem.type}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center'>
                    <div className='form-group col-4'>
                      <input
                        type="text"
                        name="name" className='form-control'
                        placeholder="Name"
                        value={subitem.name}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>

                    <div className='form-group col-4'>
                      <input
                        type="text"
                        name="url" className='form-control'
                        placeholder="Image URL"
                        value={subitem.url}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center'>
                    <div className='form-group col-8'>
                      <textarea
                        name="description"
                        placeholder="Description"
                        className="form-control" id="textAreaExample3" rows="2"
                        value={subitem.description}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center'>
                    <div className='form-group col-4'>
                      <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className='form-control'
                        value={subitem.price}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>

                    <div className='form-group col-4'>
                      <input
                        type="number"
                        step="0.1"
                        name="rating"
                        className='form-control'
                        placeholder="Rating"
                        value={subitem.rating}
                        onChange={(e) => handleSubitemChange(index, e)}
                        required
                      />
                    </div>
                  </div>

                </div>
              ))}
              <div className='row d-flex justify-content-center'>
                <div className='form-group col-8'>
                  <button className='btn btn-link' type="button" onClick={handleAddSubitem}>Add Subitem</button>
                  <button className='btn btn-primary' type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default AdminForm;
