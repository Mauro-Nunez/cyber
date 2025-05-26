import React from 'react';

export const SystemExplorer: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">System Overview</h2>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and manage your system components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* System Status Card */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">System Status</h3>
            <p className="mt-2 text-sm text-green-600">All systems operational</p>
          </div>

          {/* Resource Usage Card */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Resource Usage</h3>
            <p className="mt-2 text-sm text-gray-600">CPU: 25% | Memory: 45%</p>
          </div>

          {/* Active Users Card */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Active Users</h3>
            <p className="mt-2 text-sm text-gray-600">Current: 150 users</p>
          </div>
        </div>
      </div>
    </div>
  );
};