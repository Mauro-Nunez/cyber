import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import DashboardLayout from './components/layout/DashboardLayout';
import AdminPanel from './screens/AdminPanel';
import { LoginForm } from './components/auth/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Admin Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="content" element={<AdminPanel />} />
          <Route path="images" element={<AdminPanel />} />
          <Route path="forms" element={<AdminPanel />} />
          <Route path="scripts" element={<AdminPanel />} />
          <Route path="meta" element={<AdminPanel />} />
          <Route path="styles" element={<AdminPanel />} />
          <Route path="navigation" element={<AdminPanel />} />
          <Route path="components" element={<AdminPanel />} />
          <Route path="users" element={<AdminPanel />} />
        </Route>

        {/* Redirect /admin to /dashboard */}
        <Route path="/admin" element={<Navigate to="/dashboard" replace />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App; 