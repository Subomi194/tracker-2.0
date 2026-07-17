"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  expanded: boolean;
  toggle: () => void;
};


const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(prev => !prev);

  useEffect(() => {
  if (window.innerWidth >= 768) {
    setExpanded(true);
  }
}, []);

  return (
    <SidebarContext.Provider value={{ expanded, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
  return ctx;
};