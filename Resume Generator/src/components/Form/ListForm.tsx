import React, { useState } from 'react';
import { Section } from './Section';
import { Plus, X } from 'lucide-react';

interface ListFormProps {
  title: string;
  data: string[];
  onChange: (data: string[]) => void;
  placeholder?: string;
}

export const ListForm: React.FC<ListFormProps> = ({
  title,
  data,
  onChange,
  placeholder = 'Add new item',
}) => {
  const [newItem, setNewItem] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      onChange([...data, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <Section title={title}>
      <form onSubmit={addItem} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-2 p-2 bg-gray-50 rounded-md"
          >
            <span className="text-gray-700">{item}</span>
            <button
              onClick={() => removeItem(index)}
              className="p-1 text-gray-400 hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};