import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "./choose-us.css";

import ReactPlayer from "react-player";
const chooseImg = "https://yonetim.citius.technology//haber/haber324/egitim.png";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row style={{alignItems:'center'}}>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Neden Biz ?</h2>
              <p>
              Online Arapça öğrenebileceğini harika bir platform ! Sizde kısa bir süre
                içerisinde arapçanızı geliştirmek istiyorsanız bu site tam size göre...
                Online Arapça öğrenebileceğini harika bir platform ! Sizde kısa bir süre
                içerisinde arapçanızı geliştirmek istiyorsanız bu site tam size göre...
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=d_eAgadUr2E"
                  controls
                  playing={false}
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
