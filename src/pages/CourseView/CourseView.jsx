import React from "react";
import './courseView.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../css/course_responsive.css"
import "../../css/course.css"
import heroImg from "../../assests/images/hero-img1.png";
import 'font-awesome/css/font-awesome.min.css'; // Bu satırı ekleyin
import CourseTab from "../../components/CourseTab/CourseTab";
import { useNavigate } from "react-router-dom";


const CourseView = () => {
    const navigate = useNavigate();

    const videoWatchClick = () => {
        navigate("/course-watch");
    }
    return (
        <body className="body">
            <div className="div">
                <Header></Header>
                <div className="div" style={{ marginTop: '3%' }}>
                    <div className="div course div">
                        <div className="div container div">
                            <div className="div row div">

                                <div className="div col-lg-8">

                                    <div className="div course_container div">
                                        <div
                                            className="div course_title d-flex align-items-center"
                                            style={{ justifyContent: 'space-between' }}>
                                            <div className="div course_title">
                                                Gramer Dersleri
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => {
                                                    videoWatchClick();
                                                }}
                                                style={{ width: '30%', borderRadius: '0%', backgroundColor: '#ecbf4b' }}
                                                onMouseOver={(e) => {
                                                    e.target.style.backgroundColor = '#ecbf4b';
                                                    e.target.style.color = '#FFF';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.backgroundColor = '#ecbf4b';
                                                    e.target.style.color = '#FFF';
                                                }}>
                                                <span className="categoryCount mr-3"
                                                    style={{ width: '40%', fontSize: '20px', color: 'white', backgroundColor: '#ecbf4b' }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.backgroundColor = '#ecbf4b';
                                                        e.target.style.color = '#FFF';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.backgroundColor = '#ecbf4b';
                                                        e.target.style.color = '#FFF';
                                                    }}>

                                                    <i className="fa fa-play" style={{ marginRight: '9%', color: 'white' }}>
                                                    </i>
                                                    İzlemeye Başla
                                                </span>
                                            </button>
                                        </div>

                                        <div className="div course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                            <div className="div course_info_item">
                                                <div className="div course_info_title">Öğretmen:</div>
                                                <div className="div course_info_text"><a className="a" href="#">Reyyan Koçer</a></div>
                                            </div>

                                            <div className="div course_info_item">
                                                <div className="div course_info_title">Değerlendirmeler:</div>
                                                <div className="div rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
                                            </div>

                                            <div className="div course_info_item">
                                                <div className="div course_info_title">Kategoriler:</div>
                                                <div className="div course_info_text"><a className="a" href="#">Başlangıç Seviyesi, Orta Seviye</a></div>
                                            </div>

                                        </div>

                                        <div className="div course_image"><img src={heroImg} alt="" /></div>

                                        <CourseTab></CourseTab>

                                    </div>
                                </div>

                                <div className="div col-lg-4">
                                    <div className="div sidebarTwo">

                                        <div className="div sidebar_section">
                                            <div className="div sidebar_section_title">Kurs Özellikleri</div>
                                            <div className="div sidebar_feature">
                                                <div className="div course_price">180₺</div>

                                                <div className="div feature_list">

                                                    <div className="div feature d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div feature_title"><i className="fa fa-clock-o" aria-hidden="true"></i><span>Süre:</span></div>
                                                        <div className="div feature_text ml-auto">2 Hafta</div>
                                                    </div>

                                                    <div className="div feature d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div feature_title"><i className="fa fa-file-text-o" aria-hidden="true"></i><span>Dersler:</span></div>
                                                        <div className="div feature_text ml-auto">10</div>
                                                    </div>

                                                    <div className="div feature d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div feature_title"><i className="fa fa-question-circle-o" aria-hidden="true"></i><span>Soru Cevap:</span></div>
                                                        <div className="div feature_text ml-auto">Evet</div>
                                                    </div>

                                                    <div className="div feature d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div feature_title"><i className="fa fa-list-alt" aria-hidden="true"></i><span>Sertifika:</span></div>
                                                        <div className="div feature_text ml-auto">Evet</div>
                                                    </div>

                                                    <div className="div feature d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div feature_title"><i className="fa fa-users" aria-hidden="true"></i><span>Katılımcı:</span></div>
                                                        <div className="div feature_text ml-auto">35</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="div sidebar_section">
                                            <div className="div sidebar_section_title">Öğretmen</div>
                                            <div className="div sidebar_teacher">
                                                <div className="div teacher_title_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="div teacher_image" style={{ position: 'relative' }}>
                                                        <img
                                                            src={heroImg}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                                            alt="" /></div>
                                                    <div className="div teacher_title">
                                                        <div className="div teacher_name"><a className="a" href="#">Reyyan Koçer</a></div>
                                                        <div className="div teacher_position">Anadil Arapçça & Doktor</div>
                                                    </div>
                                                </div>
                                                <div className="div teacher_meta_container">
                                                    <div className="div teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div teacher_meta_title">Ortalama Değerlendirme:</div>
                                                        <div className="div teacher_meta_text ml-auto"><span>4.7</span><i className="fa fa-star" aria-hidden="true"></i></div>
                                                    </div>
                                                    <div className="div teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div teacher_meta_title">Yorumlar:</div>
                                                        <div className="div teacher_meta_text ml-auto"><span>1.4 bin</span><i className="fa fa-comment" aria-hidden="true"></i></div>
                                                    </div>
                                                    <div className="div teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                        <div className="div teacher_meta_title">Katılımcı:</div>
                                                        <div className="div teacher_meta_text ml-auto"><span>600</span><i className="fa fa-user" aria-hidden="true"></i></div>
                                                    </div>
                                                </div>
                                                <div className="div teacher_info">
                                                    <p className="p"> Merhaba ben Reyyan Arapça öğretmeniyim. Arapça dilini öğretme konusundaki tutkum ve deneyimimle bilgi ve
                                                        becerilerinizi geliştirmenize yardımcı olmaktan mutluluk duyarım.
                                                        Eğlenceli ve etkili öğretim yöntemleriyle dil becerilerinizi güçlendirmeyi amaçlıyorum.
                                                        Sizlerle birlikte çalışmayı ve Arapça diline olan sevgimi paylaşmayı dört gözle bekliyorum!.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="div sidebar_section">
                                            <div className="div sidebar_section_title">Son Eklenen Kurslar</div>
                                            <div className="div sidebar_latest">

                                                <div className="div latest d-flex flex-row align-items-start justify-content-start">
                                                    <div className="div latest_image"><div><img src={heroImg} alt="" /></div></div>
                                                    <div className="div latest_content">
                                                        <div className="div latest_title"><a className="a" href="course.html">Belegat Dersleri</a></div>
                                                        <div className="div latest_price">Ücretsiz</div>
                                                    </div>
                                                </div>

                                                <div className="div latest d-flex flex-row align-items-start justify-content-start">
                                                    <div className="div latest_image"><div><img src={heroImg} alt="" /></div></div>
                                                    <div className="div latest_content">
                                                        <div className="div latest_title"><a className="a" href="course.html">Okuma Dersleri</a></div>
                                                        <div className="div latest_price">170₺</div>
                                                    </div>
                                                </div>

                                                <div className="div latest d-flex flex-row align-items-start justify-content-start">
                                                    <div className="div latest_image"><div><img src={heroImg} alt="" /></div></div>
                                                    <div className="div latest_content">
                                                        <div className="div latest_title"><a className="a" href="course.html">Yazma Dersleri</a></div>
                                                        <div className="div latest_price">220₺</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        </body>
    )
}

export default CourseView;