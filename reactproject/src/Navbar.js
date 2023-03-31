import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import './Search.css';



class Navbars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    handleSearch = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // perform search action
        console.log(`Searching for ${this.state.searchValue}`);
        // search the whole reactjs page for the word given in the search field
        // here you can write your code to search the word in the whole reactjs page
    }

    render() {
        return (
            <Navbar className="transparent font-custom" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/">Active Sensors Data</Link></Nav.Link>
                    <Nav.Link ><Link to="/About">Sensors Information</Link></Nav.Link>
                    <Nav.Link ><Link to ="/Services">Interfacing</Link></Nav.Link>
                    <Nav.Link><Link to= "/Login">Processor Information</Link></Nav.Link>
                    <Nav.Link><Link to= "/We">About Us</Link></Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
                </Navbar>
        );
    }

}
 export default Navbars;