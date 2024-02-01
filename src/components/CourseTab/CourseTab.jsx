import React, { useState } from "react";
import "./courseTab.css"
import heroImg from "../../assests/images/hero-img1.png";
import 'font-awesome/css/font-awesome.min.css'; // Bu satırı ekleyin
import { TabContent } from "reactstrap";
import { Identity } from "@mui/base";

const faqContent = [
    {
        title: "İrab konuları hangi seviyede veriliyor ?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir."
    },
    {
        title: "Bu dersi öğrenmem için ne kadar süre çalışmalıyım ?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir."
    },
    {
        title: "Kurs içerisinde testleri çözmem zorunlu mu ?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir."
    },
    {
        title: "Anlamadığım yer olursa hocaya özelden soru sorabilir miyim ?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir."
    },
    {
        title: "İrab konuları hangi seviyede veriliyor ?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir."
    }
]

const CurriculumContent = [
    {
        title: "Harekeler ve kullanım alanları",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
        lesson: "Ders 1",
        has_children: "has_children",
        subCurOne: {
            subCurTitle: "İsmi tafdil ve kullanım örnekleri",
            subDescription: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
            lesson: "Ders 1.1"
        },
        subCurTwo: {
            subCurTitle: "İsmi tafdil ve kullanım örnekleri",
            subDescription: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
            lesson: "Ders 1.2"
        },
        isSupCur: true
    },
    {
        title: "Harekelerin cümle içinde kullanımları.",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
        lesson: "Ders 2",
        has_children: "has_children",
        subCurOne: {
            subCurTitle: "İsmi tafdil ve kullanım örnekleri",
            subDescription: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
            lesson: "Ders 2.1"
        },
        subCurTwo: {
            subCurTitle: "İsmi tafdil ve kullanım örnekleri",
            subDescription: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
            lesson: "Ders 2.2"
        },
        isSupCur: true
    },
    {
        title: "İsmi tafdil ve kullanım örnekleri.",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
        lesson: "Ders 3",
        has_children: "",
        isSupCur: false
    },
    {
        title: "Harekeler ve kullanım alanları.",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
        lesson: "Ders 4",
        has_children: "",
        isSupCur: false
    },
    {
        title: "Harekeler ve kullanım alanları.?",
        description: "Kursumuzda detaylı bir şekilde her irab konusu örneklerle anlatılmıştır. Ayrıca konu paylaşılan ders notları ve görsel anlatımlarla zenginleştirilmiştir.",
        lesson: "Ders 5",
        has_children: "",
        isSupCur: false
    }
]


const FaqComp = (props) => {
    const [activeFaqs, setactiveFaqs] = useState([false, false, false, false, false]);

    const handleFaqsClick = (index) => {
        const newActiveFaqs = activeFaqs.map((faq, i) => {
            return i === index ? (activeFaqs[index] ? false : true) : false;
        })
        setactiveFaqs(newActiveFaqs);
    };

    return (
        <div
            className="div accordion_container"
            onClick={() => handleFaqsClick(props.index)}>
            <div className={`div accordionTwo d-flex flex-row align-items-center ${activeFaqs[props.index] ? 'active' : ''}`}>
                <div>{props.title}</div>
            </div>
            <div className={`div accordion_panel${activeFaqs[props.index] ? '-active' : ''}`}>
                <p className="p" style={{ padding: '2%', paddingLeft: '5%', fontSize: 'medium' }}>{props.content}</p>
            </div>
        </div>
    )
}


const SupCurriculumComp = () => {

    return (
        <li>
            <div className="div dropdown_item">
                <div className="div dropdown_item_title"><span>Ders 1.1:</span> Harekelerin cümle içinde kullanımları.</div>
                <div className="div dropdown_item_text">
                    <p className="p">Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                </div>
            </div>
        </li>
    )
}


