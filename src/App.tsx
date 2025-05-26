import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginForm />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/\" replace />} />
      </Routes>
    </Router>
  );
};

export default App;