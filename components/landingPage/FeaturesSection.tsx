"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';



export default function FeaturesSection() {
  const features = [
    { icon: "📋", title: 'Structured routine logging', body: 'Log wash days, treatments, protective styles, and everything in between — with the products you used and notes on how your hair responded.' },
    { icon: "📅", title: 'History grouped by month', body: 'Scroll through your full hair care history, organised chronologically. See the patterns in what you\'ve been doing.' },
    { icon: "📊", title: 'Live hair stats', body: 'Days since last wash. Days in your current protective style. Most used products. All calculated automatically.' },
    { icon: "🧴", title: 'Product library', body: 'Save your products once, tag them in entries with one tap. See exactly how often you reach for each one.' },
    { icon: "🔍", title: 'Search and filter', body: 'Find any entry by product, routine type, notes, or date. Your entire hair history, instantly searchable.' },
    { icon: "✦", title: 'More coming', body: 'Reminders, insights, style duration alerts, and progress tracking are on the roadmap.' },
  ];

  return (
    <section className="bg-cream py-24 px-6 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-4">What Hair Routine Tracker does</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1018] font-bold leading-tight mb-5">
            Everything your hair journal{' '}
            <em className="italic text-pink-accent">should be</em>
          </h2>
          <p className="text-[#7a6670] text-lg max-w-lg mx-auto leading-relaxed">
            Simple to use in under two minutes. Powerful enough to actually change how you understand your hair.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#2d1b4e]/5 hover:shadow-md hover:border-[#2d1b4e] hover:border-1.5 hover:-translate-y-0.5 transition-all">
              <div className="w-11 h-11 bg-blush-light rounded-xl flex items-center justify-center text-[#2d1b4e] mb-4">
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="font-semibold text-[#1a1018] mb-2">{f.title}</h3>
              <p className="text-[#7a6670] text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}