import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

const NavBar = () => {
  const location = useLocation();
  const { categoryId } = useParams();
  const [categoryChanged, setCategoryChanged] = useState(false);

  useEffect(() => {
    if (categoryChanged) {
      // Aquí puedes realizar la lógica para volver a cargar los productos correspondientes
      // según la nueva categoría seleccionada
      console.log('Categoría cambiada:', categoryId);
      setCategoryChanged(false);
    }
  }, [categoryId, categoryChanged]);

  const handleCategoryChange = () => {
    setCategoryChanged(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        <CartWidget />
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/category/electronics" activeClassName="active" onClick={handleCategoryChange}>Electronics</Nav.Link>
          <Nav.Link as={NavLink} to="/category/jewelery" activeClassName="active" onClick={handleCategoryChange}>Jewelery</Nav.Link>
          <Nav.Link as={NavLink} to="/category/men's%20clothing" activeClassName="active" onClick={handleCategoryChange}>Men's Clothing</Nav.Link>
          <Nav.Link as={NavLink} to="/category/women's%20clothing" activeClassName="active" onClick={handleCategoryChange}>Women's Clothing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
