import React from 'react'
import { Nav } from './Navbar.styles';

const Navbar: React.FC<{}> = (): JSX.Element => {
  return (
    <Nav>
      <h1>Hi Scytale, Welcome to <span>MY PULL REQUESTS APP</span></h1>
    </Nav>
);}

export default Navbar;