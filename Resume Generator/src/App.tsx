import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { ResumeData, Template } from './types';
import { initialResumeData } from './utils/initialData';
import { templates } from './utils/templates';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    if (previewRef.current) {
      doc.html(previewRef.current, {
        callback: function (doc) {
          doc.save('resume.pdf');
        },
        x: 10,
        y: 10,
        width: 180,
        windowWidth: 1000
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Resume/CV Generator</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-4">
                <h2 className="text-2xl font-semibold text-white">Preview</h2>
              </div>
              <div className="p-6">
                <div ref={previewRef}>
                  <ResumePreview resumeData={resumeData} template={selectedTemplate} />
                </div>
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Print
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;