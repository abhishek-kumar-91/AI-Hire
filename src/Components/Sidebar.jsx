import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";


export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out bg-white w-64 p-5 shadow-lg z-50 md:relative md:translate-x-0 md:w-1/5 md:flex md:flex-col md:h-full`}
    >
      {/* Add Hamburger Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setSidebarOpen(false)} // Close Sidebar
      >
        <CiCircleRemove size={24} />

      </button>

      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            to="/dashboard/jobs"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/applications"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            Applications
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
