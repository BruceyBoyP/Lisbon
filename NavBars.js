import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavBars(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="dark"
    dark {...args}>
        <NavbarBrand>TrapCoin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavbarText>Links Below</NavbarText>
            <NavItem>
              <NavLink href="https://discord.gg/ytzhPWmnqA">Discord</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://linktr.ee/daviesnft">Linktr.ee</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/TRAP__COIN">Twitter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.instagram.com/lisb_onnft/">Instagram</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://polygonscan.com/token/0x8c747f1261782976B06d18f24b3e2F18f5B5a658">TrapCoin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://t.me/trapcoin3">Telegram</NavLink>
            </NavItem>
          
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBars;