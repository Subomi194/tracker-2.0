"use client";

import { useSidebar } from "@/context/SidebarContext";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { expanded } = useSidebar();

  return (
    <div
      className={`
        flex flex-col flex-1 transition-all duration-300 sm:overflow-hidden
        ${expanded ? "md:ml-64" : "md:ml-16"}
      `}
    >
      <Navbar />
      <main className="flex-1 pt-20 px-6 py-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;