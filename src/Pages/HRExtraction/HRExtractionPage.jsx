import React, { useState, useEffect } from "react";
import { FaCopy, FaDownload } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const HRExtractionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [emails, setEmails] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch recommendations from API
  useEffect(() => {
    if (searchTerm.length > 2) {
      axios
        .get(`http://localhost:3000/api/users/search?query=${searchTerm}&page=1&limit=5`)
        .then((res) => {
          setSuggestions(res.data.hrDetails || []);
          setShowDropdown(true); // Show dropdown when searching
        })
        .catch(() => setSuggestions([]));
    } else {
      setSuggestions([]);
      setShowDropdown(false); // Hide dropdown if search term is cleared
    }
  }, [searchTerm]);

  // Fetch selected HR details
  const extractEmails = () => {
    if (!selectedSuggestion) return;
    axios
      .get(`http://localhost:3000/api/users/search?query=${selectedSuggestion}&page=1&limit=10`)
      .then((res) => setEmails(res.data.hrDetails || []))
      .catch(() => setEmails([]));
  };

  // Copy Email to Clipboard
  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied successfully");
  };

  // Export Data as JSON
  const exportAsJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(emails))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "hr_emails.json";
    link.click();
  };

  // Export Data as CSV
  const exportAsCsv = () => {
    const csvContent = [
      ["Recruiter Name", "Email", "Job Title", "Source"],
      ...emails.map((item) => [item.name, item.email, item.job, item.source]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hr_emails.csv";
    link.click();
  };

  return (
    <div className="flex justify-center bg-gray-100 mt-16 md:h-screen">
      <div className="max-w-5xl mx-auto p-6 md:w-[60%]">
        <h2 className="text-2xl font-bold mb-4">Extract HR Emails</h2>
        <div className="flex flex-col gap-4 mb-6 md:w-full">
          <div className="relative md:flex items-center gap-4 md:w-full">
            <input
              type="text"
              placeholder="Enter HR Name or Company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[90%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute top-12 left-0 w-full md:w-[90%] bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-auto z-10">
                {suggestions.map((item) => (
                  <li
                    key={item.email}
                    onClick={() => {
                      setSelectedSuggestion(item.name);
                      setSearchTerm(item.name);
                      setShowDropdown(false); // Close dropdown only when selecting an item
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item.name} - {item.company}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={extractEmails}
              disabled={!selectedSuggestion}
              className="bg-blue-600 cursor-pointer mt-3 md:mt-0 w-[60%] py-2 text-white px-6 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              Extract Emails
            </button>
          </div>
        </div>

        {emails.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {emails.map((item) => (
              <div key={item.email} className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Email: {item.email}</p>
                <p className="text-sm text-gray-600 mb-2">Job Title: {item.job}</p>
                <p className="text-sm text-gray-600 mb-2">Source: {item.source}</p>
                <button
                  onClick={() => copyToClipboard(item.email)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  <FaCopy className="inline-block mr-1" /> Copy Email
                </button>
              </div>
            ))}
          </div>
        )}

        {emails.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={exportAsJson}
              className="flex items-center cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <FaDownload className="mr-2" /> Export JSON
            </button>
            <button
              onClick={exportAsCsv}
              className="flex items-center cursor-pointer bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              <FaDownload className="mr-2" /> Export CSV
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HRExtractionPage;
