import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-end">
          <Col lg="6" md="6" >
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Her zaman <br /> İstediğiniz Ortamda <br /> Seçkin Hocalarla
              </h2>
              <p className="mb-5 hero_content">
                Online Arapça öğrenebileceğini harika bir platform !
                Sizde kısa bir süre içerisinde arapçanızı geliştirmek istiyorsanız bu site tam size göre...
              </p>
            </div>
            <div className="arrowItems">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} style={{marginRight:10, color:'#17bf9e'}}/>
                Başlangıç Seviyesi
              </h5>
              <h5>
                <FontAwesomeIcon icon={faArrowRight} style={{marginRight:10, color:'#17bf9e'}}/>
                 Orta Seviye
              </h5>
              <h5>
                <FontAwesomeIcon icon={faArrowRight} style={{marginRight:10, color:'#17bf9e'}}/>
                 İleri Seviye - Uzmanlık Alanı
              </h5>
            </div>

          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
