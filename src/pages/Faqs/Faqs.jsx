import React, { useState } from "react";
import "../../css/bootstrap-icons.css"
import "../../css/bootstrap.min.css"
import "../../css/templatemo-topic-listing.css"
import FaqCompanent from "../../components/FaqCompanent/FaqCompanent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./faqs.css"

const Faqs = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <div>
            <Header></Header>
            <section className="faq-section section-padding" id="section_4">
                <div className="container">
                    <div className="row">
                        <div style={{color:'#323736', alignItems:'center',justifyContent:'center',display:'flex',marginBottom:'5%'}}>
                            <h2 
                            className="mb-4"
                            style={{color:'#323736'}}
                            >Sık Sorulan Sorular</h2>
                        </div>

                        <div className="clearfix"></div>

                        <div className="col-lg-5 col-12">
                            <img
                                style={{ borderRadius: '5%' }}
                                src="https://blog.odeaweb.com/wp-content/uploads/2022/03/Websiteye-Sikca-Sorulan-Sorular-Nasil-Eklenir-scaled.jpg"
                                className="img-fluid" alt="FAQs" />
                        </div>

                        <div className="col-lg-6 col-12 m-auto">
                            <div className="accordion" id="accordionExample">

                                <FaqCompanent id="1" title="Derslere nasıl kaydolunur?"></FaqCompanent>
                                <FaqCompanent id="2" title="Sınavları çözmeden bir sonraki video'ya geçemez miyim ?"></FaqCompanent>
                                <FaqCompanent id="3" title="Derslere nasıl kaydolunur?"></FaqCompanent>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>

    )
}

export default Faqs;