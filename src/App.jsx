import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from './components/UserPanel';
import SubmitBookRequest from './components/SubmitBookRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPanel />} />
        <Route path="/submit-book-request" element={<SubmitBookRequest />} />
      </Routes>
    </Router>
  );
}

export default App;