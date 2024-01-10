import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
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
    imgUrl: "https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/e/0/e0814526963e.jpeg",
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
    imgUrl: "https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/e/0/e0814526963e.jpeg",
  },
  {
    id: "06",
    title: "Okuma",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.shutterstock.com/image-photo/young-woman-teaching-arabic-language-600nw-1548987368.jpg",
  },
];


const FreeCourse = (props) => {
  return (
    <section>
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Ücretsiz Deneyebileceğiniz Kurslar</h2>
        </Col>
      </Container>
      <Container>
        <div className="containerr">
          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FreeCourse;
