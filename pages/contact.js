import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to help! Reach out to us for any queries or support.
        </p>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            
            <div className={styles.infoItem}>
              <h3>📞 Phone</h3>
              <p>Customer Service: +91 9876543210</p>
              <p>Corporate Inquiries: +91 9876543211</p>
              <p>Hours: Mon-Sat 8AM-8PM</p>
            </div>

            <div className={styles.infoItem}>
              <h3>✉️ Email</h3>
              <p>General: info@lokeshlaundry.com</p>
              <p>Support: support@lokeshlaundry.com</p>
              <p>Feedback: feedback@lokeshlaundry.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>Lokesh Laundry Services Pvt Ltd</p>
              <p>123 Main Street, Downtown</p>
              <p>City, State - 400001</p>
            </div>

            <div className={styles.infoItem}>
              <h3>🕗 Business Hours</h3>
              <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
              <p>Public Holidays: Closed</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 1234567890" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
