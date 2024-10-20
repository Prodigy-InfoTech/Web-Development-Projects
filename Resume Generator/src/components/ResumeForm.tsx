import React from 'react';
import { ResumeData, Template } from '../types';
import { templates } from '../utils/templates';

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  selectedTemplate: Template;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template>>;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  resumeData,
  setResumeData,
  selectedTemplate,
  setSelectedTemplate,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof ResumeData,
    index?: number,
    field?: string
  ) => {
    const { name, value } = e.target;
    setResumeData((prevData) => {
      if (index !== undefined && field) {
        const newArray = [...prevData[section]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prevData, [section]: newArray };
      }
      return { ...prevData, [section]: { ...prevData[section], [name]: value } };
    });
  };

  const addItem = (section: 'education' | 'experience' | 'skills') => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], section === 'skills' ? { name: '' } : { institution: '', degree: '', year: '' }],
    }));
  };

  const removeItem = (section: 'education' | 'experience' | 'skills', index: number) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-4">
        <h2 className="text-2xl font-semibold text-white">Resume Information</h2>
      </div>
      <form className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2 text-purple-700">Personal Information</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={resumeData.personalInfo.name}
              onChange={(e) => handleInputChange(e, 'personalInfo')}
              placeholder="Full Name"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              value={resumeData.personalInfo.email}
              onChange={(e) => handleInputChange(e, 'personalInfo')}
              placeholder="Email"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleInputChange(e, 'personalInfo')}
              placeholder="Phone"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="location"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleInputChange(e, 'personalInfo')}
              placeholder="Location"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-purple-700">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleInputChange(e, 'education', index, 'institution')}
                placeholder="Institution"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleInputChange(e, 'education', index, 'degree')}
                placeholder="Degree"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                value={edu.year}
                onChange={(e) => handleInputChange(e, 'education', index, 'year')}
                placeholder="Year"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => removeItem('education', index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem('education')}
            className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Add Education
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-purple-700">Work Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleInputChange(e, 'experience', index, 'company')}
                placeholder="Company"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleInputChange(e, 'experience', index, 'position')}
                placeholder="Position"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleInputChange(e, 'experience', index, 'startDate')}
                placeholder="Start Date"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleInputChange(e, 'experience', index, 'endDate')}
                placeholder="End Date"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                value={exp.description}
                onChange={(e) => handleInputChange(e, 'experience', index, 'description')}
                placeholder="Description"
                className="border rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => removeItem('experience', index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem('experience')}
            className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Add Experience
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-purple-700">Skills</h3>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleInputChange(e, 'skills', index, 'name')}
                placeholder="Skill"
                className="border rounded-md px-3 py-2 flex-grow mr-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => removeItem('skills', index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem('skills')}
            className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Add Skill
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-purple-700">Template Selection</h3>
          <select
            value={selectedTemplate.id}
            onChange={(e) => setSelectedTemplate(templates.find(t => t.id === e.target.value) || templates[0])}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;