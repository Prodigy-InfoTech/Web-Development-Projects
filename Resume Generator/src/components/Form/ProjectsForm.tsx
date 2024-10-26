import React from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { Project } from '../../types/resume';
import { Plus, Trash2, X } from 'lucide-react';

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export const ProjectsForm: React.FC<ProjectsFormProps> = ({ data, onChange }) => {
  const addProject = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        name: '',
        description: '',
        technologies: [],
        link: '',
      },
    ]);
  };

  const updateProject = (index: number, field: keyof Project, value: string | string[]) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addTechnology = (index: number, tech: string) => {
    const newData = [...data];
    if (!newData[index].technologies.includes(tech)) {
      newData[index].technologies = [...newData[index].technologies, tech];
      onChange(newData);
    }
  };

  const removeTechnology = (index: number, tech: string) => {
    const newData = [...data];
    newData[index].technologies = newData[index].technologies.filter((t) => t !== tech);
    onChange(newData);
  };

  const removeProject = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <Section title="Projects">
      {data.map((project, index) => (
        <div key={project.id} className="mb-6 last:mb-0 p-4 bg-gray-50 rounded-lg relative">
          <button
            onClick={() => removeProject(index)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="space-y-4">
            <Input
              label="Project Name"
              value={project.name}
              onChange={(e) => updateProject(index, 'name', e.target.value)}
              placeholder="Project Name"
            />
            <Input
              label="Project Link"
              type="url"
              value={project.link}
              onChange={(e) => updateProject(index, 'link', e.target.value)}
              placeholder="https://github.com/username/project"
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                placeholder="Describe your project"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Technologies</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                    <button
                      onClick={() => removeTechnology(index, tech)}
                      className="p-0.5 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.elements.namedItem('tech') as HTMLInputElement;
                  if (input.value.trim()) {
                    addTechnology(index, input.value.trim());
                    input.value = '';
                  }
                }}
                className="flex gap-2"
              >
                <input
                  name="tech"
                  type="text"
                  placeholder="Add a technology"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addProject}
        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <Plus className="w-4 h-4" />
        Add Project
      </button>
    </Section>
  );
};