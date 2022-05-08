import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import logo from '../../../images/icon/analytics.png'


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#inventories">Inventories</Nav.Link>
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addall">Additems</Nav.Link>
                                <Nav.Link as={Link} to="manageall">Manageitems</Nav.Link>
                                <Nav.Link as={Link} to="orders">Myitems</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-danger text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;