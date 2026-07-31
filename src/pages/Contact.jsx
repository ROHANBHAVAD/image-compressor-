import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";

import "../styles/Pages.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration will be added later.
    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Contact Us | Compressify"
        description="Contact Compressify for support, feedback, bug reports, partnership inquiries, or any questions."
        keywords="contact compressify,image compressor support,contact us"
      />

      <Navbar />

      <main className="page">
        <div className="container page-container">

          <div className="page-header">
            <h1>Contact Us</h1>

            <p>
              Have a question, suggestion, or found a bug? We'd love to hear
              from you. Fill out the form below and we'll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="contact-wrapper">

            <div className="contact-info">

              <div className="contact-card">
                <h2>Customer Support</h2>
                <p>
                  Need help using Compressify? We're here to assist you with any
                  questions or issues.
                </p>
              </div>

              <div className="contact-card">
                <h2>Email</h2>
                <p>rohanece1888@gmail.com</p>
              </div>

              <div className="contact-card">
                <h2>Business</h2>
                <p>rohanphysics123@gmail.com</p>
              </div>

              <div className="contact-card">
                <h2>Response Time</h2>
                <p>Usually within 24–48 business hours.</p>
              </div>

            </div>

            

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;