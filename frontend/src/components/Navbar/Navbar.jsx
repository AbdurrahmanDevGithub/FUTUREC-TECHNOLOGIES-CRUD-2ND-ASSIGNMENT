import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftStyle}>FUTUREC TECHNOLOGIES</div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/add_product" style={linkStyle}>Add Products</Link>
        </li>
        <li style={liStyle}>
          <Link to="/home" style={linkStyle}>View Products</Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#007bff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftStyle = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '18px',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px',
};

const liStyle = {
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;
