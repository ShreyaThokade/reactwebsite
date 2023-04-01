import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap'
import './FirebaseData.css';


const config = {
  apiKey: "AIzaSyADBx4wAcPA8yRSTLz-YALTZdG1-Oou_wE",
  authDomain: "esp32-iot-18946.firebaseapp.com",
  databaseURL: "https://esp32-iot-18946-default-rtdb.firebaseio.com",
  projectId: "esp32-iot-18946",
  storageBucket: "esp32-iot-18946.appspot.com",
  messagingSenderId: "236953205998",
  appId: "1:236953205998:web:e03c6fe789e642807b47ff",
  measurementId: "G-RT2YSB7FGN"
};

const app = initializeApp(config);
const db = getDatabase(app);
function FirebaseData() {
  const [data_Sensor, setSensorData] = useState(null);
  useEffect(() => {
    const dataRef = ref(db, '/');
    onValue(dataRef, snapshot => {
      setSensorData(snapshot.val());
    });
  }, []);

  if (!data_Sensor) {
    return <div>Loading...</div>;
  }
  //const sensor_data = JSON.stringify(data_Sensor, null, 2);
  //console.log(sensor_data);
  // BMP 280 Sensor Data
  const bmp280Data = data_Sensor.BMP280;
  const approxAlti = bmp280Data.Approx_alti;
  const approxPres = bmp280Data.Pres;
  const approxTemp = bmp280Data.Temp;

  // MQ 7 CO Level Sensor Data
  const gasData = data_Sensor.GasSensor;
  const coLevel = gasData.CO_Level;

  // LDR Sensor Data
  const sunLightData = data_Sensor.LDR;
  const lightLevel = sunLightData.Light_Intensity;

  // Set LED Status on Website
  const response = "ON"
  set(ref(db, '/LED'), response);
  const ledStatus = data_Sensor.LED;

  // M135 Air Quality Sensor Data
  const airData = data_Sensor.MQ135;
  const airLevel = airData.AirQuality;

  // PIR Motion Sensor 
  const pirSensor = data_Sensor.Motion;
  const motionStatus = pirSensor.Motion_Detection;

  // GPS Module Data
  const gpsData = data_Sensor.NEO6M;
  const latData = gpsData.Lat;
  const LongData = gpsData.Long;

  // Soil Sensor Data 
  const soilSensor = data_Sensor.Soil_Level;
  const moisStatus = soilSensor.Mois;

  return (
    

    <div>
      

      <Container fluid="md">
        <h1 className='heading'>
          Weather Monitoring and Forecasting Using Firestore and Processor
        </h1>
        <Row>
          <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">BME 280 Sensor Data</h2>
            <h3 className="custom-h3">Aproximate Altitude: {approxAlti} <label>Altimeters</label></h3>
            <h3 className="custom-h3">Pressure: {approxPres} <label>Pa</label></h3>
            <h3 className="custom-h3">Temperature: {approxTemp} <label>℃</label></h3>
          </Col>
          <Col xs={1}></Col>
          <Col className="soft-hover box-styling center-align">
          <h2 className="custom-h2">Current Location (Neo 6M Sensor Data)</h2>
            <h3 className="custom-h3">Latitude: {latData}</h3>
            <h3 className="custom-h3">Logitude: {LongData}</h3>
          </Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">MQ135 Sensor Data </h2>
            <h3 className="custom-h3">Air Quality Level: {airLevel} <label>ppm</label></h3>
          </Col>
          <Col xs={1}></Col>
          <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">PIR Sensor</h2>
            <h3 className="custom-h3">Motion Status: {motionStatus}</h3>
          </Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">MQ 7 Sensor data</h2>
            <h3 className="custom-h3">Carbon Monoxide Level: {coLevel} <label>ppm</label></h3>
          </Col>
          <Col xs={1}></Col>
          <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">Soil Humidity Sensor Data</h2>
            <h3 className="custom-h3">Moisture Status: {moisStatus} <label>g/m³</label></h3>
          </Col>
        </Row>
        <Row><br></br></Row>
        <Row>
        <Col xs={3}></Col>
        <Col className="soft-hover box-styling center-align">
            <h2 className="custom-h2">Sunlight Intensity Level</h2>
            <h3 className="custom-h3">Sunlight Level: {lightLevel} <label>lumens</label> </h3>
          </Col>
          <Col xs={3}></Col>
        </Row>
        <Row><br></br></Row>
      </Container>
    </div>
  );
};

export default FirebaseData;
