import React, { useState } from 'react';

// Dummy Data for Jobs (replace with your data source if needed)
const savedJobsData = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', link: '/job/1' },
  { id: 2, title: 'Backend Developer', company: 'Company B', link: '/job/2' },
];

const appliedJobsData = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', status: 'Applied' },
  { id: 2, title: 'Backend Developer', company: 'Company B', status: 'Interview Scheduled' },
  { id: 3, title: 'Full Stack Developer', company: 'Company C', status: 'Hired' },
];

// Saved Jobs Component (For Desktop & Mobile)
const SavedJobs = ({ jobs, onRemove }) => (
  <div className="saved-jobs">
    <h2 className="text-2xl font-bold mb-6">Saved Jobs (💾)</h2>

    {/* Desktop Layout */}
    <div className="hidden md:block">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4">Job Title</th>
            <th className="py-2 px-4">Company</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="py-2 px-4">{job.title}</td>
              <td className="py-2 px-4">{job.company}</td>
              <td className="py-2 px-4">
                <a href={job.link} className="text-blue-500 mr-2">
                  Apply Now
                </a>
                <button
                  className="text-red-500"
                  onClick={() => onRemove(job.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Layout */}
    <div className="md:hidden">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h4 className="font-semibold text-lg">{job.title}</h4>
          <p className="text-sm text-gray-500">{job.company}</p>
          <div className="mt-2">
            <a href={job.link} className="bg-blue-600 text-white py-1 px-2 rounded-full text-sm mr-2">
              Apply Now
            </a>
            <button
              className="bg-red-600 text-white py-1 px-2 rounded-full text-sm"
              onClick={() => onRemove(job.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Applied Jobs Component (For Desktop & Mobile)
const AppliedJobs = ({ jobs, onFollowUp }) => (
  <div className="applied-jobs">
    <h2 className="text-2xl font-bold mb-6">Applied Jobs (📌)</h2>

    {/* Desktop Layout */}
    <div className="hidden md:block">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4">Job Title</th>
            <th className="py-2 px-4">Company</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="py-2 px-4">{job.title}</td>
              <td className="py-2 px-4">{job.company}</td>
              <td className="py-2 px-4">
                <span className={`status-tag ${job.status.toLowerCase()}`}>{job.status}</span>
              </td>
              <td className="py-2 px-4">
                {job.status !== 'Hired' && (
                  <button
                    className="text-green-500"
                    onClick={() => onFollowUp(job.id)}
                  >
                    Follow Up
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Layout */}
    <div className="md:hidden">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h4 className="font-semibold text-lg">{job.title}</h4>
          <p className="text-sm text-gray-500">{job.company}</p>
          <div className="flex items-center justify-between mt-2">
            <span className={`status-tag ${job.status.toLowerCase()}`}>{job.status}</span>
            {job.status !== 'Hired' && (
              <button
                className="bg-green-600 text-white py-1 px-2 rounded-full text-sm"
                onClick={() => onFollowUp(job.id)}
              >
                Follow Up
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Application Page (ApplicationPage.jsx)
const ApplicationPage = () => {
  const [savedJobs, setSavedJobs] = useState(savedJobsData);
  const [appliedJobs, setAppliedJobs] = useState(appliedJobsData);

  // Function to remove saved job
  const removeSavedJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  // Function to simulate sending a follow-up email
  const followUpJob = (id) => {
    alert(`Follow-up email sent for job ID: ${id}`);
  };

  return (
    <div className="application-page p-4">
      <h1 className="text-3xl font-bold mb-8">Application Dashboard</h1>
      <SavedJobs jobs={savedJobs} onRemove={removeSavedJob} />
      <AppliedJobs jobs={appliedJobs} onFollowUp={followUpJob} />
    </div>
  );
};

export default ApplicationPage;
