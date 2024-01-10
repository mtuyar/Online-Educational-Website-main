import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import "./login.css";
import loginpage from "../../assests/images/login-page.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [currentPage, setCurrentPage] = useState("signIn");
  const [dataLoaded, setdataLoaded] = useState(false)

  useEffect(() => {
    const receivedData = JSON.parse(localStorage.getItem("myData"));
    if (receivedData.data) {
      setCurrentPage(receivedData.data);
      setdataLoaded(true);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="appAside">
        <img
          src={loginpage}
          style={{ width: "100%", height: "100%", objectFit: 'cover' }}
          alt="Login Page"
        />
      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          <button
            onClick={() => handlePageChange("signIn")}
            className={`pageSwitcherItem ${currentPage === "signIn" && "pageSwitcherItem-active"}`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => handlePageChange("signUp")}
            className={`pageSwitcherItem ${currentPage === "signUp" && "pageSwitcherItem-active"}`}
          >
            Kaydol
          </button>
        </div>

        <div className="formTitle">
          {currentPage === "signIn" ? (
            <span className="formTitleLink-active" style={{ fontSize: 33, color: '#17bf9e' }}>Giriş Yap</span>
          ) : (
            <span className="formTitleLink-active" style={{ fontSize: 33, color: '#17bf9e' }}>Kaydol</span>
          )}
        </div>

        {currentPage === "signUp" ? <SignUpForm /> : <SignInForm />}
      </div>
      </div>
  );
};

export default Login;
