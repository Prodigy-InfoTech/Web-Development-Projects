import React from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { PersonalInfo } from '../../types/resume';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  data,
  onChange,
}) => {
  const handleChange = (field: keyof PersonalInfo) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({ ...data, [field]: e.target.value });
  };

  return (
    <Section title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={data.fullName}
          onChange={handleChange('fullName')}
          placeholder="John Doe"
          required
        />
        <Input
          label="Professional Title"
          value={data.title}
          onChange={handleChange('title')}
          placeholder="Senior Software Engineer"
          required
        />
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={handleChange('email')}
          placeholder="john@example.com"
          required
        />
        <Input
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={handleChange('phone')}
          placeholder="+1 (555) 123-4567"
          required
        />
        <Input
          label="Location"
          value={data.location}
          onChange={handleChange('location')}
          placeholder="New York, NY"
          required
        />
        <Input
          label="Portfolio Website"
          type="url"
          value={data.portfolio}
          onChange={handleChange('portfolio')}
          placeholder="https://portfolio.com"
        />
        <Input
          label="LinkedIn"
          value={data.linkedin}
          onChange={handleChange('linkedin')}
          placeholder="linkedin.com/in/johndoe"
        />
        <Input
          label="GitHub"
          value={data.github}
          onChange={handleChange('github')}
          placeholder="github.com/johndoe"
        />
      </div>
    </Section>
  );
};