import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

class SignUpForm extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false
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

    handleSubmit(e) {
        e.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(this.state);
    }

    render() {
        return (
            <div className="formCenter">
                <form onSubmit={this.handleSubmit} className="formFields">
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">
                            Ad Soyad
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="formFieldInput"
                            placeholder="Ad ve soyad giriniz."
                            name="name"
                            value={this.state.name}
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
                        <label className="formFieldLabel" htmlFor="password">
                            Şifre
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="formFieldInput"
                            placeholder="Şifrenizi tekrar giriniz."
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
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
                        <label className="formFieldLabel" htmlFor="date">
                            Doğum Tarihi
                        </label>
                        <LocalizationProvider label dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="tel">
                            Telefon Numarası
                        </label>
                        <input
                            type="tel"
                            id="tel"
                            className="formFieldInput"
                            placeholder="Telefon numaranızı giriniz."
                            name="tel"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Cinsiyet Seçimi</FormLabel>
                        <RadioGroup
                            row
                            aria-label="gender"
                            name="gender">
                            <FormControlLabel value="male" control={<Radio />} label="Erkek" style={{ color: 'black' }} />
                            <FormControlLabel value="female" control={<Radio />} label="Kadın" style={{ color: 'black' }} />
                        </RadioGroup>
                    </FormControl>
                    <div className="formField">
                        <label className="formFieldCheckboxLabel">
                            <input
                                className="formFieldCheckbox"
                                type="checkbox"
                                name="hasAgreed"
                                value={this.state.hasAgreed}
                                onChange={this.handleChange}
                            />{" "}
                            Kampanyalardan haberdar olabilmem için tarafıma elektronik ileti gönderilmesine izin veriyorum.
                        </label>
                    </div>

                    <div className="formField">
                        <button className="formFieldButton">Kaydol</button>{" "}
                        <Link to="/sign-in" className="formFieldLink">
                            Zaten Üyeyim
                        </Link>
                    </div>
                    <div>
                        <label style={{ color: '#646f7d', fontSize: 12 }}>
                            Kaydolurken  {" "}
                            <a href="null" className="formFieldTermsLink">
                                Kullanım Şartlarımızı
                            </a> ve  {" "}
                            <a href="null" className="formFieldTermsLink">
                                Gizlilik Politikamızı
                            </a> kabul edersiniz.
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUpForm;
