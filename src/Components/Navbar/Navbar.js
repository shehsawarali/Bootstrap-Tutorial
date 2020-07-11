import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';
import "./Navbar.css";

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-nav .nav-link {
        color: whblackite;
        font-family: "Jost";
        opacity: 1 !important;

        &:hover {
            color: black;
            opacity: 1 !important;
            text-decoration: underline;
        }
    }

    .navbar-brand {
        color: white;
    }

    .active {
        color: white;
        font-family: "Jost";
        text-decoration: underline;
    }
`;

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><div className="NavBarTitle">Filmfilia</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link exact activeClassName="active" href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;