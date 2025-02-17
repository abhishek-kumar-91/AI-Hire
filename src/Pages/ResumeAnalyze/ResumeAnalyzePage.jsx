import React, { useState } from 'react';

const ResumeAnalyzePage= () => {
  const [file, setFile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [score, setScore] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // Mock analysis logic for now
      analyzeResume(uploadedFile);
    }
  };

  const analyzeResume = (file) => {
    // This would be replaced with an AI-powered analysis logic
    const mockSuggestions = [
      'Add a professional summary.',
      'Use bullet points to list skills.',
      'Ensure correct formatting of dates.',
    ];
    const mockScore = 85; // Score out of 100

    setSuggestions(mockSuggestions);
    setScore(mockScore);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Resume Analyzer</h2>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload your Resume (PDF/DOC)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        {file && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">Resume File: {file.name}</div>
              <div className="text-gray-500 text-sm">{file.size / 1024} KB</div>
            </div>
            {score !== null && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Resume Score: {score}/100</h3>
                <div className="bg-green-100 text-green-700 text-sm p-2 rounded-md mt-2">
                  Scoring based on content, structure, and design.
                </div>
              </div>
            )}
            {suggestions.length > 0 && (
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold mb-2">AI Suggestions:</h3>
                <ul className="list-disc pl-5 text-sm">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="mb-2">{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={() => alert('Download functionality goes here')}
              >
                Download Analyzed Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzePage;
