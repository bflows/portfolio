import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import './form.css'

export default function ContactForm() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Your message was sent successfully!");
          setErrorMessage("");
          e.target.reset();

          // Hide the success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 10000); // 5000 milliseconds = 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage(
            "Failed to send your message. Please try again later."
          );
          setSuccessMessage("");
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="field">
          <label className="label subtitle" htmlFor="user_name">
            Name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              id="user_name"
              autoComplete="name"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label subtitle" htmlFor="user_email">
            Email
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              name="user_email"
              id="user_email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label subtitle" htmlFor="subject">
            Subject
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter the subject"
              name="subject"
              id="subject"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label subtitle" htmlFor="message">
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Enter your message"
              name="message"
              id="message"
              autoComplete="off"
            ></textarea>
          </div>
        </div>
        <div className="block" id="contactBtn">
          <button className="button is-primary">Send</button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
