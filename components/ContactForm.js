import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-form-container" id="contact">
      <div className="contact-form-wrapper">
        <h2 className="form-title">Get In Touch</h2>
        <p className="form-subtitle">Have questions? We're here to help!</p>
        
        {submitted && (
          <div className="success-message">
            ✓ Thank you! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Name *</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email *</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="pricing">Pricing Information</option>
              <option value="services">Service Details</option>
              <option value="complaint">Complaint</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>info@lokeshlaundry.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
