import React from 'react';
import '../styles/Form.css';
import { useState } from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", feedback: "" });
    };

    const email = formData.email.trim();
    const validEmail = /\S+@\S+\.\S+/.test(email);

    const isIncomplete =
        formData.name.trim().length < 3 ||
        !validEmail ||
        formData.feedback.trim().length < 50;

    return (
        <div className="container">
            <div className="left">

                <form className="flex-container" onSubmit={handleSubmit}>
                    <h2 className="contactTitle">Contact Form</h2>
                    <label htmlFor="name">Name:*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Please enter your full name."
                        minLength={3}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {(formData.name.trim().length < 3 && formData.name.trim().length > 0) && (
                        <p className="inputError">Please enter at least 3 characters</p>)}
                    <br />

                    <label htmlFor="email">Email:*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please enter your email."
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {(!validEmail && formData.email.trim().length > 0) && (
                        <p className="inputError">Please enter a valid email.</p>)}
                    <br />

                    <label htmlFor="message">Message:*</label>
                    <textarea
                        className="feedback"
                        id="feedback"
                        name="feedback"
                        wrap="soft"
                        maxLength="200"
                        placeholder="What's on your mind?"
                        value={formData.feedback}
                        onChange={handleChange}
                    />
                    {(formData.feedback.trim().length < 50 && formData.feedback.trim().length > 0) && (
                        <p className="inputError">Minimum characters:  {formData.feedback.length}/50</p>)}

                    <button type="submit" disabled={isIncomplete}>
                        Submit
                    </button>
                    {submitted && (
                        <p className="successMessage">Your message has been submitted.</p>
                    )}
                </form>
            </div>
        </div>
    );
}