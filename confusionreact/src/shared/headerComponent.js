import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (<Navbar style={{ backgroundColor: 'blue' }} expand="md">
    <div className="container">
      <NavbarBrand style={{ color: 'white' }}>
        Ristorante Con Fusion
      </NavbarBrand>
    </div>
  </Navbar>)

}

export default Header;
