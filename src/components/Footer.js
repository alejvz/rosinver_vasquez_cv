import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 style={{ fontWeight: 'bold', color: 'white' }}>ROSINVER VÁSQUEZ</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rosinver/"><FaLinkedin /></a>
              <a href="https://github.com/alejvz"><FaGithub /></a>
              <a href="https://twitter.com/alekjvz"><FaTwitter /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
