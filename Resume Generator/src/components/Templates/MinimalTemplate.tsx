import React from 'react';
import { ResumeData } from '../../types/resume';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface MinimalTemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 shadow-lg" id="resume-content">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.portfolio && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <a href={data.personalInfo.portfolio} target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600">Portfolio</a>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600">LinkedIn</a>
            </div>
          )}
          {data.personalInfo.github && (
            <div className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600">GitHub</a>
            </div>
          )}
        </div>
      </header>

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                <span className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-gray-700">{exp.company}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.description.map((desc, index) => (
                  <li key={index} className="text-gray-600 text-sm">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">{edu.school}</h3>
                <span className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="text-gray-700">{edu.degree} in {edu.field}</p>
              {edu.gpa && (
                <p className="text-sm text-gray-600">
                  GPA: {edu.gpa}/{edu.gpaScale}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="font-semibold text-gray-800">
                {project.name}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                     className="ml-2 text-sm text-blue-600 hover:text-blue-800">
                    View Project →
                  </a>
                )}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs text-gray-500">
                    {tech}{index < project.technologies.length - 1 ? " • " : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {data.achievements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">Achievements</h2>
          <ul className="list-disc list-inside">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600 mb-1">{achievement}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Activities */}
      {data.activities.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-200 mb-3">
            Extracurricular Activities
          </h2>
          <ul className="list-disc list-inside">
            {data.activities.map((activity, index) => (
              <li key={index} className="text-gray-600 mb-1">{activity}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};