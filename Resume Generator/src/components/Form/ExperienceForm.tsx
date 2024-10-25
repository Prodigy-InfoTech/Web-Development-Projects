import React from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { Experience } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onChange }) => {
  const addExperience = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: [''],
      },
    ]);
  };

  const updateExperience = (index: number, field: keyof Experience, value: string | string[]) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const updateDescription = (expIndex: number, descIndex: number, value: string) => {
    const newData = [...data];
    const newDesc = [...newData[expIndex].description];
    newDesc[descIndex] = value;
    newData[expIndex] = { ...newData[expIndex], description: newDesc };
    onChange(newData);
  };

  const addDescriptionPoint = (index: number) => {
    const newData = [...data];
    newData[index].description.push('');
    onChange(newData);
  };

  const removeDescriptionPoint = (expIndex: number, descIndex: number) => {
    const newData = [...data];
    newData[expIndex].description = newData[expIndex].description.filter(
      (_, i) => i !== descIndex
    );
    onChange(newData);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <Section title="Work Experience">
      {data.map((exp, index) => (
        <div key={exp.id} className="mb-6 last:mb-0 p-4 bg-gray-50 rounded-lg relative">
          <button
            onClick={() => removeExperience(index)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Company"
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              placeholder="Company Name"
            />
            <Input
              label="Position"
              value={exp.position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              placeholder="Job Title"
            />
            <Input
              label="Start Date"
              type="month"
              value={exp.startDate}
              onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
            />
            <Input
              label="End Date"
              type="month"
              value={exp.endDate}
              onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            {exp.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex gap-2">
                <Input
                  label=""
                  value={desc}
                  onChange={(e) => updateDescription(index, descIndex, e.target.value)}
                  placeholder="Describe your responsibilities and achievements"
                  className="flex-1"
                />
                <button
                  onClick={() => removeDescriptionPoint(index, descIndex)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() => addDescriptionPoint(index)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            >
              <Plus className="w-4 h-4" />
              Add Description Point
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <Plus className="w-4 h-4" />
        Add Experience
      </button>
    </Section>
  );
};