import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Lokesh Laundry
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/location-finder">Location Finder</Link>
          </li>
          <li>
            <Link href="/services-pricing">Services & Pricing</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/book-order" className={styles.bookButton}>
              Book Order
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
