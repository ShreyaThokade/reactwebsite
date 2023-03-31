import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Login.css';


function Login() {
    return (

        <div>
            <Navbar className="transparent font-custom" expand="lg">
                <Navbar.Brand ></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link > <Link to="/">Active Sensor Data</Link></Nav.Link>
                        <Nav.Link ><Link to="/About">Sensors Information</Link></Nav.Link>
                        <Nav.Link ><Link to="/Services">Interfacing</Link></Nav.Link>
                        <Nav.Link><Link to="/Login">Processor Information</Link></Nav.Link>
                        <Nav.Link><Link to="/We">About Us</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse></Navbar>

            <div>
                <Container>
                    <Row>
                        <Col className='log center-align'>
                            <h5 >Processor Information</h5>
                            <img src="/images/ESP32.jpg" height={300} width={300}></img>
                            <p>ESP32 is a low-cost System on Chip (SoC) Microcontroller from Espressif Systems, the developers of the famous ESP8266 SoC. It is a successor to ESP8266 SoC and comes in both single-core and dual-core variations of the Tensilica’s 32-bit Xtensa LX6 Microprocessor with integrated Wi-Fi and Bluetooth.
                                The good thing about ESP32, like ESP8266 is its integrated RF components like Power Amplifier, Low-Noise Receive Amplifier, Antenna Switch, Filters and RF Balun. This makes designing hardware around ESP32 very easy as you require very few external components.
                                The ESP32 board can be programmed using various programming languages and environments, including the Arduino IDE, MicroPython, and ESP-IDF (Espressif IoT Development Framework). It also supports various communication protocols such as Wi-Fi, Bluetooth, MQTT, and CoAP, making it easy to connect to other devices and services in the IoT ecosystem.
                                Overall, the ESP32 board is a popular choice for developers and hobbyists who want a powerful and flexible platform for IoT development.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default Login;

