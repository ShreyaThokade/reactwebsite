import React from 'react';
//import { Navbar } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';



function About() {
    return (
        
        <div>
           <Navbar className="transparent font-custom" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link > <Link to="/">Active Sensor Data</Link></Nav.Link>
                    <Nav.Link ><Link to="/About">Sensors Informatio</Link></Nav.Link>
                    <Nav.Link ><Link to ="/Services">Interfacing</Link></Nav.Link>
                    <Nav.Link><Link to= "/Login">Processor Information</Link></Nav.Link>
                    <Nav.Link><Link to= "/We">About Us</Link></Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Navbar>
            <div>
               <h5 className='und'>Sensors Information</h5>
               <Container fluid="md margin-top:40px;">
                <p>The information about all the sensors used are as follows :</p>
                <Row>
          <Col className="center-align">
            <h5>GPS</h5>
            <img src="/images/GPS.jpg" height={200} width={200}></img>
            <label>The Global Positioning System (GPS). We can know their exact location because they are constantly transmitting position information with time through radio signals. There is the NEO-6M GPS module that is designed.</label>
            
          </Col>
          <Col xs={1}></Col>
          <Col className=" center-align">
            <h5>BME280</h5>
            <img src="/images/BMP280.jpg" height={200} width={200}></img>
            <label>The BME280 is a humidity sensor especially developed for mobile applications and wearables where size and low power consumption are key design parameters.</label>
          </Col>
          <Col xs={1}></Col>
          <Col className=" center-align">
            <h5>Light Intensity Sensor</h5>
            <img src="/images/LDR.jpg" height={200} width={200}></img>
            <label>An LDR  is also known as light dependent resistor.When the light falls on the resistor, then the resistance changes. These resistors are often used in many circuits where it is required to sense the presence of light.</label>
          </Col>
        </Row>
        
        </Container>
        <Row><br></br></Row>
        <Container fluid="md">
                <Row>
          <Col className="center-align">
            <h5>MQ7 Sensor</h5>
            <img src="/images/MQ7.jpg" height={200} width={200}></img>
            <label>MQ7 gas detector sensor that can detect this harmful gas.MQ7 sensor has an acute sensitivity to Carbon Monoxide and can detect the concentration of carbon monoxide in the surroundings.</label>
            
          </Col>
          <Col xs={1}></Col>
          <Col className=" center-align">
            <h5>MQ135 Sensor</h5>
            <img src="/images/MQ135.jpg" height={200} width={200}></img>
            <label>The MQ 135 sensor can be implemented to detect smoke, benzene, vapors, and other hazardous gases. It can detect various harmful gases.</label>
          </Col>
          <Col xs={1}></Col>
          <Col className=" center-align">
            <h5>Motion Detector Sensor</h5>
            <img src="/images/motion detecor.jpg" height={200} width={200}></img>
            <label>A motion sensor  is an electronic device that is designed to detect and measure movement. </label>
          </Col>
        </Row>
          
        </Container>   
        <Container fluid="md">
                <Row>
          
          <Col xs={1}></Col>
          <Col className=" center-align">
            <h5>MQ135 Sensor</h5>
            <img src="/images/Soil.jpg" height={200} width={200}></img>
            <label>Soil moisture module is most sensitive to the ambient, generally used to detect the moisture content of the soil.</label>
          </Col>
          <Col xs={1}></Col>
          
        </Row>
          
        </Container>           
            </div>
        </div>
    );
}
export default About;

