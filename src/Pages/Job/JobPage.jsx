import React, { useState } from "react";


const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$80K - $100K",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "InnovateX",
      location: "New York, USA",
      salary: "$90K - $120K",
    },
  ]);

  return (

    
        <div className="p-6 max-w-5xl mx-auto">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search job title or company..."
          className="p-3 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="p-3 border rounded w-full md:w-1/4">
          <option>Location</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Search
        </button>
      </div>

      {/* Job Listings Section */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border rounded flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-green-600 font-semibold">{job.salary}</p>
            </div>
            <div className="flex gap-3 mt-3 md:mt-0">
              <button className="bg-gray-200 px-4 py-2 rounded">Save Job</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Extract HR Email</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="bg-gray-300 px-6 py-2 rounded">Load More Jobs</button>
      </div>
    </div>
    
    
  );
};

export default JobPage;
