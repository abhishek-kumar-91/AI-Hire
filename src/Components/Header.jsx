import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ isSidebarOpen, setSidebarOpen }) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <header className="fixed w-full flex items-center justify-between bg-white p-4 shadow-md">
      {/* Hamburger Button to Toggle Sidebar */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggle Sidebar on Mobile
      >
        <RxHamburgerMenu size={24} />
      </button>
    <div className="flex justify-end flex-wrap-reverse px-4 md:w-full">
    <div className="flex gap-2 justify-center">
    <a href="/dashboard" className="text-xl font-bold text-blue-600">AIHire</a>
    <IoIosNotifications size={24} />

    <RxAvatar size={24} className="cursor-pointer" onClick={() => setOpen(!isOpen)} />
    </div>


    </div>

    {
      isOpen && <div className={`fixed inset-y-14 right-0 bg-white shadow-2xl h-30 ${isOpen ? "translate-x-0" : "-translate-x-full"}  transition-transform duration-300 ease-in-out`}>
      <div className="flex flex-col gap-2 p-4">
      <button className="px-4 py-2 border-b-2 border-blue-500 cursor-pointer hover:bg-gray-400 duration-300 transition-all">Profile Setting</button>
      <button className="px-4 py-2 rounded-sm bg-red-500 cursor-pointer text-white hover:bg-red-400 duration-300 transition-all">Logout</button>
      </div>
    </div>
    }
    
     
    </header>
  );
}
