import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ isSidebarOpen, setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Hamburger Button to Toggle Sidebar */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggle Sidebar on Mobile
      >
        <RxHamburgerMenu size={24} />
      </button>

      {/* Conditionally Render "Dashboard" */}
      {!isSidebarOpen && (
        <h1 className="text-xl">Dashboard</h1>
      )}
    </header>
  );
}
