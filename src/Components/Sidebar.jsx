import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";


export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out bg-white w-64 p-5 shadow-lg z-50  md:translate-x-0 md:w-1/5 md:fixed md:flex md:flex-col md:h-full`}
    >
      {/* Add Hamburger Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setSidebarOpen(false)} // Close Sidebar
      >
        <CiCircleRemove size={24} />

      </button>

      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex flex-col gap-2 py-8">
        <Link
            to="/dashboard"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/dashboard/jobs"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
           Finding Jobs
          </Link>
        <Link
            to="/dashboard/hr"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            HR Email Finding
          </Link>
        <Link
            to="/dashboard/email-outreach"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            AI Automate Email Sending
          </Link>
        <Link
            to="/dashboard/applications"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
           Application History
          </Link>
          <Link
            to="/dashboard/resume-analyze"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
           AI Resume Analyze
          </Link>
          <Link
            to="/dashboard/setting"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
           Profile Setting
          </Link>
          <Link
            to="/"
            className="p-2 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600 transition-colors"
          >
           Logout
          </Link>
          </div>
    </div>
  );
}
