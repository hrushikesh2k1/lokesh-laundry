import Layout from '../components/Layout';
import styles from '../styles/LocationFinder.module.css';

const LocationFinder = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Find Lokesh Laundry Near You</h1>
        <p className={styles.description}>
          Discover our convenient laundry service locations across the city.
        </p>
        
        <div className={styles.searchSection}>
          <input 
            type="text" 
            placeholder="Enter your location or pin code" 
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>

        <div className={styles.locationsGrid}>
          <div className={styles.locationCard}>
            <h3>Downtown Branch</h3>
            <p>123 Main Street, Downtown</p>
            <p>Phone: +91 9876543210</p>
            <p>Hours: Mon-Sat 8AM-8PM</p>
          </div>
          
          <div className={styles.locationCard}>
            <h3>Uptown Branch</h3>
            <p>456 Park Avenue, Uptown</p>
            <p>Phone: +91 9876543211</p>
            <p>Hours: Mon-Sat 8AM-8PM</p>
          </div>
          
          <div className={styles.locationCard}>
            <h3>East Side Branch</h3>
            <p>789 Market Road, East Side</p>
            <p>Phone: +91 9876543212</p>
            <p>Hours: Mon-Sat 8AM-8PM</p>
          </div>
          
          <div className={styles.locationCard}>
            <h3>West End Branch</h3>
            <p>321 Garden Lane, West End</p>
            <p>Phone: +91 9876543213</p>
            <p>Hours: Mon-Sat 8AM-8PM</p>
          </div>
        </div>
        
        <div className={styles.mapPlaceholder}>
          <p>🗺️ Map Integration Placeholder - Add Google Maps API here</p>
        </div>
      </div>
    </Layout>
  );
};

export default LocationFinder;
