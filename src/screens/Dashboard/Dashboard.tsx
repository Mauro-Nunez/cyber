import React from 'react';
import { Section } from '../../components/ui/Section/Section';
import { SystemExplorer } from '../../components/dashboard/SystemExplorer/SystemExplorer';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">System Dashboard</h1>
          <SystemExplorer />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };