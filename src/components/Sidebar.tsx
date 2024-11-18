import React from "react";

interface SidebarProps {
  links: { name: string; icon: React.ReactNode; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div className="h-screen w-64 bg-[#2A2A29] text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 mt-4 space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="flex items-center gap-4 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a
          href="#logout"
          className="flex items-center gap-4 px-4 py-2 text-gray-300 hover:bg-red-600 hover:text-white rounded-lg"
        >
          {/* <LogoutIcon /> */}
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
