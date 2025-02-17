import React, { useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
import { FaEye, FaPaperPlane, FaClock, FaRobot } from "react-icons/fa";

const EmailOutreachPage = () => {
  const [emailContent, setEmailContent] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [status, setStatus] = useState([]);

  // Sample AI-generated cover letter function
  const generateCoverLetter = () => {
    setEmailContent(
      `Dear {Recruiter Name},<br/><br/>I am excited to apply for the opportunity at {Company}. My experience in frontend development aligns perfectly with your requirements. Let's connect to discuss further.<br/><br/>Best Regards,<br/>[Your Name]`
    );
  };

  // Handle email sending
  const sendEmail = () => {
    setStatus([...status, { email: emailContent, status: "Sent" }]);
    alert("Email Sent!");
  };

  // Handle scheduling email
  const scheduleEmail = () => {
    setStatus([...status, { email: emailContent, status: "Scheduled" }]);
    alert("Email Scheduled!");
  };

  // Handle TinyMCE editor change
  const handleEditorChange = (content) => {
    setEmailContent(content);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Automated Email Outreach</h2>

      {/* AI Cover Letter Generator */}
      <button
        onClick={generateCoverLetter}
        className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition mb-4"
      >
        <FaRobot /> Generate AI Cover Letter
      </button>

      {/* Email Editor */}
      {/* <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Email Editor</h3>
        <Editor
          apiKey="your-tinymce-api-key" // You can get your API key from the TinyMCE website
          value={emailContent}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "print",
              "preview",
              "anchor",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | alignleft aligncenter alignright | outdent indent | numlist bullist | link image",
          }}
          onEditorChange={handleEditorChange}
        />
      </div> */}

      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
        >
          <FaEye /> Preview
        </button>
        <button
          onClick={sendEmail}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <FaPaperPlane /> Send Now
        </button>
        <button
          onClick={scheduleEmail}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition"
        >
          <FaClock /> Schedule
        </button>
      </div>

      {/* Preview Mode */}
      {previewMode && (
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
          <h3 className="text-lg font-semibold mb-2">Preview</h3>
          <div
            dangerouslySetInnerHTML={{ __html: emailContent }}
            className="bg-white p-4 rounded-lg shadow"
          />
        </div>
      )}

      {/* Status Tracker */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Email Status Tracker</h3>
        {status.length > 0 ? (
          <ul className="bg-white shadow-lg rounded-lg p-4">
            {status.map((item, index) => (
              <li key={index} className="border-b py-2 flex justify-between">
                <span
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.email }}
                />
                <span
                  className={`px-3 py-1 rounded-full ${
                    item.status === "Sent"
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No emails sent yet.</p>
        )}
      </div>
    </div>
  );
};

export default EmailOutreachPage;
