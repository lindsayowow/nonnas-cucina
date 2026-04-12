import React, { useState } from 'react';
import '../styles/form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
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

  // Validation script to submit form
  const isIncomplete =
    formData.name.trim().length < 3 ||
    !validEmail ||
    formData.feedback.trim().length < 50;

  return (
    <section className="about-section card form-card">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="text-center">Contact Form</h2>

        {/* NAME */}
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
        {formData.name.trim().length > 0 &&
          formData.name.trim().length < 3 && (
            <p className="inputError">Please enter at least 3 characters</p>
          )}

        {/* EMAIL */}
        <label htmlFor="email">Email:*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email."
          value={formData.email}
          onChange={handleChange}
        />
        {formData.email.trim().length > 0 && !validEmail && (
          <p className="inputError">Please enter a valid email.</p>
        )}

        {/* MESSAGE */}
        <label htmlFor="feedback">Message:*</label>
        <textarea
          id="feedback"
          name="feedback"
          maxLength="200"
          placeholder="What's on your mind?"
          value={formData.feedback}
          onChange={handleChange}
        />
        {formData.feedback.trim().length > 0 &&
          formData.feedback.trim().length < 50 && (
            <p className="inputError">
              Minimum characters: {formData.feedback.length}/50
            </p>
          )}

        <button type="submit" className="btn" disabled={isIncomplete}>
          Submit
        </button>

        {submitted && (
          <p className="successMessage">Your message has been submitted.</p>
        )}
      </form>
    </section>
  );
}
