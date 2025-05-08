import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  Image, 
  FormInput, 
  Code, 
  Palette, 
  Navigation, 
  Box,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../../store/auth.store';
import { cn } from '../../utils/cn';
import { ProtectedRoute } from '../auth/ProtectedRoute';

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthStore();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Contenido', href: '/dashboard/content', icon: FileText },
    { name: 'Imágenes', href: '/dashboard/images', icon: Image },
    { name: 'Formularios', href: '/dashboard/forms', icon: FormInput },
    { name: 'Scripts', href: '/dashboard/scripts', icon: Code },
    { name: 'SEO/Meta', href: '/dashboard/meta', icon: Settings },
    { name: 'Estilos', href: '/dashboard/styles', icon: Palette },
    { name: 'Navegación', href: '/dashboard/navigation', icon: Navigation },
    { name: 'Componentes', href: '/dashboard/components', icon: Box },
    { name: 'Usuarios', href: '/dashboard/users', icon: Users },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-center h-16 border-b">
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </motion.a>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-64">
          <main className="p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout; 