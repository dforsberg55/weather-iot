// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 8, background: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/devices" style={{ color: '#fff', textDecoration: 'none' }}>Devices</Link>
    </nav>
  );
}
