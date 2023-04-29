import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
class Header extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: 'blue' }} expand="md">
      <div className="container">
          <NavbarBrand style={{ color: 'white' }}>
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
    );
  }
}

export default Header;
