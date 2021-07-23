import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/">
                Project Quack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/feederform">Feeder Form</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};