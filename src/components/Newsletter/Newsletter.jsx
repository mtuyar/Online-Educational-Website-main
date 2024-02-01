import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Bizden haberdar olmak için abone olun</h2>
            <div className="subscribe">
              <input className="inputAbone" type="text" placeholder="Email" />
              <button
                className="btn"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#208a75';
                  e.target.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#17bf9e';
                  e.target.style.color = '#fff';
                }}
              >Abone Ol</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
