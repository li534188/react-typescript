import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export function HeaderCard() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="rgba(34,84,126,0.9)" dark expand="md">
                <NavbarBrand href="/">Ticket</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Create E-Ticket</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Pickups</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">BuildlD Rules</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Auto Approval</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Log off</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}