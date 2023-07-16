import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems }) => {
  const cartItemCount = cartItems.length;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        <CartWidget cartItemCount={cartItemCount} />
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" exact activeClassName="active">Home</Nav.Link>
          <Nav.Link as={Link} to="/category/electronics" activeClassName="active">Electronics</Nav.Link>
          <Nav.Link as={Link} to="/category/jewelery" activeClassName="active">Jewelery</Nav.Link>
          <Nav.Link as={Link} to="/category/men's%20clothing" activeClassName="active">Men's Clothing</Nav.Link>
          <Nav.Link as={Link} to="/category/women's%20clothing" activeClassName="active">Women's Clothing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
