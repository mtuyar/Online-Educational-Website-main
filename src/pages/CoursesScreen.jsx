import React, { Fragment } from "react";
import Courses from "../components/Courses-section/Courses";
import Header from "../components/Header/Header";

const CoursesScreen = () => {
  return (
    <Fragment>
      <Courses addMargin={true} header={"Başlangıç Seviye Kurslar"} />
    </Fragment>
  );
};

export default CoursesScreen;
