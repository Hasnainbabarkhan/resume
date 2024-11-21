import React, { useState, useEffect } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import dp from "../lib/assets/pic.JPG";

const linkClasses =
  "flex items-center gap-1 font-semibold px-3 py-2 hover:underline text-center";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hamburger text-2xl p-3 absolute top-4 left-4 z-50 cursor-pointer text-white"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={classnames(
          "sidebar bg-gray-900 border-r border-gray-300 w-[250px] p-3 flex flex-col items-center text-white fixed top-0 left-0 h-screen overflow-y-auto z-[10]",
          { "transform translate-x-0": isOpen, "transform -translate-x-full": !isOpen }
        )}
      >
        {/* Profile Picture */}
        <img
          src={dp}
          alt="Profile"
          className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover"
        />

        {/* User Information */}
        <div className="flex-1 py-5 flex flex-col">
          <h1 className="text-center font-semibold text-3xl text-blue-600">
            Hasnain Babar
          </h1>
          <p className="text-l font-light text-white">Frontend Developer</p>

          {/* Divider */}
          <div className="pt-2 mt-3 border-t border-gray-300"></div>

          {/* Sidebar Links */}
          <div className="flex flex-col items-center w-full">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-300 mb-5">
          <p className="text-sm text-center font-light">
            Copyright 2024 All rights reserved Developed by{" "}
            <a
              href="https://linkedin.com/in/hasnain-babar-2b9b26306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Hasnain Babar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classnames(
        pathname === item.path ? "text-white underline" : "text-gray-500",
        `${linkClasses} text-sm`
      )}
    >
      <span className="text-xl mr-2">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
