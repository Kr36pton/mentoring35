import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import iconMoneda from '../assets/img/moneda.png'

const Header = () => {
    return (  
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={iconMoneda}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        COIN FLIPPER
                </Navbar.Brand>
             </Container>
        </Navbar>
    );
}
 
export default Header;