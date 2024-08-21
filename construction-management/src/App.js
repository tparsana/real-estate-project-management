import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminPanel from './components/AdminPanel';
import WorkerPanel from './components/WorkerPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/worker" element={<WorkerPanel />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to Construction Management App</h1>
    </div>
  );
};

export default App;