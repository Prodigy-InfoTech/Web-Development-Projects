import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  isOpen = true, 
  onToggle 
}) => {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};