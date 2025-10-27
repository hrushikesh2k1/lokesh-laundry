import Layout from '../components/Layout';
import styles from '../styles/ServicesPricing.module.css';

const ServicesPricing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Our Services & Pricing</h1>
        <p className={styles.subtitle}>
          Professional laundry services at affordable prices
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h2>Wash & Fold</h2>
            <p className={styles.price}>₹50/kg</p>
            <ul className={styles.features}>
              <li>Professional washing</li>
              <li>Fabric softener included</li>
              <li>Neatly folded</li>
              <li>24-hour turnaround</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h2>Wash & Iron</h2>
            <p className={styles.price}>₹80/kg</p>
            <ul className={styles.features}>
              <li>Professional washing</li>
              <li>Expert ironing</li>
              <li>Hangers provided</li>
              <li>48-hour turnaround</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h2>Dry Cleaning</h2>
            <p className={styles.price}>₹150/piece</p>
            <ul className={styles.features}>
              <li>Professional dry cleaning</li>
              <li>Stain removal</li>
              <li>Quality packaging</li>
              <li>72-hour turnaround</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h2>Express Service</h2>
            <p className={styles.price}>+50% extra</p>
            <ul className={styles.features}>
              <li>Same-day delivery</li>
              <li>Priority handling</li>
              <li>Available for all services</li>
              <li>12-hour turnaround</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h2>Specialty Items</h2>
            <p className={styles.price}>Custom pricing</p>
            <ul className={styles.features}>
              <li>Curtains & drapes</li>
              <li>Blankets & comforters</li>
              <li>Wedding attire</li>
              <li>Leather & suede</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h2>Subscription Plans</h2>
            <p className={styles.price}>Starting ₹2000/month</p>
            <ul className={styles.features}>
              <li>Weekly pickups</li>
              <li>20% discount</li>
              <li>Free delivery</li>
              <li>Flexible plans</li>
            </ul>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <h3>Additional Services</h3>
          <ul>
            <li>Free pickup and delivery for orders above ₹500</li>
            <li>Eco-friendly detergents available upon request</li>
            <li>24/7 customer support</li>
            <li>Satisfaction guaranteed or money back</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPricing;
