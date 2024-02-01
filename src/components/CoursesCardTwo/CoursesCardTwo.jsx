import React from "react";
import "../../pages/coursesScreen.css";
import heroImg from "../../assests/images/hero-img1.png";

const CoursesCardTwo = (props) => {

    return (
        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={heroImg} alt="" />
                <div className="card-body text-center">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">
                        {props.content}
                    </p>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Yaş Aralığı</strong>
                        </div>
                        <div className="col-6 py-1">{props.ageRange}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Toplam Süre</strong>
                        </div>
                        <div className="col-6 py-1">{props.time}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Döküman</strong>
                        </div>
                        <div className="col-6 py-1">{props.document}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Ücret</strong>
                        </div>
                        <div className="col-6 py-1">{props.fee}</div>
                    </div>
                </div>
                <a
                    href="/course-view" className="btn px-4 mx-auto mb-4"
                    style={{ backgroundColor: '#17bf9e', color: 'white' }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#155e4d';
                        e.target.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#17bf9e';
                        e.target.style.color = 'white';
                    }}
                >Kaydol</a>
            </div>
        </div>

    )
}


export default CoursesCardTwo;