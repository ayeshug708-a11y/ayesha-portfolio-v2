import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p className="contact-subtitle">Contact Me</p>
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind or want to connect? Feel free to send me
          a message.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Form */}
        <form className="contact-form">

          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

        {/* Social Links */}
        <div className="contact-info">

          <h3>Let's Work Together</h3>


          <div className="social-links">

            <a
              href="mailto:ayeshug708@gmail.com"
              className="social-link"
            >
              <FaEnvelope />
              <span>ayeshug708@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;