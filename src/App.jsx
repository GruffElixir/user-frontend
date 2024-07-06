import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from './components/UserPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPanel />} />
      </Routes>
    </Router>
  );
}

export default App;