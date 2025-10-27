import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // feedback message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to help! Reach out to us for any queries or support.
        </p>

        <div className={styles.contactWrapper}>
          {/* Contact info */}
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>📞 +91 9876543210</p>
            <p>✉️ info@lokeshlaundry.com</p>
            <p>🏢 123 Main Street, Downtown</p>
          </div>

          {/* Contact form */}
          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              {status && <p className={styles.status}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
