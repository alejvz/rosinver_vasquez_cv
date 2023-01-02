import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Photo, Text, Date } from "./api";


export const NasaAPI = () => {// puedes acceder a imageUrl aquí
  const [explanation, setExplanation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <h2>NASA Astronomy Picture of the Day API connection.</h2>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Photo
                    onImageChange={setImageUrl}

                  />
                  <img
                    style={{ maxWidth: '100%', objectFit: 'cover', borderRadius: "15px" }}
                    src={imageUrl}
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{
                    backgroundImage: 'linear-gradient(to right, black, #7b4397)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>NASA's Image of the Day</h2>
                  <Text onExplanationChange={setExplanation} />

                  <p style={{ textAlign: 'justify' }}>{explanation}</p>
                  <Date onDateChange={setDate} />
                  <p style={{ textAlign: 'justify' }}>Date: {date}</p>


                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
