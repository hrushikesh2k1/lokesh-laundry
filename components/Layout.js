import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Lokesh Laundry. All rights reserved.</p>
        <p>Quality Laundry Services You Can Trust</p>
      </footer>
    </div>
  );
};

export default Layout;
