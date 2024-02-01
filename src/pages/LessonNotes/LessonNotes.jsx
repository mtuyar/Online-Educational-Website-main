import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import imageLastShare from "../../assests/images/seo.png"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../components/Footer/Footer";
import "./lessonNotes.css"

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/1000/600//",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/1000/600/",
    }
];


const LessonNotes = () => {

    return (
        <html lang="tr">
            <Header></Header>
            <body>
                <div className="container py-5">
                    <div className="row pt-5">
                        <div className="col-lg-8">
                            <div className="d-flex flex-column text-left mb-3">
                                <h2 style={{ marginBottom: 60, fontSize: 55, fontFamily: 'Slab Serif', color: '#333946' }}>Ders Notları</h2>
                            </div>
                            <div style={{ marginBottom: '4%', marginRight: '5%' }}>

                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', padding: '10px', justifyContent: 'space-between' }}>
                                    <h2
                                        className="mb-4"
                                        style={{ color: '#333946', fontSize: '21px', fontFamily: "sans-serif", margin: 0, textDecoration: 'none' }}
                                    >Belagat Dersi Notlar PDF</h2>
                                    <button
                                        className="btn" style={{ marginLeft: 40, width: '20%', justifyContent: 'center', display: 'flex' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#208a75';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#17bf9e';
                                            e.target.style.color = '#fff';
                                        }}
                                    >İndir</button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', padding: '10px', justifyContent: 'space-between' }}>
                                    <h2
                                        className="mb-4"
                                        style={{ color: '#333946', fontSize: '21px', fontFamily: "sans-serif", margin: 0, textDecoration: 'none' }}
                                    >Okuma Dersi Notlar PDF</h2>
                                    <button
                                        className="btn" style={{ marginLeft: 40, width: '20%', justifyContent: 'center', display: 'flex' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#208a75';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#17bf9e';
                                            e.target.style.color = '#fff';
                                        }}
                                    >İndir</button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', padding: '10px', justifyContent: 'space-between' }}>
                                    <h2
                                        className="mb-4"
                                        style={{ color: '#333946', fontSize: '21px', fontFamily: "sans-serif", margin: 0, textDecoration: 'none' }}
                                    >Dinleme Dersi Notlar PDF</h2>
                                    <button
                                        className="btn" style={{ marginLeft: 40, width: '20%', justifyContent: 'center', display: 'flex' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#208a75';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#17bf9e';
                                            e.target.style.color = '#fff';
                                        }}
                                    >İndir</button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', padding: '10px', justifyContent: 'space-between' }}>
                                    <h2
                                        className="mb-4"
                                        style={{ color: '#333946', fontSize: '21px', fontFamily: "sans-serif", margin: 0, textDecoration: 'none' }}
                                    >YDS Dersi Notlar PDF</h2>
                                    <button
                                        className="btn" style={{ marginLeft: 40, width: '20%', justifyContent: 'center', display: 'flex' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#208a75';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#17bf9e';
                                            e.target.style.color = '#fff';
                                        }}
                                    >İndir</button>
                                </div>

                            </div>

                            <div style={{ marginRight: '5%' }}>
                                <ImageGallery items={images} />;
                            </div>

                        </div>

                        <div className="col-lg-4 mt-5 mt-lg-0">

                            <div className="mb-3">
                                <h2 className="mb-4" style={{ color: '#333946', fontFamily: "sans-serif", textDecoration: 'none' }}
                                >Ders Notları</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a className="lessonRigtPanel" href="" style={{ fontFamily: "sans-serif", textDecoration: 'none' }}>Yazma</a>
                                        <span
                                            className="lessonRigtPanelBox"
                                        >3</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a className="lessonRigtPanel" href="" style={{ fontFamily: "sans-serif", textDecoration: 'none' }}>Okuma</a>
                                        <span
                                            className="lessonRigtPanelBox"
                                        >2</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center px-0"
                                    >
                                        <a className="lessonRigtPanel" href="" style={{ fontFamily: "sans-serif", textDecoration: 'none' }}>Dinleme</a>
                                        <span
                                            className="lessonRigtPanelBox"
                                        >13</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a className="lessonRigtPanel" href="" style={{ fontFamily: "'Your Cool Font', sans-serif", textDecoration: 'none' }}>Belegat</a>
                                        <span
                                            className="lessonRigtPanelBox"
                                        >5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a className="lessonRigtPanel" href="" style={{ fontFamily: "'Your Cool Font', sans-serif", textDecoration: 'none' }}>YDS</a>
                                        <span
                                            className="lessonRigtPanelBox"
                                        >4</span>
                                    </li>
                                </ul>
                            </div>


                            <div className="mb-5">
                                <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                            </div>

                            <div className="mb-5">
                                <h2
                                    className="mb-4"
                                    style={{ color: '#333946', fontFamily: "'Your Cool Font', sans-serif", textDecoration: 'none' }}
                                >Son Paylaşılan Notlar</h2>
                                <div
                                    className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3"
                                >
                                    <img
                                        className="img-fluid"
                                        src={imageLastShare}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                    <div className="pl-3">
                                        <h5
                                            className="" style={{ color: '#333946' }}>Muzari ve Mazi Filller
                                        </h5>

                                        <div
                                            className="d-flex">
                                            <small className="mr-3"><i
                                                className="fa fa-user"
                                                style={{ color: '#17bf9e' }}
                                            ></i> Ali Çakmak
                                            </small>
                                            <small
                                                className="mr-3">
                                                <i
                                                    className="fa fa-book "
                                                    style={{ color: '#17bf9e' }}
                                                >
                                                </i> Belegat
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3"
                                >
                                    <img
                                        className="img-fluid"
                                        src={imageLastShare}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                    <div className="pl-3">
                                        <h5 className="" style={{ color: '#333946' }}>Fiil Çekimleri</h5>
                                        <div className="d-flex">
                                            <small className="mr-3"
                                            ><i className="fa fa-user"></i> Reyyan Koçer</small
                                            >
                                            <small className="mr-3"
                                            ><i className="fa fa-book"></i> Okuma</small
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3"
                                >
                                    <img
                                        className="img-fluid"
                                        src={imageLastShare}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                    <div className="pl-3">
                                        <h5 className="" style={{color:'#333946'}}>Gelecek Zaman İfadeleri</h5>
                                        <div className="d-flex">
                                            <small className="mr-3"
                                            ><i className="fa fa-user"></i> Eren Akkuş</small
                                            >
                                            <small className="mr-3"
                                            ><i className="fa fa-book"></i> İrab</small
                                            >

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <img src="{imageLastShare}" alt="" className="img-fluid rounded" />
                            </div>

                            <div className="mb-5">
                                <h2 className="mb-4"
                                    style={{ color: '#333946' }}
                                >Başlıklar
                                </h2>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href="" className="btn m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >Konuşma</a>
                                    <a href="" className="btn m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >YDS</a>
                                    <a href="" className="btn m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >Belegat</a>
                                    <a href="" className="btn m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >Yazma</a>
                                    <a href="" className="btn m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >Metin Çözümleme</a>
                                    <a href="" className="btn btn-outline-primary m-1"
                                        style={{ color: '#11856d', borderColor: '#11856d' }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#155e4d';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#11856d';
                                        }}
                                    >Gramer</a>
                                </div>
                            </div>

                            <div className="mb-5">
                                <img src="img/blog-3.jpg" alt="" className="img-fluid rounded" />
                            </div>

                            <div style={{ color: '#333946' }}>
                                <h2 className="mb-4" style={{ color: '#333946' }}>Köşe Notu</h2>
                                Başarı, herkese göre farklı ve göreceli bir kavramdır. Başarılı olabilmek için zengin olmamıza gerek yoktur.
                                Başarı tamamen çalışma odaklı bir sonuca dayanır. eğer başarılı olmak istiyorsak kişisel gelişim sözleri, kendimize ilke edinmeliyiz.
                            </div>
                        </div>
                    </div>
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
            <Footer></Footer>
        </html >
    )
}


export default LessonNotes;