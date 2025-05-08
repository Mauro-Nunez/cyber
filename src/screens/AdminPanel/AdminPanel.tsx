import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/ui/Section';

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/dashboard" className="block">
              <Section className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold mb-2">System Explorer</h2>
                <p className="text-gray-600">View and manage the entire system structure</p>
              </Section>
            </Link>
            {/* Add more admin sections here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 