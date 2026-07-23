"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';



export default function ProblemsSection() {
  const items = [
    { icon: "🕰️" , title: 'Forgetting when you last washed', body: "Has it been a week or three? Your hair knows. Now you will too." },
    { icon: "🧴", title: 'Repurchasing products that did nothing', body: "Without a log, you buy by memory — and memory isn't reliable." },
    { icon: "📍", title: 'Losing track of how long a style has been in', body: "Protective styles need time limits. Hair Routine Tracker tracks them for you." },
  ];

  return (
    <section className="bg-rose-deep py-24 px-6 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-5">Sound familiar?</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-bold leading-tight mb-7">
            Most hair care lives in scattered phone notes.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            You try a new deep conditioner and your hair feels incredible. Two months later you can&apos;t remember which one it was. You repurchase something that did nothing. Hair Routine Tracker was built to fix exactly that.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/7 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div>
                <p className="text-white font-semibold mb-1 text-sm">{item.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}