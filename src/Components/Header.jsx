import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust path as needed
import { toast } from "react-toastify";

export default function Header({ isSidebarOpen, setSidebarOpen }) {
  const [isOpen, setOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
    toast.success("Logged out successfully");
    setOpen(false); // Close dropdown after logout
  };

  return (
    <header className="fixed w-full flex items-center justify-between bg-white p-4 shadow-md z-10">
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <RxHamburgerMenu size={24} />
      </button>
      <div className="flex justify-end flex-wrap-reverse px-4 md:w-full">
        <div className="flex gap-2 justify-center items-center">
          <Link to="/dashboard" className="text-xl font-bold text-blue-600">
            AIHire
          </Link>
          <IoIosNotifications size={24} />
          <RxAvatar
            size={24}
            className="cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-y-14 right-0 bg-white shadow-2xl w-48 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2 p-4">
            <Link
              to="/dashboard/setting"
              className="px-4 py-2 border-b-2 border-gray-200 cursor-pointer hover:bg-gray-200 duration-300 transition-all"
              onClick={() => setOpen(false)}
            >
              Profile Setting
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-sm bg-red-500 cursor-pointer text-white hover:bg-red-600 duration-300 transition-all text-left"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}