// Header.tsx
"use client";

import { IoMenu } from "react-icons/io5";
import { useSidebar } from "./SidebarContext";

type HeaderProps = {
  className?: string;
};

export default function Header({ className = "" }: HeaderProps) {
  const { toggle } = useSidebar();

  return (
    <header
      className={`flex items-center justify-between px-4 py-3 bg-gray-800 text-white shadow-md z-40 ${className}`}
    >
      <button
        onClick={toggle}
        className="p-2 rounded-md hover:bg-gray-700 transition-colors lg:hidden"
        title="Toggle sidebar"
        aria-label="Toggle sidebar"
      >
        <IoMenu size={24} className="text-gray-200" />
      </button>
      
      {/* Desktop toggle button - only visible on large screens */}
      <button
        onClick={toggle}
        className="hidden lg:block p-2 rounded-md hover:bg-gray-700 transition-colors"
        title="Toggle sidebar"
        aria-label="Toggle sidebar"
      >
        <IoMenu size={24} className="text-gray-200" />
      </button>
      
      <h1 className="text-lg font-semibold text-gray-100">Git Playground</h1>
      <div className="w-6" /> {/* spacer for symmetry */}
    </header>
  );
}