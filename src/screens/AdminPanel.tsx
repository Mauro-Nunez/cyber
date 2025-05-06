import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

interface ContentItem {
  id: number;
  title: string;
  content: string;
  isPublished: boolean;
  lastModified: Date;
}

const AdminPanel: React.FC = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: 1,
      title: 'Ejemplo de contenido',
      content: 'Este es un ejemplo de contenido que puede ser editado.',
      isPublished: false,
      lastModified: new Date(),
    },
  ]);

  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const togglePublish = (id: number) => {
    setContentItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isPublished: !item.isPublished } : item
      )
    );
  };

  const handleEdit = (item: ContentItem) => {
    setSelectedItem(item);
    setIsEditing(true);
  };

  const handleSave = (updatedItem: ContentItem) => {
    setContentItems(items =>
      items.map(item =>
        item.id === updatedItem.id ? { ...updatedItem, lastModified: new Date() } : item
      )
    );
    setIsEditing(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Administración</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Gestión de Contenido</h2>
            <button
              onClick={() => {
                const newItem: ContentItem = {
                  id: Date.now(),
                  title: 'Nuevo contenido',
                  content: '',
                  isPublished: false,
                  lastModified: new Date(),
                };
                setContentItems([...contentItems, newItem]);
                setSelectedItem(newItem);
                setIsEditing(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Nuevo Contenido
            </button>
          </div>

          <div className="space-y-4">
            {contentItems.map(item => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="flex items-center space-x-4">
                    <Switch
                      checked={item.isPublished}
                      onChange={() => togglePublish(item.id)}
                      className={`${
                        item.isPublished ? 'bg-green-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          item.isPublished ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{item.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Última modificación: {item.lastModified.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {isEditing && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
              <h3 className="text-xl font-semibold mb-4">Editar Contenido</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Título</label>
                  <input
                    type="text"
                    value={selectedItem.title}
                    onChange={(e) => setSelectedItem({ ...selectedItem, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contenido</label>
                  <textarea
                    value={selectedItem.content}
                    onChange={(e) => setSelectedItem({ ...selectedItem, content: e.target.value })}
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setSelectedItem(null);
                    }}
                    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleSave(selectedItem)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 