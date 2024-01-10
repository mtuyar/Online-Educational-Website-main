import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {

    return (
        <div>
            <Header></Header>

            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta content="Free HTML Templates" name="keywords" />
                    <meta content="Free HTML Templates" name="description" />

                    <link href="img/favicon.ico" rel="icon" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                        rel="stylesheet"
                    />

                    <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />

                    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

                    <link href="css/style.css" rel="stylesheet" />
                </head>

                <body style={{ marginTop: '4%' }}>
                    <div className="container-fluid bg-light position-relative shadow">
                        <nav
                            className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5"
                        >
                        </nav>
                    </div>



                    <div className="container-fluid pt-5">
                        <div className="text-center pb-2" style={{ marginBottom: '4%' }}>
                            <p className="section-title">
                                <span style={{ fontSize: '40px' }}>Hakkımızda</span>
                            </p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mb-5">
                                    <div className="contact-form">
                                        <div id="success"></div>
                                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                            <div className="control-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Ad ve Soyad"
                                                    required="required"
                                                    data-validation-required-message="Please enter your name"
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    required="required"
                                                    style={{ color: '#17bf9e' }}
                                                    data-validation-required-message="Please enter your email"
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Konu"
                                                    required="required"
                                                    data-validation-required-message="Please enter a subject"
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group">
                                                <textarea
                                                    className="form-control"
                                                    rows="6"
                                                    id="message"
                                                    placeholder="Mesajınız"
                                                    required="required"
                                                    data-validation-required-message="Please enter your message"
                                                ></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn py-2 px-4"
                                                    type="submit"
                                                    id="sendMessageButton"
                                                >
                                                    Gönder
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5 mb-5">
                                    <p>
                                        Online Arapça öğrenebileceğini harika bir platform !
                                        Sizde kısa bir süre içerisinde arapçanızı geliştirmek istiyorsanız bu site tam size göre...
                                    </p>
                                    <div className="d-flex">
                                        <i
                                            className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#17bf9e', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Adres</h5>
                                            <p>123 Street, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i
                                            className="fa fa-envelope d-inline-flex align-items-center justify-content-center  rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#17bf9e', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Email</h5>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i
                                            className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#17bf9e', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Telefon</h5>
                                            <p>+90 530 345 6890</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i
                                            className="far fa-clock d-inline-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#17bf9e', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Ders Saatleri</h5>
                                            <strong>Pazartesi - Pazar:</strong>
                                            <p className="m-0">08:00 AM - 05:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




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


            <Footer></Footer>
        </div>
    )

}

export default AboutUs;