import { Link, useNavigate, useLocation } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust path as needed
import { toast } from "react-toastify";

export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-white w-64 p-5 shadow-lg z-50 md:translate-x-0 md:w-1/5 md:fixed md:flex md:flex-col md:h-full`}
    >
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setSidebarOpen(false)}
      >
        <CiCircleRemove size={24} />
      </button>

      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex flex-col gap-2 py-8">
        <Link
          to="/dashboard"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/dashboard/jobs"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          Finding Jobs
        </Link>
        <Link
          to="/dashboard/hr"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          HR Email Finding
        </Link>
        <Link
          to="/dashboard/email-outreach"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          AI Automate Email Sending
        </Link>
        <Link
          to="/dashboard/applications"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          Application History
        </Link>
        <Link
          to="/dashboard/resume-analyze"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          AI Resume Analyze
        </Link>
        <Link
          to="/dashboard/setting"
          state={{ from: location.pathname }}
          className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
        >
          Profile Setting
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600 transition-colors text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
}