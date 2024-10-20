import React from 'react';
import { ResumeData, Template } from '../types';

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: Template;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, template }) => {
  return (
    <div className={`bg-white p-8 ${template.className}`}>
      <h1 className="text-3xl font-bold mb-4">{resumeData.personalInfo.name}</h1>
      <p className="mb-2">{resumeData.personalInfo.email} | {resumeData.personalInfo.phone}</p>
      <p className="mb-4">{resumeData.personalInfo.location}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.institution}</h3>
          <p>{edu.degree}, {edu.year}</p>
        </div>
      ))}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Work Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{exp.company}</h3>
          <p>{exp.position}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;