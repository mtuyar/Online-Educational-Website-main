import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    FacebookLoginButton,
    InstagramLoginButton,
    GoogleLoginButton,
    TwitterLoginButton
} from "react-social-login-buttons";

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(this.state);
    }

    render() {
        return (
            <div className="formCenter">
                <form className="formFields" onSubmit={this.handleSubmit}>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="email">
                            E-Mail Adresi
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="formFieldInput"
                            placeholder="E-Mail adresinizi giriniz."
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="password">
                            Şifre
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="formFieldInput"
                            placeholder="Şifrenizi giriniz."
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="formField">
                        <button className="formFieldButton">Giriş yap</button>{" "}
                        <Link to="/" className="formFieldLink">
                            Hesap Oluştur
                        </Link>
                    </div>

                    <div className="socialMediaButtons">

                        <div className="instagramButton">
                            <GoogleLoginButton
                                text="Google İle Giriş Yap"
                                onClick={() => alert("Hello")}
                            />
                        </div>

                        <div className="instagramButton">
                            <TwitterLoginButton
                                text="Twitter İle Giriş Yap"
                                onClick={() => alert("Hello")} />
                        </div>

                        <div className="facebookButton">
                            <FacebookLoginButton
                                text="Facebook İle Giriş Yap"
                                onClick={() => alert("Hello")}
                            />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
