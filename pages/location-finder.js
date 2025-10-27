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
            <h3>Hanamkonda</h3>
            <p>Adalath, Kazipet</p>
            <p>Phone: +91 9390256104</p>
            <p>Hours: Mon-Sat 8AM-8PM</p>
          </div>
          
          <div className={styles.locationCard}>
            <h3>Hyderabad</h3>
            <p>Uppal</p>
            <p>Phone: +91 9390256104</p>
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
