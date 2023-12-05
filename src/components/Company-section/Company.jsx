import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Row style={{justifyContent:'center'}}>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-vimeo-line"></i> WhatsApp
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-facebook-line" ></i> Facebook
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-youtube-fill"></i> Youtube
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-instagram-line"></i> Instragram
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
