import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Check if more jobs exist

  const observer = useRef();

  // **Fetch jobs from the backend**
  const fetchJobs = async (pageNumber = 1, isNewSearch = false) => {
    try {
      setLoading(true);

      const { data } = await axios.get("http://localhost:3000/api/users/jobs", {
        params: {
          page: pageNumber,
          search: searchTerm,
          location: locationFilter,
          type: jobTypeFilter,
          experience: experienceFilter,
        },
      });

      if (data.jobs.length === 0) {
        setHasMore(false); // No more jobs to fetch
      } else {
        setJobs((prevJobs) => (isNewSearch ? data.jobs : [...prevJobs, ...data.jobs])); // Reset if new search
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs when page changes
  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  // **Trigger search when filters change**
  const handleSearch = () => {
    setJobs([]); // Reset jobs list
    setPage(1); // Reset pagination
    setHasMore(true);
    fetchJobs(1, true); // Fetch fresh results
  };

  // **Load more jobs when scrolling reaches the bottom**
  const lastJobRef = useCallback(
    (node) => {
      if (loading || !hasMore) return;
      
      if (observer.current) observer.current.disconnect(); // Disconnect previous observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // Load the next page
        }
      });

      if (node) observer.current.observe(node); // Observe last job card
    },
    [loading, hasMore]
  );

  return (
    <div className="w-full mt-16 h-auto bg-gray-100 md:items-end flex flex-col p-6">
      {/* Search & Filter Section */}
      <div className="w-full flex flex-col md:flex-row md:w-[80%] gap-4 mb-6">
        <input
          type="text"
          placeholder="Search job title or company..."
          className="border px-2 py-3 rounded w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border px-2 py-3 cursor-pointer rounded w-full md:w-1/6"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Zone</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="eu">Europe</option>
        </select>
        <select
          className="border px-2 cursor-pointer py-3 rounded w-full md:w-1/6"
          value={jobTypeFilter}
          onChange={(e) => setJobTypeFilter(e.target.value)}
        >
          <option value="">Job Type</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select
          className="border px-2 py-3 cursor-pointer rounded w-full md:w-1/6"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option value="" >Experience Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-500 cursor-pointer text-white px-4 py-3 rounded w-full md:w-1/6"
        >
          Search
        </button>
      </div>

      {/* Job Listings Section */}
      {jobs.length > 0 ? (
        <div className="space-y-4  md:w-[80%]">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              ref={index === jobs.length - 1 ? lastJobRef : null} // Observe last job card
              className="p-4 rounded flex gap-4 shadow-2xl bg-white flex-col md:flex-row justify-between"
            >
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-600">
                  {job.company} - {job.location || "Unknown Location"}
                </p>
                <p className="text-green-600 font-semibold">
                  {job.salaryPredicted || "Salary not disclosed"}
                </p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-0">
                <button className="bg-gray-200 px-4 py-2 rounded cursor-pointer">Save Job</button>
               
                <a
                  href={job.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 flex items-center py-2 rounded"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 text-lg">No jobs found</p>
      )}

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-600 mt-4">Loading more jobs...</p>}
    </div>
  );
};

export default JobPage;
