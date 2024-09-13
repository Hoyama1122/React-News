import { FaRegNewspaper, FaBars, FaApple } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaHome, FaCar, FaRocket } from "react-icons/fa"; // Import specific icons
const Navlink = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navitem = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/tesla", name: "Tesla", icon: <FaCar /> },
    { path: "/apple", name: "Apple", icon: <FaApple /> },
    { path: "/techcrunch", name: "TechCrunch", icon: <FaRocket /> },
  ];

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-black">
        <nav className="px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-white flex items-center gap-2"
          >
            News
            <span>
              <FaRegNewspaper color="orange" />
            </span>
          </Link>

          {/* navitem for lg (large screens) */}
          <ul className="hidden md:flex gap-12 text-lg text-white capitalize">
            {navitem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 duration-200 flex items-center gap-2"
                      : "hover:text-orange-500 duration-200 flex items-center gap-2"
                  }
                >
                  {item.icon} {/* Display the icon here */}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Burger icon for sm (small screens) */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            {isSidebarOpen ? <IoClose size={20} /> : <FaBars size={20} />}
          </button>
        </nav>

        {/* Sidebar for small screens */}
        <div
          className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="px-4 py-4">
            <a className="text-3xl font-bold text-white flex items-center gap-2">
              News
              <span>
                <FaRegNewspaper color="orange" />
              </span>
            </a>
          </div>

          {/* Sidebar navigation items */}
          <ul className="px-4 py-4">
            {navitem.map((item, index) => (
              <li key={index} className="py-2">
                <NavLink
                  to={item.path}
                  onClick={toggleSidebar} // Close sidebar on item click
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 duration-300 hover:translate-x-2 flex items-center gap-2"
                      : "hover:text-orange-500 duration-300 hover:translate-x-2 flex items-center gap-2"
                  }
                >
                  {item.icon} {/* Display the icon here */}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navlink;
