import React from "react";
import "./free-course.css";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course" style={{ marginRight: 30 }}>
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button
          className="btn free__btn"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#208a75';
            e.target.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#17bf9e';
            e.target.style.color = '#fff';
          }}
        >Ücretsiz</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}bin
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
