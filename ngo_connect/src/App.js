
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Benefactor from './components/Benefactor';
import Donor from './components/donor';
import DonationsTracker from './components/DonationsTracker';
import EventsPage from './components/EventsPage';
import Government from './components/Government';
import WorkerPortal from './components/WorkerPortal';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/benefactor" element={<Benefactor />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/donationTracker" element={<DonationsTracker />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/government" element={<Government />} />
          <Route path="/worker" element={<WorkerPortal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
