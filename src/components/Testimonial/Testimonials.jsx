import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";


const img = "https://assets-global.website-files.com/61a05ff14c09ecacc06eec05/61f5868b789816331ac6af01_5_Benefits_of_Online_Education.png";
const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  const screenWidth = window.innerWidth;
  return (
    <section>
      <Container>
        <Col lg="10" md="12" className="m-auto">
          <div style={{fontWeight:'bolder',justifyContent:'center',display:'flex',marginBottom:'7%'}}>
            <h2>Öğrencilerin Dönüşleri</h2>
          </div>
          <div className="testimonial__wrapper d-flex justify-content-between align-items-center container_testimonials">
          {screenWidth > 768 ?
              <div className="testimonial__img w-50" style={{ marginRight: 50 }}>
                <img src={img} alt=""  className="w-100" style={{ borderRadius: 20 }} />
              </div>
              : null}
            <div className="testimonial__content w-50">
              <Slider {...settings} className="slider">
                  <div>
                    <div className="testimonial_moving">
                      <h6 className="mb-3 fw-bold">
                        Eğlenceli Kurs Materyalleri
                      </h6>
                      <p>
                        Ders anlatımı yaparken hocalar çok güzel kaynaklar kullanıyor. Ayrıca kullanılan materyaller öğrenimi eğlenceli
                        hale getiriyor.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Reyyan Koçer</h6>
                        <p>İstanbul, Fatih</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="testimonial_moving">
                      <h6 className="mb-3 fw-bold">
                        Çok güzel anlatım...
                      </h6>
                      <p>
                        Hocaların akıcı bir dili ve öğretici anlatım teknikleri var. Çok faydalı bir site. İncelemenizi tavsiye ederim.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Mehmet Taha</h6>
                        <p>Meram, Konya</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="testimonial_moving">
                      <h6 className="mb-3 fw-bold">
                        Samimi Hocalar
                      </h6>
                      <p>
                        Hocalar dersi çok samimi anlatıyor. Öğrenciler ile kolaylıkla bağ kurabiliyorlar. Herkese tavsiye ederim.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ali Ulvi</h6>
                        <p>Medine</p>
                      </div>
                    </div>
                  </div>

              </Slider>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Testimonials;
