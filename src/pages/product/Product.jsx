import "./product.css";
import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { Courses, updateCourse } from "../../dummyData";


export default function Product() {
    const [errorMessage, setErrorMessage] = useState('Tüm alanları doldurun!');
    console.log(Courses);

    const saveCourse = (e) => {
        e.preventDefault(); // Formun normal submit işlemini engelle

        const title = document.getElementById('title').value;
        const ageRange = document.getElementById('ageRange').value;
        const documentValue = document.getElementById('document').value;
        const feeCourse = document.getElementById('feeCourse').value;
        const totalTime = document.getElementById('totalTime').value;
        const content = document.getElementById('content').value;

        if (!title || !ageRange || !documentValue || !feeCourse || !totalTime || !content) {
            setErrorMessage('Tüm alanları doldurun!');
            alert(errorMessage);
            return;
        }
        const courseIdToUpdate = 1;
        const updatedCourseData = { 
            title: title, 
            content: content ,
            ageRange: ageRange,
            document: documentValue,
            fee: feeCourse,
            time:totalTime
        };
        updateCourse(courseIdToUpdate, updatedCourseData);

        // Güncellenmiş veriyi yazdır
        console.log(Courses);
        alert(`Başlık: ${title}\nYaş Aralığı: ${ageRange}\nDöküman: ${documentValue}\nÜcret: ${feeCourse}\nToplam Süre: ${totalTime}\nİçerik: ${content}`);
    };

    return (
        <div style={{}}>
            <Topbar />
            <div style={{ width: "100%", display: "flex" }}>
                <Sidebar />
                <div className="home">
                    <div className="" style={{ margin: '10%', width: '45%' }}>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div style={{ marginBottom: '5%' }}>
                                <h2>Kurs Tanımlama Ekranı</h2>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Başlık"
                                    required
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ageRange"
                                    placeholder="Yaş Aralığı"
                                    required
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="document"
                                    placeholder="Döküman"
                                    required
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="feeCourse"
                                    placeholder="Ücret"
                                    required="required"
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalTime"
                                    placeholder="Toplam Süre"
                                    required="required"
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    id="content"
                                    placeholder="İçerik"
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
                                    style={{ width: '30%', backgroundColor: '#0e76b2' }}
                                    onClick={saveCourse}
                                >Kaydet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