const CurriculumComp = (props) => {
    const [activeCurriculums, setActiveCurriculums] = useState([false, false, false, false, false]);

    const handleCurriculumClick = (index) => {
        const newActiveCurriculum = activeCurriculums.map((cur, i) => {
            console.log("i: "+i)
            return i === index ? (activeCurriculums[index] ? false : true) : false;
        })
        console.log("activeCurriculums: "+activeCurriculums);
        setActiveCurriculums(newActiveCurriculum);
    };

    return (
        <>
            <li className={`${props.has_children} ${activeCurriculums[props.index] ? 'active' : ''}`}>
                <div
                    className="div dropdown_item"
                    onClick={() => handleCurriculumClick(props.index)}
                >
                    <div className="div dropdown_item_title"><span>{props.lesson}:</span> {props.title}</div>
                    <div className="div dropdown_item_text">
                        <p className="p">{props.content}</p>
                    </div>
                </div>
                {props.isSupCur ?
                    <ul>
                        <SupCurriculumComp></SupCurriculumComp>
                        <SupCurriculumComp></SupCurriculumComp>
                    </ul>
                    :
                    null
                }

            </li>
        </>
    )
}


const CourseTab = () => {
    const [activeTabs, setActiveTabs] = useState([true, false, false]);
    const tabs = ["Açıklama", "Müfredat", "Yorumlar"];

    const handleTabClick = (index) => {
        const newActiveTabs = activeTabs.map((tab, i) => (i === index ? true : false));
        setActiveTabs(newActiveTabs);
    };

    return (

        <div className="div course_tabs_container">

            <div className="div tabs d-flex flex-row align-items-center justify-content-start">
                {tabs.map((tabTitle, index) => (
                    <div
                        key={index}
                        className={`div tabTwo ${activeTabs[index] ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tabTitle}
                    </div>
                ))}
            </div>

            <div className="div tab_panels">

                <div
                    className={`div tab_panel ${activeTabs[0] ? 'active' : ''}`}>
                    <div className="div tab_panel_title">Gramer Dersleri</div>
                    <div className="div  div tab_panel_content">
                        <div className="div tab_panel_text">
                            <p className="p">Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.
                                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos.
                                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non mauris vitae erat consequat auctor eu in elit.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.
                                Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem Ipsn gravida nibh vel velit auctor aliquet.
                                Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className="div  div tab_panel_section">
                            <div className="div tab_panel_subtitle">Gereklilikler</div>
                            <ul className="ul tab_panel_bullets">
                                <li>Lorem Ipsn gravida nibh vel velit auctor aliquet. Class aptent taciti sociosquad litora torquent.</li>
                                <li>Cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a.</li>
                                <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</li>
                                <li>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</li>
                            </ul>
                        </div>
                        <div className="div tab_panel_section">
                            <div className="div tab_panel_subtitle">Hedef Kitle ?</div>
                            <div className="div tab_panel_text">
                                <p className="p">This course is intended for anyone interested in learning to master his or her own body.This course is aimed at beginners, so no previous experience with hand balancing skillts is necessary Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            </div>
                        </div>
                        <div className="div tab_panel_faq">
                            <div className="div tab_panel_title">Sık Sorulan Sorular</div>

                            <div className="div accordions">

                                <div className="div elements_accordions">
                                    {faqContent.map((faq, index) => (
                                        <FaqComp
                                            title={faq.title}
                                            content={faq.description}
                                            index={index}
                                        ></FaqComp>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`div tab_panel tab_panel_2 ${activeTabs[1] ? 'active' : ''}`}>
                    <div className="div tab_panel_content">
                        <div className="div tab_panel_title">Gramer Dersleri</div>
                        <div className="div tab_panel_content">
                            <div className="div tab_panel_text">
                                <p className="p">Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                            </div>

                            <ul className="ul dropdowns">

                                {CurriculumContent.map((cur, index) => (
                                    <CurriculumComp
                                        title={cur.title}
                                        content={cur.description}
                                        lesson={cur.lesson}
                                        index={index}
                                        isSupCur={cur.isSupCur}
                                        has_children={cur.has_children}
                                    ></CurriculumComp>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={`div tab_panel tab_panel_3 ${activeTabs[2] ? 'active' : ''}`}
                >
                    <div className="div tab_panel_title">Course Review</div>

                    <div className="div review_rating_container">
                        <div className="div review_rating">
                            <div className="div review_rating_num">4.5</div>
                            <div className="div review_rating_stars">
                                <div className="div rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
                            </div>
                            <div className="div review_rating_text">(28 Değerlendirme)</div>
                        </div>
                        <div className="div review_rating_bars">
                            <ul className="ul">
                                <li><span>5 Yıldız</span><div className="div review_rating_bar"><div style={{ width: "90%" }}></div></div></li>
                                <li><span>4 Yıldız</span><div className="div review_rating_bar"><div style={{ width: "70%" }}></div></div></li>
                                <li><span>3 Yıldız</span><div className="div review_rating_bar"><div style={{ width: "32%" }}></div></div></li>
                                <li><span>2 Yıldız</span><div className="div review_rating_bar"><div style={{ width: "10%" }}></div></div></li>
                                <li><span>1 Yıldız</span><div className="div review_rating_bar"><div style={{ width: "3%" }}></div></div></li>
                            </ul>
                        </div>
                    </div>

                    <div className="div comments_container">
                        <ul className="comments_list">
                            <li>
                                <div className="div comment_item d-flex flex-row align-items-start jutify-content-start">
                                    <div className="div comment_image"><div><img src={heroImg} alt="" /></div></div>
                                    <div className="div comment_content">
                                        <div className="div comment_title_container d-flex flex-row align-items-center justify-content-start">
                                            <div className="div comment_author"><a className="a" href="#">Yunus Emre Güçlü</a></div>
                                            <div className="div comment_rating"><div className="div rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                            <div className="div comment_time ml-auto">1 Gün önce</div>
                                        </div>
                                        <div className="div comment_text">
                                            <p className="p">Çok fazla örnek ile akıcı bir şekilde anlatılmış. Ayrıca aralara testler koyulması çok manidar olmuş. Herkese tavsiye ederim.</p>
                                        </div>
                                        <div className="div comment_extras d-flex flex-row align-items-center justify-content-start">
                                            <div className="div comment_extra comment_likes"><a className="a" href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>13</span></a></div>
                                            <div className="div comment_extra comment_reply"><a className="a" href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Yanıtla</span></a></div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="ul">
                                    <li>
                                        <div className="div comment_item d-flex flex-row align-items-start jutify-content-start">
                                            <div className="div comment_image"><div><img src={heroImg} alt="" /></div></div>
                                            <div className="div comment_content">
                                                <div className="div comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="div comment_author"><a className="a" href="#">Eren Kaplan</a></div>
                                                    <div className="div comment_rating"><div className="div rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                    <div className="div comment_time ml-auto">1 Gün önce</div>
                                                </div>
                                                <div className="div comment_text">
                                                    <p className="p">Çok fazla örnek ile akıcı bir şekilde anlatılmış. Ayrıca aralara testler koyulması çok manidar olmuş. Herkese tavsiye ederim.</p>
                                                </div>
                                                <div className="div comment_extras d-flex flex-row align-items-center justify-content-start">
                                                    <div className="div comment_extra comment_likes"><a className="a" href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>5</span></a></div>
                                                    <div className="div comment_extra comment_reply"><a className="a" href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Yanıtla</span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="div comment_item d-flex flex-row align-items-start jutify-content-start">
                                    <div className="div comment_image"><div><img src={heroImg} alt="" /></div></div>
                                    <div className="div comment_content">
                                        <div className="div comment_title_container d-flex flex-row align-items-center justify-content-start">
                                            <div className="div comment_author"><a className="a" href="#">Halit Uçkan</a></div>
                                            <div className="div comment_rating"><div className="div rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                            <div className="div comment_time ml-auto">1 Gün önce</div>
                                        </div>
                                        <div className="div comment_text">
                                            <p className="p">Çok fazla örnek ile akıcı bir şekilde anlatılmış. Ayrıca aralara testler koyulması çok manidar olmuş. Herkese tavsiye ederim.</p>
                                        </div>
                                        <div className="div comment_extras d-flex flex-row align-items-center justify-content-start">
                                            <div className="div comment_extra comment_likes"><a className="a" href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                            <div className="div comment_extra comment_reply"><a className="a" href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Yanıtla</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="div add_comment_container">
                            <div className="div add_comment_title">Bir yorum yap</div>
                            <div className="div add_comment_text">Yorum yapmak için <a className="a" href="#">giriş</a> yapmalısın.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CourseTab;