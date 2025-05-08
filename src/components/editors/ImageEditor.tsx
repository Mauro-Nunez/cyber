import React from 'react';
import { motion } from 'framer-motion';
import { Image, Upload, Link, Maximize, Minimize, RotateCcw } from 'lucide-react';
import { clsx } from 'clsx';

interface ImageEditorProps {
  element: {
    content: string; // URL de la imagen
    attributes: Record<string, string>;
    styles: string[];
  };
  onChange: (updates: {
    content: string;
    attributes: Record<string, string>;
    styles: string[];
  }) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ element, onChange }) => {
  const [isUploading, setIsUploading] = React.useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Aquí iría la lógica real de subida de imagen
      // Por ahora, simulamos una URL
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({
          ...element,
          content: event.target?.result as string,
        });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAttributeChange = (key: string, value: string) => {
    onChange({
      ...element,
      attributes: {
        ...element.attributes,
        [key]: value,
      },
    });
  };

  const handleStyleToggle = (style: string) => {
    const newStyles = element.styles.includes(style)
      ? element.styles.filter(s => s !== style)
      : [...element.styles, style];
    
    onChange({
      ...element,
      styles: newStyles,
    });
  };

  return (
    <div className="space-y-6">
      {/* Image Preview */}
      <div className="border rounded-lg overflow-hidden">
        {element.content ? (
          <div className="relative group">
            <img
              src={element.content}
              alt={element.attributes.alt || ''}
              className={clsx('w-full h-48 object-cover', ...element.styles)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={() => document.getElementById('image-upload')?.click()}
                className="p-2 bg-white rounded-full hover:bg-gray-100"
              >
                <Upload className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="h-48 flex items-center justify-center bg-gray-50">
            <button
              onClick={() => document.getElementById('image-upload')?.click()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Upload className="h-5 w-5" />
              <span>Subir Imagen</span>
            </button>
          </div>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Image Attributes */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              value={element.content}
              onChange={(e) => onChange({ ...element, content: e.target.value })}
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Texto Alternativo</label>
          <input
            type="text"
            value={element.attributes.alt || ''}
            onChange={(e) => handleAttributeChange('alt', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descripción de la imagen"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Enlace</label>
          <input
            type="text"
            value={element.attributes.href || ''}
            onChange={(e) => handleAttributeChange('href', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://ejemplo.com"
          />
        </div>
      </div>

      {/* Style Controls */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Estilos de Imagen</h4>
        <div className="flex space-x-2">
          <button
            onClick={() => handleStyleToggle('rounded-lg')}
            className={clsx(
              'p-2 rounded hover:bg-gray-200',
              element.styles.includes('rounded-lg') && 'bg-gray-200'
            )}
          >
            <Maximize className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleStyleToggle('rounded-full')}
            className={clsx(
              'p-2 rounded hover:bg-gray-200',
              element.styles.includes('rounded-full') && 'bg-gray-200'
            )}
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Applied Styles */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Estilos Aplicados</h4>
        <div className="flex flex-wrap gap-2">
          {element.styles.map(style => (
            <span
              key={style}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
            >
              {style}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageEditor; 