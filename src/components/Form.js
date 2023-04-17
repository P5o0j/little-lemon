import React, { useState } from "react";
import "./styles/Booking.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name required!"
        }
        if (formData.email === "") {
            err.email = "* Email required!"
        } else {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (!regex.test(formData.email)) {
                err.email = "Email not valid!"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "* Phone number required!"
        } else {
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if (!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number not valid!"
            }
        }


        if (formData.guests === "") {
            err.guests = "* Please specify number of guests!"
        }
        if (formData.date === "") {
            err.date = "* Please specify date and time!"
        }

        setFormError({ ...err })
        return Object.keys(err).length < 1;
    }

    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if (isValid) {
            navigate('/confirmation');
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" onChange={onChangeHandler} />
                    <span className="non-valid">{formError.name}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={onChangeHandler} />
                    <span className="non-valid">{formError.email}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" name="telephone" onChange={onChangeHandler} />
                    <span className="non-valid">{formError.telephone}</span>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select className="options" name="occasion" onChange={onChangeHandler}>
                        <option value="select"></option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" name="guests" onChange={onChangeHandler} />
                    <span className="non-valid">{formError.guests}</span>
                </div>

                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" onChange={onChangeHandler} />
                    <span className="non-valid">{formError.date}</span>
                </div>

            </fieldset>
            <div>
                <h1>
                    {/* <Link to="/confirmation"> */}
                    <button className="reserve-btn action-button" type="submit">
                        Book a Table
                    </button>
                    {/* </Link> */}
                </h1>
            </div>
        </form>
    );
}

export default Form;