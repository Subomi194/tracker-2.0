"use client"

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';
import { usePathname } from "next/navigation";

export default function LandingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Sign in",
      path: "/login",
    },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-['DM_Sans'] ${scrolled ? 'bg-[#fdf8f3]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-default">
          <div className="w-8 h-8 rounded-full bg-rose-deep flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#fdf8f3]" />
          </div>
          <span className="font-['Playfair_Display'] font-bold text-rose-deep text-base tracking-tight">Hair Routine Tracker</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-rose-deep font-semibold"
                      : "text-[#1a1018]/65 hover:text-rose-deep"
                  }
                `}
              >
                {link.title}
              </Link>
            );
          })}

          <Link
            href="/register"
            className="bg-rose-deep text-[#fdf8f3] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3d2b6e]"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-rose-deep"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fdf8f3] border-t border-rose-deep/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`py-2
                  ${
                    isActive
                      ? "text-rose-deep font-semibold"
                      : "text-[#1a1018]/70"
                  }
                `}
              >
                {link.title}
              </Link>
            );
          })}

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="bg-rose-deep text-white py-3 rounded-2xl font-semibold text-center"
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}