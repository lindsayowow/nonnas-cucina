import React from 'react';
import '../styles/Form.css';
import { useState } from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isIncomplete =
        formData.name.trim() === "" ||
        formData.email.trim() === "" ||
        formData.feedback.trim() === "";

    return (
        <div className="container">
            <div className="left">


                <form className="flex-container">
                    <h2 className="contactTitle">Contact Form</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Please enter your full name."
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please enter your email."
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="message">Message:</label>
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

                    <button type="submit" disabled={isIncomplete}>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}