import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './features/auth/AuthProvider';
import { Dashboard } from './features/dashboard/Dashboard';
import { Devices } from './features/devices/Devices';
import { Login } from './features/auth/Login';
import { Signup } from './features/auth/Signup';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/devices" element={<Devices />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
