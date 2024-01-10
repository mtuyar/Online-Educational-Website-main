import React, { Fragment } from "react";
import Courses from "../components/Courses-section/Courses";
import Header from "../components/Header/Header";
import "./coursesScreen.css";
import heroImg from "../assests/images/hero-img1.png";
import Footer from "../components/Footer/Footer";
import CoursesCardTwo from "../components/CoursesCardTwo/CoursesCardTwo";
import { Courses as coursesData } from "../dummyData";

const CoursesScreen = () => {
  const sortedCourses = coursesData.slice().sort((a, b) => a.id - b.id);
  const categoryBegining = [];
  const categoryMiddle = [];
  const categoryAdvance = [];

  sortedCourses.forEach(course => {
    const category = course.category;

    if (category === 'A') {
      categoryBegining.push(course);
    } else if (category === 'B') {
      categoryMiddle.push(course);
    } else if (category === 'C') {
      categoryAdvance.push(course);
    }
  });

  return (
    <>
      <html lang="tr">
        <Header></Header>
        <body>
          <div className="container-fluid pt-5">
            <div className="container">

              <div className="row">
                <div className="text-center pb-2" style={{ marginTop: '4%', color: '#1b9980' }}>
                  <p className="section-title px-5" style={{ alignItems: 'center', fontSize: 35, color: '#1b9980' }}>
                    <span className="px-3" style={{ color: '#1b9980' }}>Kurslar</span>
                  </p>
                  <h1 className="mb-4" style={{ color: '#1b9980' }}>Başlangıç Seviyesi</h1>
                </div>

                {categoryBegining.map(course => (
                  <CoursesCardTwo
                    key={course.id} // Eğer her öğenin benzersiz bir "id" özelliği varsa, bu özelliği kullanmak iyi bir uygulama yöntemidir.
                    title={course.title}
                    content={course.content}
                    ageRange={course.ageRange}
                    fee={course.fee}
                    time={course.time}
                    document={course.document}
                  />
                ))}


                <div className="text-center pb-2" style={{ marginTop: '4%', color: '#1b9980' }}>
                  <h1 className="mb-4" style={{ color: '#1b9980' }}>Orta Seviye</h1>
                </div>


                {categoryMiddle.map(course => (
                  <CoursesCardTwo
                    key={course.id} // Eğer her öğenin benzersiz bir "id" özelliği varsa, bu özelliği kullanmak iyi bir uygulama yöntemidir.
                    title={course.title}
                    content={course.content}
                    ageRange={course.ageRange}
                    fee={course.fee}
                    time={course.time}
                    document={course.document}
                  />
                ))}



                <div className="text-center pb-2" style={{ marginTop: '4%', color: '#1b9980' }}>
                  <h1 className="mb-4" style={{ color: '#1b9980' }}>İleri Seviye - Uzmanlık Alanı -</h1>
                </div>

                {categoryAdvance.map(course => (
                  <CoursesCardTwo
                    key={course.id} // Eğer her öğenin benzersiz bir "id" özelliği varsa, bu özelliği kullanmak iyi bir uygulama yöntemidir.
                    title={course.title}
                    content={course.content}
                    ageRange={course.ageRange}
                    fee={course.fee}
                    time={course.time}
                    document={course.document}
                  />
                ))}

              </div>
            </div>
            <Footer></Footer>
          </div>





          <a href="#" className="btn btn-primary p-3 back-to-top"
          ><i className="fa fa-angle-double-up"></i
          ></a>

          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
          <script src="lib/easing/easing.min.js"></script>
          <script src="lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="lib/isotope/isotope.pkgd.min.js"></script>
          <script src="lib/lightbox/js/lightbox.min.js"></script>

          <script src="mail/jqBootstrapValidation.min.js"></script>
          <script src="mail/contact.js"></script>

          <script src="js/main.js"></script>
        </body>
      </html>

    </>
  );
};

export default CoursesScreen;
