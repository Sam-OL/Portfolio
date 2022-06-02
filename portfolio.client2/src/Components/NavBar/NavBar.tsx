import React from 'react';
import logo from './logo.svg';
import "./navbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import { Separator } from '../CustomComponents/CustomComponents';



function NavBar() {
    return (
        <Navbar className="navbar-main" bg="light" expand="lg">
            <Container >
                <Navbar.Brand className="navbar-brand__name" as={Link} to="/"> Samuel Ohman-Lebender</Navbar.Brand>

                <Separator />
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navbar--link" as={Link} to="/AboutMe">About me</Nav.Link>
                            <Nav.Link className="navbar--link" as={Link} to="/Projects">My Projects</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Container>
        </Navbar>
    );
}

export default NavBar;
