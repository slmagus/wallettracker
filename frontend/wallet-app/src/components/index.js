import React from 'react';
import { Nav, NavLink, NavMenu }
from "./NavbarElements";


const Navbar = () => {
    return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/add" activeStyle>
          Add a Wallet
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
      </>
    );
  };
export default Navbar;
