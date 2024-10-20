import { ResumeData } from '../types';

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
  },
  education: [
    {
      institution: '',
      degree: '',
      year: '',
    },
  ],
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  skills: [
    {
      name: '',
    },
  ],
};