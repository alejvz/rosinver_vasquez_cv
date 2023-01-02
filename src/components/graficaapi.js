import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { MyComponent } from "./api2";


export const GraficaAPI = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              
            </div>
            }
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>NASA's Image of the Day</h2>
                
              </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    </section >
  )
}
