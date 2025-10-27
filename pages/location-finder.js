import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/LocationFinder.module.css';

const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Your Lokesh Laundry locations
  const locations = [
    {
      id: 1,
      name: 'Lokesh Laundry - Hanamkonda',
      address: 'Adalath, Kazipet, Hanamkonda',
      city: 'Hanamkonda',
      pincode: '506001',
      phone: '+91 9390256104',
      hours: 'Mon-Sat 8AM-8PM',
      lat: 18.0104,
      lng: 79.5690,
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Adalath+Kazipet+Hanamkonda'
    },
    {
      id: 2,
      name: 'Lokesh Laundry - Uppal',
      address: 'Uppal, Hyderabad',
      city: 'Hyderabad',
      pincode: '500039',
      phone: '+91 9390256104',
      hours: 'Mon-Sat 8AM-8PM',
      lat: 17.4065,
      lng: 78.5526,
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Uppal+Hyderabad'
    }
  ];

  useEffect(() => {
    setFilteredLocations(locations);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredLocations(locations);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(query) ||
      location.address.toLowerCase().includes(query) ||
      location.city.toLowerCase().includes(query) ||
      location.pincode.includes(query)
    );

    setFilteredLocations(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Find Lokesh Laundry Near You</h1>
          <p>
            Discover our convenient laundry service locations across the city.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.searchSection}>
            <h2>Search for a Location</h2>
            <div className={styles.searchBox}>
              <input 
                type="text" 
                placeholder="Enter city, area, or pin code" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className={styles.searchBtn}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            {searchQuery && (
              <p className={styles.searchInfo}>
                {filteredLocations.length > 0 
                  ? `Found ${filteredLocations.length} location(s)`
                  : 'No locations found. Try a different search.'}
              </p>
            )}
          </div>

          <div className={styles.locationsGrid}>
            {filteredLocations.length > 0 ? (
              filteredLocations.map(location => (
                <div key={location.id} className={styles.locationCard}>
                  <h3>{location.name}</h3>
                  <div className={styles.locationDetail}>
                    <strong>📍 Address:</strong> {location.address}
                  </div>
                  <div className={styles.locationDetail}>
                    <strong>📮 PIN:</strong> {location.pincode}
                  </div>
                  <div className={styles.locationDetail}>
                    <strong>📞 Phone:</strong> {location.phone}
                  </div>
                  <div className={styles.locationDetail}>
                    <strong>🕒 Hours:</strong> {location.hours}
                  </div>
                  <a 
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.getDirectionsBtn}>
                      Get Directions 🗺️
                    </button>
                  </a>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <p>No locations found matching "{searchQuery}"</p>
                <button 
                  className={styles.searchBtn}
                  onClick={() => {
                    setSearchQuery('');
                    setFilteredLocations(locations);
                  }}
                >
                  Show All Locations
                </button>
              </div>
            )}
          </div>

          <div className={styles.mapSection}>
            <h2>Our Service Areas</h2>
            <div className={styles.mapPlaceholder}>
              <iframe
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160094841!2d78.24323189999999!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              ></iframe>
            </div>
            <p className={styles.mapNote}>
              📍 We serve Hyderabad, Warangal, and surrounding areas. 
              <br />
              Can't find your location? <a href="/contact">Contact us</a> to check if we serve your area!
            </p>
          </div>

          <div className={styles.serviceInfo}>
            <h2>Why Choose Lokesh Laundry?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <span className={styles.icon}>🚚</span>
                <h3>Free Pickup & Delivery</h3>
                <p>For orders above ₹500</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>⏱️</span>
                <h3>Quick Service</h3>
                <p>24-48 hour turnaround</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>💯</span>
                <h3>Quality Guaranteed</h3>
                <p>Professional cleaning experts</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>💳</span>
                <h3>Easy Payment</h3>
                <p>Multiple payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocationFinder;
