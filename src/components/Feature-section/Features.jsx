import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Hızlı Öğrenme",
    desc: "Kursların özenle hazırlanmış özgün içerikleri, ödev takibi ve birebir ilgi ile en hızlı şekilde öğrenebileceksiniz.",
    icon: "ri-draft-line",
  },

  {
    title: "Birebir Yardım",
    desc: "Alanında uzman hocalardan birber destek alabilirsiniz. Takıldığınız, zorlandığınız zamanlarda imdadınıza yetişecek muallimler sizleri bekliyor.",
    icon: "ri-discuss-line",
  },

  {
    title: "Katılım Belgesi",
    desc: "Kayıt olduğunuz kursun derslerini tamamladıktan sonra yapılan sınavda başarılı olmanız durumununda katılım belgesi almaya hak kazanırsınız. 3 Sınav hakkınız bulunmaktadır.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
