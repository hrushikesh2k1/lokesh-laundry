import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Lokesh Laundry</h1>
        <p className={styles.heroSubtitle}>
          Your Trusted Partner for Professional Laundry Services
        </p>
        <Link href="/book-order" className={styles.ctaButton}>
          Book Your Order Now
        </Link>
      </div>

      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>💪</span>
            <h3>Premium Quality</h3>
            <p>We use high-quality detergents and advanced washing techniques to ensure your clothes look and feel their best.</p>
          </div>
          
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🚚</span>
            <h3>Free Pickup & Delivery</h3>
            <p>Convenient doorstep service for orders above ₹500. We come to you!</p>
          </div>
          
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>⏱️</span>
            <h3>Quick Turnaround</h3>
            <p>24-48 hour standard service, with same-day express options available.</p>
          </div>
          
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🍃</span>
            <h3>Eco-Friendly</h3>
            <p>We care about the environment. Eco-friendly detergents available upon request.</p>
          </div>
          
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>💰</span>
            <h3>Affordable Pricing</h3>
            <p>Competitive rates with transparent pricing. No hidden charges.</p>
          </div>
          
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>💕</span>
            <h3>Care & Attention</h3>
            <p>Every garment receives individual attention and care from our expert team.</p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Wash & Fold</h3>
            <p>Starting at ₹50/kg</p>
            <p className={styles.serviceDesc}>Professional washing with fabric softener, neatly folded and ready to wear.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <h3>Wash & Iron</h3>
            <p>Starting at ₹80/kg</p>
            <p className={styles.serviceDesc}>Complete service with expert ironing and hangers provided.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <h3>Dry Cleaning</h3>
            <p>Starting at ₹150/piece</p>
            <p className={styles.serviceDesc}>Professional dry cleaning for delicate and special garments.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <h3>Express Service</h3>
            <p>Same-day delivery</p>
            <p className={styles.serviceDesc}>Need it fast? Get your laundry back within 12 hours.</p>
          </div>
        </div>
        <Link href="/services-pricing" className={styles.viewMoreLink}>
          View All Services & Pricing →
        </Link>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Experience Premium Laundry Service?</h2>
        <p>Book your order today and let us take care of your laundry needs!</p>
        <div className={styles.ctaButtons}>
          <Link href="/book-order" className={styles.primaryButton}>
            Book Order
          </Link>
          <Link href="/location-finder" className={styles.secondaryButton}>
            Find Location
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
