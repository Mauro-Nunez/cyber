import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Type, AlignLeft, Bold, Italic, Underline, Eye } from 'lucide-react';
import { clsx } from 'clsx';

interface TextEditorProps {
  element: {
    content: string;
    attributes: Record<string, string>;
    styles: string[];
  };
  onChange: (updates: {
    content: string;
    attributes: Record<string, string>;
    styles: string[];
  }) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ element, onChange }) => {
  const [isPreview, setIsPreview] = React.useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({
      ...element,
      content: e.target.value,
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

  const handleAlignmentChange = (alignment: string) => {
    const newStyles = element.styles.filter(s => !s.startsWith('text-'));
    onChange({
      ...element,
      styles: [...newStyles, `text-${alignment}`],
    });
  };

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center space-x-4 p-2 bg-gray-50 rounded-lg">
        <button
          onClick={() => handleStyleToggle('font-bold')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('font-bold') && 'bg-gray-200'
          )}
        >
          <Bold className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleStyleToggle('italic')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('italic') && 'bg-gray-200'
          )}
        >
          <Italic className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleStyleToggle('underline')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('underline') && 'bg-gray-200'
          )}
        >
          <Underline className="h-5 w-5" />
        </button>
        <div className="h-6 w-px bg-gray-300" />
        <button
          onClick={() => handleAlignmentChange('left')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('text-left') && 'bg-gray-200'
          )}
        >
          <AlignLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleAlignmentChange('center')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('text-center') && 'bg-gray-200'
          )}
        >
          <AlignLeft className="h-5 w-5 transform rotate-90" />
        </button>
        <button
          onClick={() => handleAlignmentChange('right')}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            element.styles.includes('text-right') && 'bg-gray-200'
          )}
        >
          <AlignLeft className="h-5 w-5 transform rotate-180" />
        </button>
        <div className="h-6 w-px bg-gray-300" />
        <button
          onClick={() => setIsPreview(!isPreview)}
          className={clsx(
            'p-2 rounded hover:bg-gray-200',
            isPreview && 'bg-gray-200'
          )}
        >
          <Eye className="h-5 w-5" />
        </button>
      </div>

      {/* Editor/Preview */}
      <div className="border rounded-lg overflow-hidden">
        {isPreview ? (
          <div className={clsx('p-4', ...element.styles)}>
            {element.content}
          </div>
        ) : (
          <textarea
            value={element.content}
            onChange={handleContentChange}
            className="w-full h-48 p-4 focus:outline-none"
            placeholder="Escribe tu contenido aquí..."
          />
        )}
      </div>

      {/* Styles Preview */}
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

export default TextEditor; 