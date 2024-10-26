import React, { useState, useEffect } from 'react';
import { PersonalInfoForm } from './components/Form/PersonalInfoForm';
import { EducationForm } from './components/Form/EducationForm';
import { ExperienceForm } from './components/Form/ExperienceForm';
import { SkillsForm } from './components/Form/SkillsForm';
import { ProjectsForm } from './components/Form/ProjectsForm';
import { ListForm } from './components/Form/ListForm';
import { MinimalTemplate } from './components/Templates/MinimalTemplate';
import { ResumeData, Template } from './types/resume';
import { Download } from 'lucide-react';
import { usePDF } from 'react-to-pdf';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    linkedin: '',
    github: '',
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
  achievements: [],
  activities: [],
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('resumeData');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [template, setTemplate] = useState<Template>('minimal');
  const { toPDF, targetRef } = usePDF({
    filename: `${resumeData.personalInfo.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            <div className="flex gap-4">
              <button
                onClick={() => toPDF()}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </button>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as Template)}
                className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="minimal">Minimal Template</option>
                <option value="creative">Creative Template</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <PersonalInfoForm
              data={resumeData.personalInfo}
              onChange={(personalInfo) => setResumeData({ ...resumeData, personalInfo })}
            />
            <EducationForm
              data={resumeData.education}
              onChange={(education) => setResumeData({ ...resumeData, education })}
            />
            <ExperienceForm
              data={resumeData.experience}
              onChange={(experience) => setResumeData({ ...resumeData, experience })}
            />
            <SkillsForm
              data={resumeData.skills}
              onChange={(skills) => setResumeData({ ...resumeData, skills })}
            />
            <ProjectsForm
              data={resumeData.projects}
              onChange={(projects) => setResumeData({ ...resumeData, projects })}
            />
            <ListForm
              title="Achievements"
              data={resumeData.achievements}
              onChange={(achievements) => setResumeData({ ...resumeData, achievements })}
              placeholder="Add an achievement"
            />
            <ListForm
              title="Extracurricular Activities"
              data={resumeData.activities}
              onChange={(activities) => setResumeData({ ...resumeData, activities })}
              placeholder="Add an activity"
            />
          </div>

          {/* Preview Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="prose max-w-none" ref={targetRef}>
              <MinimalTemplate data={resumeData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;