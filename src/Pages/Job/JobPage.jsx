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

    <div className="md:-w-full mt-16 h-screen md:justify-end bg-gray-100 md:flex md:my-16">

   
        <div className="p-2   flex flex-col ">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search job title or company..."
          className=" border px-2 py-3 md:px-2 md:py-0  rounded w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="p-3 md:p-0 border rounded w-full md:w-1/6">
          <option>On-site</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
        <select className="p-3 md:p-0 border rounded w-full md:w-1/6">
          <option>Zone</option>
          <option>India</option>
          <option>USA</option>
          <option>Europe</option>
        </select>
        <select className="p-3 md:p-0 border rounded w-full md:w-1/6">
          <option>Junior Level</option>
          <option>Mid-Level </option>
          <option>Senior Level</option>
          <option>Leadership & Management</option>
        </select>

        <select className="p-3 md:p-0 border rounded w-full md:w-1/6">
          <option>24 Hours</option>
          <option>3 Days</option>
          <option>1 Week</option>
          
        </select>
        <select className=" p-3 md:p-0 border rounded w-full md:w-1/6">
          <option>Off-Campus</option>
          <option>Walk-in</option>
          <option>Virtual</option>
          
        </select>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Search
        </button>
      </div>

      {/* Job Listings Section */}
      <div className="space-y-4   ">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 rounded flex gap-4 shadow-2xl bg-white flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-green-600 font-semibold">{job.salary}</p>
            </div>
            <div className="flex gap-3 mt-3 md:mt-0">
              <button className="bg-gray-200 px-4 py-2 rounded md:px-2 md:w-1/1 md:h-1/2">Save Job</button>
              <button className="bg-blue-500 text-white px-4 py-2 md:px-2 md:w-1/1 md:h-1/2 rounded">Extract HR Email</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="bg-gray-300 px-6 py-2 rounded">Load More Jobs</button>
      </div>
    </div>
    
    </div>
  );
};

export default JobPage;
