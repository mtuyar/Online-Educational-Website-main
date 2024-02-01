import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: "01",
    title: "YDS Eğitimi",
    lesson: 8,
    students: 12.5,
    rating: 5.1,
    imgUrl: "https://www.arabacademy.com/wp-content/uploads/2020/10/arabic-adults-bg.jpg",
  },
  {
    id: "02",
    title: "A'dan Z'ye Arapça Öğrenimi",
    lesson: 12,
    students: 2.8,
    rating: 5.4,
    imgUrl:  "https://s3.envato.com/files/361727964/268_E39A0819.jpg",
  },
  {
    id: "03",
    title: "Belagat Dersleri",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.shutterstock.com/image-photo/young-woman-teaching-arabic-language-600nw-1548987368.jpg",
  },
  {
    id: "04",
    title: "Metin Çözümleme",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.arabacademy.com/wp-content/uploads/2020/10/arabic-adults-bg.jpg",
  },
  {
    id: "05",
    title: "Basın Arapçası",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://s3.envato.com/files/361727964/268_E39A0819.jpg",
  },
  {
    id: "06",
    title: "Okuma",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.shutterstock.com/image-photo/young-woman-teaching-arabic-language-600nw-1548987368.jpg",
  },
  {
    id: "07",
    title: "Yazma",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.arabacademy.com/wp-content/uploads/2020/10/arabic-adults-bg.jpg",
  },
  {
    id: "08",
    title: "Şiir Okuma ve Çözümleme",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://s3.envato.com/files/361727964/268_E39A0819.jpg",
  },
];

const Courses = (props) => {
  const navigate = useNavigate();
  const breakPoints = [
    { itemsToShow: 4 }
  ];
  const onClickSeeAll = () => {
    navigate("/courses-section");
    window.scrollTo(0, 0);
  }

  return (
    <section>
      <Container className={`containerClass ${props.addMargin ? 'containerClassTwo' : ''}`}>
        <Row className="flex-wrap">
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>{props.header}</h2>
                <p>
                  {props.content}
                </p>
              </div>
              <div className="w-50 text-end">
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
                  onClick={onClickSeeAll}>Hepsini Gör</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="containerr">
          {coursesData.map((item) => (
            <CourseCard key={item.id} item={item} />

          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;

