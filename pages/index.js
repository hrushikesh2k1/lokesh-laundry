import BookingForm from '../components/BookingForm';
import ContactForm from '../components/ContactForm';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lokesh Laundry</h1>
        <p className="tagline">Your Trusted Laundry Service</p>
        <nav className="header-nav">
          <a href="#services">Services</a>
          <a href="#booking">Book Now</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Welcome to Lokesh Laundry</h2>
            <p>
              We provide professional laundry services with care and attention to detail.
              Your clothes are in safe hands!
            </p>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👔</div>
              <h3>Wash & Fold</h3>
              <p>Quick and efficient wash and fold service</p>
              <ul className="service-features">
                <li>Same-day service available</li>
                <li>Eco-friendly detergents</li>
                <li>Careful handling</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Dry Cleaning</h3>
              <p>Professional dry cleaning for delicate items</p>
              <ul className="service-features">
                <li>Expert stain removal</li>
                <li>Gentle on fabrics</li>
                <li>Quality guaranteed</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Express Service</h3>
              <p>Same-day service for urgent needs</p>
              <ul className="service-features">
                <li>4-hour turnaround</li>
                <li>Premium quality</li>
                <li>Priority handling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integrated Booking Form */}
        <BookingForm />

        {/* Integrated Contact Form */}
        <ContactForm />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Lokesh Laundry</h4>
            <p>Your trusted partner for all laundry needs</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@lokeshlaundry.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Lokesh Laundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
