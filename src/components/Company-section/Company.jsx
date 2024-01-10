import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";


const Company = () => {

  const handleClick = () => {
    // Tıklama işlemlerini burada işleyebilirsiniz
    alert('Hayırlısı...');
  };

  return (
    <section>
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Row style={{ justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>

          <Col lg="2" md="3" sm="4" xs="6" onClick={handleClick}>
            <h3 className="company-col d-flex align-items-center gap-1">
              <i class="ri-facebook-fill" ></i> Facebook
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6" onClick={handleClick}>
            <h3 className="company-col d-flex align-items-center gap-1">
              <i class="ri-instagram-fill" ></i> Instagram
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6" onClick={handleClick}>
            <h3 className="company-col d-flex align-items-center gap-1">
              <i class="ri-youtube-fill" ></i> Youtube
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6" onClick={handleClick}>
            <h3 className="company-col d-flex align-items-center gap-1">
              <i class="ri-whatsapp-fill" ></i> WhatsApp
            </h3>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Company;
