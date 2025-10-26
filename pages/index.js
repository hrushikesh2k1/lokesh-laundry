export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '40px 20px', textAlign: 'center', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '48px', margin: '0' }}>Lokesh Laundry</h1>
        <p style={{ fontSize: '20px', margin: '10px 0 0 0' }}>Your Trusted Laundry Service</p>
      </header>

      <main style={{ padding: '40px 0' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#2c3e50', fontSize: '32px' }}>Welcome to Lokesh Laundry</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            We provide professional laundry services with care and attention to detail.
            Your clothes are in safe hands!
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#ecf0f1', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#2c3e50' }}>Wash & Fold</h3>
            <p>Quick and efficient wash and fold service</p>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#2c3e50' }}>Dry Cleaning</h3>
            <p>Professional dry cleaning for delicate items</p>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#2c3e50' }}>Express Service</h3>
            <p>Same-day service for urgent needs</p>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#34495e', color: 'white', padding: '20px', textAlign: 'center', borderRadius: '8px', marginTop: '40px' }}>
        <p>© 2025 Lokesh Laundry. All rights reserved.</p>
        <p>Contact us: info@lokeshlaundry.com | (555) 123-4567</p>
      </footer>
    </div>
  );
}
