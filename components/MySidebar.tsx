"use client";

import { useSidebar } from "./SidebarContext";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaRegBookmark, FaRegUser, FaCog } from "react-icons/fa";
// import { FaRegMessage } from "react-icons/fa6";
import { RiGitRepositoryLine } from "react-icons/ri";

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Overlay that closes sidebar when clicked */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-opacity-50 z-30 lg:bg-opacity-0 lg:pointer-events-none mt-20"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full mt-16 w-64 bg-gray-900 text-gray-200 p-2 z-50
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 flex flex-col`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* New Chat Button */}
          <button
            className="flex items-center gap-3 rounded-md border border-gray-600 p-3 text-sm hover:bg-gray-700 transition-colors mb-2 mx-2"
          >
            <FiPlus className="text-lg" />
            <span>New Repository Session</span>
          </button>

          {/* Recent Sessions */}
          <div className="px-2 mb-4">
            <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">Recent</h3>
            <nav className="flex flex-col gap-1">
              <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors">
                <RiGitRepositoryLine className="text-lg opacity-75" />
                <span className="truncate">main-project</span>
              </button>
              <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors">
                <RiGitRepositoryLine className="text-lg opacity-75" />
                <span className="truncate">docs-update</span>
              </button>
              <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors">
                <RiGitRepositoryLine className="text-lg opacity-75" />
                <span className="truncate">bugfix/login-flow</span>
              </button>
            </nav>
          </div>

          {/* Saved Items */}
          <div className="px-2 mb-4">
            <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">Saved</h3>
            <nav className="flex flex-col gap-1">
              <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors">
                <FaRegBookmark className="text-lg opacity-75" />
                <span className="truncate">Common Commands</span>
              </button>
              <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors">
                <FaRegBookmark className="text-lg opacity-75" />
                <span className="truncate">Merge Conflicts</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="p-2 border-t border-gray-700">
          <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors w-full">
            <FaCog className="text-lg opacity-75" />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 rounded-md p-3 text-sm hover:bg-gray-800 transition-colors w-full">
            <FaRegUser className="text-lg opacity-75" />
            <span>User Account</span>
          </button>
        </div>

        {/* Close Button */}
        <button 
          onClick={close} 
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-700"
          aria-label="Close sidebar"
        >
          <IoClose size={24} className="text-gray-300" />
        </button>
      </aside>
    </>
  );
}