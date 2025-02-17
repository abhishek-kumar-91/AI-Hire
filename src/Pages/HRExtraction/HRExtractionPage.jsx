import React, { useState } from "react";
import { FaCopy, FaDownload } from "react-icons/fa";

const HRExtractionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [emails, setEmails] = useState([]);

  // Mock Email Extraction Function
  const extractEmails = () => {
    const sampleData = [
      { id: 1, name: "John Doe", email: "john.doe@example.com", job: "Frontend Developer", source: "LinkedIn" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com", job: "Backend Engineer", source: "Indeed" },
      { id: 3, name: "Michael Johnson", email: "michael.j@example.com", job: "UI/UX Designer", source: "LinkedIn" }
    ];
    setEmails(sampleData);
  };

  // Copy Email to Clipboard
  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Copied: ${email}`);
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
      ...emails.map((item) => [item.name, item.email, item.job, item.source])
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
      <div className="max-w-5xl mx-auto p-6  md:w-[60%]">
        {/* Search Bar */}
        <h2 className="text-2xl font-bold mb-4">Extract HR Emails</h2>
        <div className="flex flex-col gap-4 mb-6  md:w-full ">
          <div className="md:flex items-center gap-4 md:w-full">
            <input
              type="text"
              placeholder="Enter Company Name or Job Role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[90%]  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={extractEmails}
              className="bg-blue-600 mt-3 md:mt-0 w-[60%] py-2 text-white px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Extract Emails
            </button>
          </div>
        </div>

        {/* Data Cards (Responsive) */}
        {emails.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {emails.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Email: {item.email}</p>
                <p className="text-sm text-gray-600 mb-2">Job Title: {item.job}</p>
                <p className="text-sm text-gray-600 mb-2">Source: {item.source}</p>
                <button
                  onClick={() => copyToClipboard(item.email)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaCopy className="inline-block mr-1" /> Copy Email
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Export Buttons */}
        {emails.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={exportAsJson}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <FaDownload className="mr-2" /> Export JSON
            </button>
            <button
              onClick={exportAsCsv}
              className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
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
