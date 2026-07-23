"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';

export default function LandingCTA() {
  return (
    <section className="bg-[#fdf8f3] py-24 px-6 font-['DM_Sans']">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1018] font-bold mb-5">
          Your hair journey deserves to be{' '}
          <em className="italic text-pink-accent">remembered</em>
        </h2>
        <p className="text-[#7a6670] text-lg mb-10">Start logging in under a minute.</p>
        <Link
          href="/register"
          className="bg-rose-deep text-[#fdf8f3] px-10 py-4 rounded-full font-semibold text-base hover:bg-[#3d2b6e] transition-all hover:shadow-2xl hover:shadow-[#2d1b4e]/20 hover:-translate-y-0.5"
        >
          Create your account
        </Link>
      </div>
    </section>
  );
}