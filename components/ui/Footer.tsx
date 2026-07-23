"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-[#1a1018] py-10 px-6 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-pink-accent flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-['Playfair_Display'] text-white font-bold">Hair Routine Tracker</span>
        </div>
        <div className="flex gap-6 text-white/45 text-sm">
          {/* <button onClick={onAbout} className="hover:text-white transition-colors">About</button>
          <button onClick={onLogin} className="hover:text-white transition-colors">Sign in</button> */}
        </div>
        <p className="text-white/25 text-xs">© 2025 Hair Routine Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
}