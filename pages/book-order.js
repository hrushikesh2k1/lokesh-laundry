import Layout from '../components/Layout';
import styles from '../styles/BookOrder.module.css';

const BookOrder = () => {
  // Your Google Form embedded URL
  const googleFormUrl = 'https://docs.google.com/forms/d/1Y978EV69rbTmLvQi5NAfVbH88v_Myamdvbn8VreNkZw/viewform?embedded=true';

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Book Your Laundry Order</h1>
        <p className={styles.subtitle}>
          Fill out the form below to schedule your pickup and delivery
        </p>

        <div className={styles.infoSection}>
          <h2>Why Book with Us?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <span className={styles.icon}>✅</span>
              <h3>Easy Scheduling</h3>
              <p>Choose your convenient time slot</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.icon}>🚚</span>
              <h3>Free Pickup & Delivery</h3>
              <p>For orders above ₹500</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.icon}>💳</span>
              <h3>Secure Payment</h3>
              <p>Multiple payment options</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.icon}>⏱️</span>
              <h3>Quick Turnaround</h3>
              <p>24-48 hour service available</p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Book Your Order</h2>
          <p className={styles.formDescription}>
            Please fill out the form below with your details. We'll contact you within 1 hour to confirm your booking.
          </p>
          
          <div className={styles.formContainer}>
            {/* Google Form Embed */}
            <div className={styles.googleFormWrapper}>
              <iframe 
                src={googleFormUrl}
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Lokesh Laundry Order Form"
              >
                Loading form...
              </iframe>
            </div>
            
            {/* Alternative: Direct link if embed doesn't work */}
            <div className={styles.directLink}>
              <p>Having trouble viewing the form?</p>
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.formLink}
              >
                Open Form in New Tab →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.instructions}>
          <h2>How It Works</h2>
          <ol className={styles.stepsList}>
            <li>
              <strong>Step 1: Fill the Form</strong>
              <p>Provide your contact details, address, and service preferences</p>
            </li>
            <li>
              <strong>Step 2: Choose Your Slot</strong>
              <p>Select a convenient pickup time from available slots</p>
            </li>
            <li>
              <strong>Step 3: Confirmation</strong>
              <p>Receive confirmation call within 1 hour</p>
            </li>
            <li>
              <strong>Step 4: Pickup</strong>
              <p>Our team will arrive at your specified time</p>
            </li>
            <li>
              <strong>Step 5: Delivery</strong>
              <p>Get your fresh laundry delivered back to you</p>
            </li>
          </ol>
        </div>

        <div className={styles.contactNote}>
          <p>
            Need immediate assistance? Call us at <strong>+91 9876543210</strong>
          </p>
          <p>
            Or WhatsApp us at <strong>+91 9876543210</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BookOrder;
