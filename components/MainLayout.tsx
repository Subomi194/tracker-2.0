"use client";

import { useSidebar } from "@/context/SidebarContext";
import { usePathname } from 'next/navigation'
import Navbar from "./Navbar";
import Footer from "./ui/Footer";

type MainLayoutProps = {
  children: React.ReactNode
  onSearch?: (query: string) => void
}

const MainLayout = ({ children, onSearch }: MainLayoutProps) => {
  const pathname = usePathname();
  const { expanded } = useSidebar();

  const isHome = pathname === "/dashboard";

  return (
    <div
      className={`
        flex flex-col flex-1 transition-all duration-300 sm:overflow-hidden
        ${expanded ? "md:ml-64" : "md:ml-16"}
      `}
    >
      {!isHome && <Navbar onSearch={onSearch} />}
      <main className={` flex-1 px-6 py-8 overflow-y-auto ${!isHome ? "pt-20" : "pt-6"}`}>
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;