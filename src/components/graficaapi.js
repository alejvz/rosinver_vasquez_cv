import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const GraficaAPI = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My experience as a data analyst and machine learning engineer</h2>
                  <p style={{ textAlign: 'justify' }}>
                    I have experience analyzing large data sets and developing machine learning models for both classification and regression. I have used tools like Python and R to manipulate and visualize data, and I have worked with different machine learning algorithms such as decision trees, logistic regression, and neural networks. In addition, I have participated in projects involving natural language processing and text sentiment analysis.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ textAlign: "right" }}>"Any sufficiently advanced technology is indistinguishable from magic"</h2>
                  <p style={{ textAlign: "right" }}> Arthur C. Clarke</p>


                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
