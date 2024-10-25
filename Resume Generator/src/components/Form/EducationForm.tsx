import React from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { Education } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ data, onChange }) => {
  const addEducation = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
        gpaScale: '4.0',
      },
    ]);
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const removeEducation = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <Section title="Education">
      {data.map((edu, index) => (
        <div key={edu.id} className="mb-6 last:mb-0 p-4 bg-gray-50 rounded-lg relative">
          <button
            onClick={() => removeEducation(index)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="School"
              value={edu.school}
              onChange={(e) => updateEducation(index, 'school', e.target.value)}
              placeholder="University Name"
            />
            <Input
              label="Degree"
              value={edu.degree}
              onChange={(e) => updateEducation(index, 'degree', e.target.value)}
              placeholder="Bachelor's, Master's, etc."
            />
            <Input
              label="Field of Study"
              value={edu.field}
              onChange={(e) => updateEducation(index, 'field', e.target.value)}
              placeholder="Computer Science"
            />
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  label="GPA"
                  value={edu.gpa}
                  onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                  placeholder="3.8"
                />
              </div>
              <div className="w-24">
                <label className="block text-sm font-medium text-gray-700 mb-1">Scale</label>
                <select
                  value={edu.gpaScale}
                  onChange={(e) => updateEducation(index, 'gpaScale', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="4.0">4.0</option>
                  <option value="5.0">5.0</option>
                  <option value="10.0">10.0</option>
                </select>
              </div>
            </div>
            <Input
              label="Start Date"
              type="month"
              value={edu.startDate}
              onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
            />
            <Input
              label="End Date"
              type="month"
              value={edu.endDate}
              onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <Plus className="w-4 h-4" />
        Add Education
      </button>
    </Section>
  );
};