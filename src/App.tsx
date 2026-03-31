import { Dashboard } from './features/dashboard/Dashboard';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: 480, margin: 'auto', padding: 16 }}>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
