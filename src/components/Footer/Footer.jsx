import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Anasayfa",
    url: "#",
  },
  {
    display: "Hakkımızda",
    url: "#",
  },

  {
    display: "Kurslar",
    url: "#",
  },

  {
    display: "Ders Notları",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Gizlilik Politikası",
    url: "#",
  },
  {
    display: "Üyelik",
    url: "#",
  },

  {
    display: "Satın Alma Rehberi",
    url: "#",
  },

  {
    display: "Kullanım Şartları",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-slideshow-3-line icon-styling"></i> Arabic Academy.
            </h2>

            <div className="follows">
              <p className="mb-0">Bizi sosyal medyada takip et !</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line iconSocial-styling"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="www.facebook.com">
                  <i class="ri-instagram-line iconSocial-styling"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line iconSocial-styling"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line iconSocial-styling"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Keşfet</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Bilgi</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col>
            <h6 className="fw-bold">Bize ulaşabilirsiniz.</h6>
            <p >Adres: Selçuk Üniversitesi Arap Dili Edebiyatı /
              Konya-Selçuklu</p>
            <p > Telefon: +0542 316 3166 </p>
            <p>Email: arabicacademy@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
