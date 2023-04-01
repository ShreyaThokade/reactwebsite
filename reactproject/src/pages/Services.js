import React from 'react';
//import { Navbar } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Services() {
    
    return (
        
        <div>
            <Navbar className="transparent font-custom" expand="lg">
            <Navbar.Brand ></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link > <Link to="/">Active Sensor Data</Link></Nav.Link>
                    <Nav.Link ><Link to="/About">Sensors Information</Link></Nav.Link>
                    <Nav.Link ><Link to ="/Services">Interfacing</Link></Nav.Link>
                    <Nav.Link><Link to= "/Login">Processor Information</Link></Nav.Link>
                    <Nav.Link><Link to= "/We">About Us</Link></Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Navbar>
           
           <div>

           <Container fluid="md">
         <h5>Interfacing</h5>
         <p>Following are the working of realtime database and interfacing of sensors 
         </p>
            <Row>
          <Col className=" center-align margin-top:20;">
            
            <video controls height={500} width={600} >
            <source src='./images/ESP32.mp4'm/>
          </video>
          </Col>
          <Row><br></br></Row>
          <Col xs={1}></Col>
          <h5>Interfacing Of Sensors</h5>
          <Col className="  center-align">
          <img src='/images/diagram.jpg'height={300} width={700}></img>
          </Col>
        </Row>
        </Container>

            </div> 
        </div>
    );
}

export default Services;
