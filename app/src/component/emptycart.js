import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const EmptyCart = () => {
    const borderStyle = {
        border: '3px solid #1b5a1b',
        borderRadius: '100%',
        height: '150px',
        width: '150px'
    };

    const cartContainer = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const btnstyle = {
        background: '#e45f2b',
        color: '#fff'
    }

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/');
      };
    return (
        <div className="empty-cart-container text-center" style={cartContainer}>
            <div className='d-flex justify-content-center mb-4' >
                {/* <div className='empty-border d-flex justify-content-center' style={borderStyle}> */}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-question mt-3" width="124" height="124" viewBox="0 0 24 24" stroke-width="0.4" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M13.5 17h-7.5v-14h-2" />
                    <path d="M6 5l14 1l-.714 5m-4.786 2h-8.5" />
                    <path d="M19 22v.01" />
                    <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                </svg>
                {/* </div> */}
            </div>
            <h2 className="empty-cart-title">Your Cart is <span className='text-danger'>Empty!</span></h2>
            <p className="empty-cart-message">
                Must add items on the cart before you proceed to check out.
            </p>
            <button className="btn" onClick={handleCartClick} style={btnstyle}>GO TO HOME <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-soup" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
            </svg></button>
        </div>
    );
};

export default EmptyCart;