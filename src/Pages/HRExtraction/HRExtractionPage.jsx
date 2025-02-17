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
    <div className="max-w-5xl mx-auto p-6">
      {/* Search Bar */}
      <h2 className="text-2xl font-bold mb-4">Extract HR Emails</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Company Name or Job Role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={extractEmails}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Extract Emails
        </button>
      </div>

      {/* Data Table */}
      {emails.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b">Recruiter Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Job Title</th>
                <th className="p-3 border-b">Source</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 flex items-center gap-2">
                    {item.email}
                    <FaCopy
                      className="text-gray-500 cursor-pointer hover:text-blue-500"
                      onClick={() => copyToClipboard(item.email)}
                    />
                  </td>
                  <td className="p-3">{item.job}</td>
                  <td className="p-3">{item.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Export Buttons */}
      {emails.length > 0 && (
        <div className="mt-4 flex gap-4">
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
  );
};

export default HRExtractionPage;
