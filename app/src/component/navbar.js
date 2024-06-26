import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MyNavbar({ cartCount }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const newcategories = () => {
    navigate('/new-category');
  };

  return (
    <Navbar className='pl-3 pr-4 pt-3' style={{ backgroundColor: '#228c22', color: 'white' }} expand="lg">
      <Navbar.Brand style={{ color: 'white' }}>
        <h3>Food Ordering Portal</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto w-25 d-flex justify-content-evenly">

        <Nav.Link style={{ color: 'white' }} onClick={newcategories}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f7f7f7" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M9 12h6" />
  <path d="M12 9v6" />
</svg> Add New
          </Nav.Link>

          <Nav.Link style={{ color: 'white' }} onClick={handleCartClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1" stroke="#f7f7f7" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg> {cartCount}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
