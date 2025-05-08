import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, File, Folder, Code, Database, Settings, Link } from 'lucide-react';
import { Section } from '../ui/Section';

interface TreeNode {
  id: string;
  name: string;
  type: 'route' | 'component' | 'hook' | 'store' | 'service' | 'model' | 'config';
  children?: TreeNode[];
  path?: string;
  description?: string;
}

const systemStructure: TreeNode[] = [
  {
    id: 'routes',
    name: 'Routes',
    type: 'route',
    children: [
      { id: 'home', name: 'Home', type: 'route', path: '/' },
      { id: 'chatbot', name: 'Chatbot', type: 'route', path: '/chatbot' },
      { id: 'guazuapp', name: 'GuazuApp', type: 'route', path: '/guazuapp' },
      { id: 'crm', name: 'CRM', type: 'route', path: '/crm' },
      { id: 'erp', name: 'ERP', type: 'route', path: '/erp' },
      { id: 'turnos', name: 'Turnos', type: 'route', path: '/turnos' },
      { id: 'suscripciones', name: 'Suscripciones', type: 'route', path: '/suscripciones' },
      { id: 'tracking', name: 'Tracking', type: 'route', path: '/tracking' },
      { id: 'ecommerce', name: 'E-commerce', type: 'route', path: '/ecommerce' },
      { id: 'desarrollo', name: 'Desarrollo', type: 'route', path: '/desarrollo' },
      { id: 'admin', name: 'Admin Panel', type: 'route', path: '/admin' }
    ]
  }
];

const TreeNode: React.FC<{ node: TreeNode; level: number }> = ({ node, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const getIcon = () => {
    switch (node.type) {
      case 'route':
        return <Link className="w-4 h-4" />;
      case 'component':
        return <Code className="w-4 h-4" />;
      case 'hook':
        return <File className="w-4 h-4" />;
      case 'store':
        return <Database className="w-4 h-4" />;
      case 'service':
        return <Settings className="w-4 h-4" />;
      case 'model':
        return <File className="w-4 h-4" />;
      default:
        return <Folder className="w-4 h-4" />;
    }
  };

  return (
    <div style={{ marginLeft: `${level * 1.5}rem` }} className="py-1">
      <div 
        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer"
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <span className="text-gray-500">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        )}
        <span className="text-gray-500">{getIcon()}</span>
        <span className="font-medium">{node.name}</span>
        {node.path && (
          <span className="text-sm text-gray-500">({node.path})</span>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div>
          {node.children?.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const SystemExplorer: React.FC = () => {
  return (
    <Section className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">System Explorer</h2>
        <div className="space-y-2">
          {systemStructure.map((node) => (
            <TreeNode key={node.id} node={node} level={0} />
          ))}
        </div>
      </div>
    </Section>
  );
}; 