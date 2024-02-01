import React, { useState, useEffect } from "react";
import Courses from "../components/Courses-section/Courses";
import Header from "../components/Header/Header";
import "./coursesScreen.css";
import heroImg from "../assests/images/hero-img1.png";
import Footer from "../components/Footer/Footer";
import CoursesCardTwo from "../components/CoursesCardTwo/CoursesCardTwo";
import { Courses as coursesData } from "../dummyData";
import { Select, MenuItem, OutlinedInput, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';

const CoursesScreen = () => {
  const sortedCourses = coursesData.slice().sort((a, b) => a.id - b.id);


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryBegining, setCategoryBegining] = useState([]);
  const [categoryMiddle, setCategoryMiddle] = useState([]);
  const [categoryAdvance, setCategoryAdvance] = useState([]);

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

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedCategories(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const categories = [
    {
      id: 1,
      name: "Başlangıç",
      title: 'A'
    },
    {
      id: 2,
      name: "Orta Seviye",
      title: 'B'
    },
    {
      id: 3,
      name: "İleriye Seviye Uzmanlık Alanı",
      title: 'C'
    }

  ]

  const handleChange = (event) => {
  };

  const filterClicked = () => {

  }

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
                  <div className="courses_search_container d-flex flex-row align-items-center justify-content-start">
                    <form action="#" id="courses_search_form" className="courses_search_form d-flex flex-row align-items-center justify-content-start">
                      <input type="search" className="courses_search_input" placeholder="Kursları arayın" required="required" />

                      <FormControl sx={{ m: 1, width: 270 }}>
                        <InputLabel style={{alignItems:'center'}}id="demo-multiple-checkbox-label">Seçiniz...</InputLabel>
                        <Select style={{height:47}}
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={selectedCategories}
                          onChange={handleCategoryChange}
                          input={<OutlinedInput label="Kategori" />}
                          renderValue={(selected) => (
                            selected.map((categoryId) => {
                              const selectedCategory = categories.find((category) => category.id === categoryId);
                              return selectedCategory ? selectedCategory.name : '';
                            }).join(', ')
                          )}>
                          {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                              <Checkbox checked={selectedCategories.indexOf(category.id) > -1} />
                              <ListItemText primary={category.name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <button
                        type="submit"
                        className="courses_search_button ml-5"
                        style={{ backgroundColor: '#17bf9e' }}
                        onClick={filterClicked}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#208a75';
                          e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#1b9980';
                          e.target.style.color = '#fff';
                        }}
                      >
                        Ara
                      </button>
                    </form>
                    {window.innerWidth > 1100 ?
                      (
                        <div className="rightInfo d-flex flex-row align-items-center justify-content-start" style={{ width: '27%', fontSize: '110%', marginLeft: '1%' }}>
                          <span className="courseCount mr-3" style={{ width: '40%', color: '#333946' }}>
                            <i className="fa fa-book" style={{ marginRight: '5%', color: '#333946' }}></i>
                            Kurs: 241
                          </span>
                          <span className="categoryCount mr-3" style={{ width: '40%', color: '#333946' }}>
                            <i className="fa fa-bars" style={{ marginRight: '5%', color: '#333946' }}></i>
                            Kategori: 36
                          </span>
                        </div>
                      ) : null}

                  </div>
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
      </html >

    </>
  );
};

export default CoursesScreen;
