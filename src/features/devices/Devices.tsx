// src/features/devices/Devices.tsx
import { useState } from 'react';
import { features } from '../../config';

interface Device {
  id: number;
  name: string;
}

export function Devices() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [name, setName] = useState('');

  if (!features.enableDeviceManagement) return null;

  const addDevice = () => {
    if (!name) return;
    setDevices([...devices, { id: Date.now(), name }]);
    setName('');
  };

  const removeDevice = (id: number) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Devices</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Device name" />
      <button onClick={addDevice}>Add Device</button>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} <button onClick={() => removeDevice(device.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
