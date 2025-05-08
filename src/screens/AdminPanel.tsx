import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Image, 
  FormInput, 
  Code, 
  Settings, 
  Palette, 
  Navigation, 
  Box,
  Plus,
  Trash2,
  Edit2,
  Eye,
  Download,
  Upload,
  Filter,
  MessageSquare,
  ShoppingCart,
  Users,
  Calendar,
  CreditCard,
  Map,
  Code2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface WebElement {
  id: string;
  type: 'text' | 'image' | 'form' | 'link' | 'button' | 'table' | 'script' | 'meta' | 'style' | 'component';
  content: any;
  attributes: Record<string, string>;
  styles: string[];
  location: string;
  isPublished: boolean;
  lastModified: Date;
  section: string;
}

interface FilterState {
  type: string;
  search: string;
  published: boolean | null;
  section: string;
}

const AdminPanel: React.FC = () => {
  const [elements, setElements] = useState<WebElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<WebElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    search: '',
    published: null,
    section: ''
  });

  const sections = [
    { id: 'cyberlink', name: 'Cyberlink', icon: Box },
    { id: 'chatbot', name: 'Chatbot', icon: MessageSquare },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'guazuapp', name: 'GuazuApp', icon: Users },
    { id: 'crm', name: 'CRM', icon: Users },
    { id: 'erp', name: 'ERP', icon: Box },
    { id: 'turnos', name: 'Turnos', icon: Calendar },
    { id: 'suscripciones', name: 'Suscripciones', icon: CreditCard },
    { id: 'tracking', name: 'Tracking', icon: Map },
    { id: 'desarrollo', name: 'Desarrollo', icon: Code2 },
  ];

  const tabs = [
    { id: 'content', name: 'Contenido', icon: FileText },
    { id: 'images', name: 'Imágenes', icon: Image },
    { id: 'forms', name: 'Formularios', icon: FormInput },
    { id: 'scripts', name: 'Scripts', icon: Code },
    { id: 'meta', name: 'SEO/Meta', icon: Settings },
    { id: 'styles', name: 'Estilos', icon: Palette },
    { id: 'navigation', name: 'Navegación', icon: Navigation },
    { id: 'components', name: 'Componentes', icon: Box },
  ];

  // Simulación de detección de elementos
  useEffect(() => {
    // Aquí iría la lógica real de detección de elementos
    const mockElements: WebElement[] = [
      // Cyberlink
      {
        id: '1',
        type: 'text',
        content: 'Bienvenido a Cyberlink',
        attributes: { class: 'text-2xl font-bold' },
        styles: ['text-2xl', 'font-bold'],
        location: 'header',
        isPublished: true,
        lastModified: new Date(),
        section: 'cyberlink'
      },
      {
        id: '2',
        type: 'image',
        content: '/images/cyberlink-logo.png',
        attributes: { class: 'w-32 h-32' },
        styles: ['w-32', 'h-32'],
        location: 'header',
        isPublished: true,
        lastModified: new Date(),
        section: 'cyberlink'
      },
      // Chatbot
      {
        id: '3',
        type: 'component',
        content: 'ChatbotWidget',
        attributes: { class: 'fixed bottom-4 right-4' },
        styles: ['fixed', 'bottom-4', 'right-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'chatbot'
      },
      // E-commerce
      {
        id: '4',
        type: 'component',
        content: 'ProductGrid',
        attributes: { class: 'grid grid-cols-4 gap-4' },
        styles: ['grid', 'grid-cols-4', 'gap-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'ecommerce'
      },
      // GuazuApp
      {
        id: '5',
        type: 'component',
        content: 'GuazuAppDashboard',
        attributes: { class: 'container mx-auto' },
        styles: ['container', 'mx-auto'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'guazuapp'
      },
      // CRM
      {
        id: '6',
        type: 'component',
        content: 'CRMContacts',
        attributes: { class: 'p-4' },
        styles: ['p-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'crm'
      },
      // ERP
      {
        id: '7',
        type: 'component',
        content: 'ERPInventory',
        attributes: { class: 'p-4' },
        styles: ['p-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'erp'
      },
      // Turnos
      {
        id: '8',
        type: 'component',
        content: 'TurnosCalendar',
        attributes: { class: 'p-4' },
        styles: ['p-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'turnos'
      },
      // Suscripciones
      {
        id: '9',
        type: 'component',
        content: 'SubscriptionPlans',
        attributes: { class: 'grid grid-cols-3 gap-4' },
        styles: ['grid', 'grid-cols-3', 'gap-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'suscripciones'
      },
      // Tracking
      {
        id: '10',
        type: 'component',
        content: 'TrackingMap',
        attributes: { class: 'h-96' },
        styles: ['h-96'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'tracking'
      },
      // Desarrollo
      {
        id: '11',
        type: 'component',
        content: 'DevelopmentTools',
        attributes: { class: 'p-4' },
        styles: ['p-4'],
        location: 'main',
        isPublished: true,
        lastModified: new Date(),
        section: 'desarrollo'
      }
    ];
    setElements(mockElements);
  }, []);

  const filteredElements = elements.filter(element => {
    if (filters.type && element.type !== filters.type) return false;
    if (filters.published !== null && element.isPublished !== filters.published) return false;
    if (filters.section && element.section !== filters.section) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        element.content.toString().toLowerCase().includes(searchLower) ||
        element.type.toLowerCase().includes(searchLower) ||
        Object.values(element.attributes).some(attr => 
          attr.toLowerCase().includes(searchLower)
        )
      );
    }
    return true;
  });

  const handleExport = () => {
    const dataStr = JSON.stringify(elements, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const exportFileDefaultName = 'web-content.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedElements = JSON.parse(e.target?.result as string);
          setElements(importedElements);
        } catch (error) {
          console.error('Error importing file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={clsx(
                  'flex items-center px-4 py-2 rounded-md text-sm font-medium',
                  previewMode
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                <Eye className="h-5 w-5 mr-2" />
                {previewMode ? 'Editar' : 'Vista Previa'}
              </button>
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                  id="import-file"
                />
                <label
                  htmlFor="import-file"
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Importar
                </label>
              </div>
              <button
                onClick={handleExport}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Exportar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar elementos..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <select
              value={filters.section}
              onChange={(e) => setFilters({ ...filters, section: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas las secciones</option>
              {sections.map(section => (
                <option key={section.id} value={section.id}>{section.name}</option>
              ))}
            </select>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los tipos</option>
              {tabs.map(tab => (
                <option key={tab.id} value={tab.id}>{tab.name}</option>
              ))}
            </select>
            <select
              value={filters.published === null ? '' : filters.published.toString()}
              onChange={(e) => setFilters({ 
                ...filters, 
                published: e.target.value === '' ? null : e.target.value === 'true' 
              })}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los estados</option>
              <option value="true">Publicados</option>
              <option value="false">No publicados</option>
            </select>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Secciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  'p-4 rounded-lg border cursor-pointer transition-colors',
                  filters.section === section.id
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-white hover:bg-gray-50'
                )}
                onClick={() => setFilters({ ...filters, section: section.id })}
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="h-6 w-6 text-gray-500" />
                  <span className="font-medium">{section.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  clsx(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </div>
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className={clsx(
                  'rounded-xl bg-white p-6',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{tab.name}</h2>
                  <button
                    onClick={() => {/* Implementar creación de nuevo elemento */}}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Nuevo {tab.name.slice(0, -1)}
                  </button>
                </div>

                <div className="space-y-4">
                  {filteredElements
                    .filter(element => element.type === tab.id)
                    .map(element => (
                      <motion.div
                        key={element.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {element.type.toUpperCase()}
                            </span>
                            <h3 className="text-lg font-medium">
                              {typeof element.content === 'string' ? element.content : element.content}
                            </h3>
                            <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">
                              {sections.find(s => s.id === element.section)?.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => {
                                setSelectedElement(element);
                                setIsEditing(true);
                              }}
                              className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded"
                            >
                              <Edit2 className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => {/* Implementar eliminación */}}
                              className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Ubicación</p>
                            <p className="text-sm text-gray-900">{element.location}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Última modificación</p>
                            <p className="text-sm text-gray-900">{element.lastModified.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Estilos</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {element.styles.map((style, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {style}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Atributos</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {Object.entries(element.attributes).map(([key, value]) => (
                                <span key={key} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {key}: {value}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {previewMode && (
                          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                            <p className="text-sm font-medium text-gray-500 mb-2">Vista Previa</p>
                            <div className="p-4 bg-white rounded border">
                              {element.type === 'text' && (
                                <p className={element.attributes.class}>{element.content}</p>
                              )}
                              {element.type === 'image' && (
                                <img 
                                  src={element.content} 
                                  alt="Preview" 
                                  className={element.attributes.class}
                                />
                              )}
                              {element.type === 'component' && (
                                <div className={element.attributes.class}>
                                  <p className="text-gray-500 italic">Componente: {element.content}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </main>

      {/* Modal de Edición */}
      <AnimatePresence>
        {isEditing && selectedElement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-4xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                Editar {selectedElement.type}
              </h3>
              {/* Implementar formulario de edición según el tipo de elemento */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedElement(null);
                  }}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {/* Implementar guardado */}}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPanel; 