// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setmobile] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/register', { name, email, mobile, password });
      console.log(res.data);
      // Save the token, redirect, etc.
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
    }
  };

  return (
<>
   <div className='container'>
    <div className='col-12'>
      <div className=''>
        <h3>Registration</h3>

          <div className=''>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>
           <div className='form-group'>
             <input type="email" value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
             </div>
             <div className='form-group'>
             <input type="number" value={mobile} className='form-control' onChange={(e) => setmobile(e.target.value)} placeholder="Mobile" required />
             </div>
             <div className='form-group'>
            <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            
            <button type="submit">Register</button>
          </form> 
          </div>

      </div>
    </div>
   </div>
   
    </>
  );
};

export default Register;
