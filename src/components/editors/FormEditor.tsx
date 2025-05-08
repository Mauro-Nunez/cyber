import React from 'react';
import { motion } from 'framer-motion';
import { FormInput, Plus, Trash2, Settings, ArrowUp, ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';

interface FormField {
  id: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[]; // Para select, checkbox y radio
}

interface FormEditorProps {
  element: {
    content: FormField[];
    attributes: Record<string, string>;
    styles: string[];
  };
  onChange: (updates: {
    content: FormField[];
    attributes: Record<string, string>;
    styles: string[];
  }) => void;
}

const FormEditor: React.FC<FormEditorProps> = ({ element, onChange }) => {
  const [selectedField, setSelectedField] = React.useState<FormField | null>(null);

  const handleAddField = () => {
    const newField: FormField = {
      id: Date.now().toString(),
      type: 'text',
      label: 'Nuevo Campo',
      required: false,
    };
    onChange({
      ...element,
      content: [...element.content, newField],
    });
  };

  const handleRemoveField = (fieldId: string) => {
    onChange({
      ...element,
      content: element.content.filter(field => field.id !== fieldId),
    });
  };

  const handleFieldChange = (fieldId: string, updates: Partial<FormField>) => {
    onChange({
      ...element,
      content: element.content.map(field =>
        field.id === fieldId ? { ...field, ...updates } : field
      ),
    });
  };

  const handleMoveField = (fieldId: string, direction: 'up' | 'down') => {
    const currentIndex = element.content.findIndex(field => field.id === fieldId);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === element.content.length - 1)
    ) {
      return;
    }

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const newContent = [...element.content];
    [newContent[currentIndex], newContent[newIndex]] = [newContent[newIndex], newContent[currentIndex]];

    onChange({
      ...element,
      content: newContent,
    });
  };

  return (
    <div className="space-y-6">
      {/* Form Fields List */}
      <div className="space-y-4">
        {element.content.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FormInput className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-medium">Campo {index + 1}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleMoveField(field.id, 'up')}
                  disabled={index === 0}
                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleMoveField(field.id, 'down')}
                  disabled={index === element.content.length - 1}
                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleRemoveField(field.id)}
                  className="p-1 text-red-600 rounded hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de Campo</label>
                <select
                  value={field.type}
                  onChange={(e) => handleFieldChange(field.id, { type: e.target.value as FormField['type'] })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="text">Texto</option>
                  <option value="email">Email</option>
                  <option value="password">Contraseña</option>
                  <option value="number">Número</option>
                  <option value="select">Selector</option>
                  <option value="checkbox">Casilla</option>
                  <option value="radio">Radio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Etiqueta</label>
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) => handleFieldChange(field.id, { label: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Placeholder</label>
                <input
                  type="text"
                  value={field.placeholder || ''}
                  onChange={(e) => handleFieldChange(field.id, { placeholder: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) => handleFieldChange(field.id, { required: e.target.checked })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Requerido</span>
                </label>
              </div>

              {(field.type === 'select' || field.type === 'checkbox' || field.type === 'radio') && (
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Opciones</label>
                  <div className="mt-1 space-y-2">
                    {field.options?.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...(field.options || [])];
                            newOptions[optionIndex] = e.target.value;
                            handleFieldChange(field.id, { options: newOptions });
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => {
                            const newOptions = field.options?.filter((_, i) => i !== optionIndex);
                            handleFieldChange(field.id, { options: newOptions });
                          }}
                          className="p-1 text-red-600 rounded hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newOptions = [...(field.options || []), 'Nueva opción'];
                        handleFieldChange(field.id, { options: newOptions });
                      }}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Agregar opción
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Field Button */}
      <button
        onClick={handleAddField}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Plus className="h-5 w-5 mr-2" />
        Agregar Campo
      </button>

      {/* Form Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Vista Previa</h3>
        <div className="border rounded-lg p-6 bg-white">
          <form className="space-y-4">
            {element.content.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={field.required}
                  >
                    <option value="">Seleccionar...</option>
                    {field.options?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <div className="mt-2 space-y-2">
                    {field.options?.map((option, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === 'radio' ? (
                  <div className="mt-2 space-y-2">
                    {field.options?.map((option, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name={field.id}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditor; 