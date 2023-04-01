import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import './We.css';

class We extends Component {
    render() {
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
                
                </Navbar.Collapse></Navbar>

           <div></div>

            
               <Container >
                <Row>
                    <Col className='log center-align '>
                        <h5>About Us</h5>
                        
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                  <Col className='log center-align' >
                  <h6>Project Guide</h6>
                  <label>Prof. Vishalsinh Bais</label>
                  </Col>
                </Row>
                <Row><br></br></Row>
                <Row><br></br></Row>
                <Row>
                  <Col className='log center-align' >
                  <h6>Team Members</h6>
                  </Col>
                </Row>
          <Row>
          <Col className="  center-align">
            <label>Ms.Shreya S. Thokade</label>
          </Col>
          <Col xs={1}></Col>
          <Col className="center-align">
          <label>Mr.Dhanraj S. Chavhan</label>
          </Col>
        </Row>
        <Row>
          <Col className=" center-align">
            <label>Mr.Pratik S. Raut</label>
          </Col>
          <Col xs={1}></Col>
          <Col className="center-align">
          <label>Mr.Chaitanya B. Deshmukh </label>
          </Col>
        </Row>
        <Row>
                  <Col className='log center-align' >
                  <p>Prof Ram Meghe College of Engineering and Management Badnera @PRMCEAM</p>
                  </Col>
                </Row>
           

            </Container> 

          
            </div>
        );
    }
}

export default We;