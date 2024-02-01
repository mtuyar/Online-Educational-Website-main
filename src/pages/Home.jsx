import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <Courses header={"Popüler Kurslarımız"} content={"Birbirinden farklı eğitimler ile arapça öğrenebileceğin harika bir platform! Sizde kısa bir süre içerisinde arapçanızı geliştirmek istiyorsanız bu site tam size göre.."} />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer></Footer>
    </Fragment>
  );
};



export default Home;
