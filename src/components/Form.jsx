import { useState } from "react";
import "../styles/form.css";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
        if (!formData.email.trim()) newErrors.email = "Please enter your email.";
        if (!formData.message.trim()) newErrors.message = "What's on your mind?";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
        }
    }

    return (
        <form className="flex-container card" onSubmit={handleSubmit}>
            <label>
                Name:*
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="inputError">{errors.name}</div>}
            </label>

            <label>
                Email:*
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="inputError">{errors.email}</div>}
            </label>

            <label>
                Message:*
                <textarea
                    name="message"
                    className="feedback"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="inputError">{errors.message}</div>}
            </label>

            <button className="btn" type="submit">
                Submit
            </button>
        </form>
    );
}