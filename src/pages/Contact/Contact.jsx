import React, { useState } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useSeo from "../../utils/useSeo";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "P.O. Box 413 – 50310,  Eldoret",
    sub: "1 km from Ngeria Market",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+254 740 932 743",
    href: "tel:+254740932743",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "info@ngeriatechnical.ac.ke",
    href: "mailto:info@ngeriatechnical.ac.ke",
  },
  {
    icon: <FaClock />,
    label: "Working Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM",
    sub: "Sat: Closed",
  },
];

const Contact = () => {
  useSeo({
    title: "Contact Us",
    description: "Get in touch with Ngeria Technical Training Institute— located near Ngeria Market Center, Uasin Gishu County, Kenya. Call +254 740 932 743 or email ngeriatechnical@gmail.com.",
  });

  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page-wrapper">
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="contact-hero">
        <div className="contact-hero__overlay" />
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">We'd Love to Hear From You</span>
          <h1>Contact Us</h1>
          <div className="contact-hero__breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="contact-main">
        <div className="contact-container">

          {/* ── LEFT: Form ── */}
          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <span className="contact-eyebrow">Send a Message</span>
              <h2>Get In Touch</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className={`contact-field${focused === "name" ? " contact-field--active" : ""}`}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. John Mwangi"
                    required
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div className={`contact-field${focused === "email" ? " contact-field--active" : ""}`}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className={`contact-field${focused === "phone" ? " contact-field--active" : ""}`}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div className={`contact-field${focused === "subject" ? " contact-field--active" : ""}`}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div className={`contact-field${focused === "message" ? " contact-field--active" : ""}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button type="submit" className={`contact-submit${submitted ? " contact-submit--sent" : ""}`}>
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><FaPaperPlane className="contact-submit__icon" /> Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* ── RIGHT: Info + Map ── */}
          <div className="contact-info-col">

            {/* Info card */}
            <div className="contact-info-card">
              <span className="contact-eyebrow">Find Us</span>
              <h2>Our Location</h2>
              <p className="contact-info-card__desc">
                Ngeria Technical Training Institute is a public TVET institution offering Diploma,
                Certificate, and Artisan programmes, located in Uasin Gishu County.
              </p>

              <div className="contact-details">
                {contactDetails.map((d, i) => (
                  <div key={i} className="contact-detail">
                    <div className="contact-detail__icon">{d.icon}</div>
                    <div className="contact-detail__body">
                      <span className="contact-detail__label">{d.label}</span>
                      {d.href ? (
                        <a href={d.href} className="contact-detail__value">{d.value}</a>
                      ) : (
                        <span className="contact-detail__value">{d.value}</span>
                      )}
                      {d.sub && <span className="contact-detail__sub">{d.sub}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
<div className="contact-map">
  <div className="contact-map__header">
    <span className="contact-map__title">
      <FaMapMarkerAlt /> Find Us on the Map
    </span>

    <a
      href="https://www.google.com/maps/dir/?api=1&destination=Ngeria+Technical+Training+Institute%2C+Uasin+Gishu%2C+Kenya"
      target="_blank"
      rel="noreferrer"
      className="contact-map__directions"
    >
      Get Directions <FaChevronRight style={{ fontSize: "0.6rem" }} />
    </a>
  </div>

  <iframe
    src="https://maps.google.com/maps?q=Ngeria%20Technical%20Training%20Institute%2C%20Uasin%20Gishu%2C%20Kenya&output=embed"
    title="Ngeria Technical Training Institute location map"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;