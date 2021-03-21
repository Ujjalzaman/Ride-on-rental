import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";
import { userContext } from '../../App';
const Header = () => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    return (
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/"> <ReactBootstrap.Navbar.Brand>  Express Rider</ReactBootstrap.Navbar.Brand></Link>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link><Link to="/about">About</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link><Link to="/manage">Manage</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link><Link to="/destination">Destination</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link><Link to="/contact">Contact</Link></ReactBootstrap.Nav.Link>

                </ReactBootstrap.Nav>
                <ReactBootstrap.Nav>
                    <ReactBootstrap.Nav.Link href="#deets">{loggedInUser.name}</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
                        {loggedInUser.isSignedIn ?  "LogOut" : <Link to="/login">Login</Link>}
                     
      </ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    );
};

export default Header;