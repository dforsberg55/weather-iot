// src/features/dashboard/Dashboard.tsx
import { features } from '../../config';

export function Dashboard() {
  if (!features.enableSensorData) return null;
  return (
    <div style={{ padding: 16 }}>
      <h2>Sensor Data</h2>
      <div style={{ background: '#f4f4f4', padding: 16, borderRadius: 8 }}>
        <p>Temperature: 22°C</p>
        <p>Humidity: 45%</p>
        <p>Status: Online</p>
      </div>
    </div>
  );
}
