"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';



export default function Hero () {
    return (
    <section className="min-h-screen bg-[#fdf8f3] flex items-center pt-16 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto w-full px-6 py-16 grid md:grid-cols-[55%_45%] gap-10 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 bg-rose-deep/8 text-rose-deep text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Heart className="w-3 h-3 fill-current" /> For every hair type · every gender · every journey
          </span>
          <h1 className="font-['Playfair_Display'] text-[3.2rem] md:text-[4.4rem] leading-[1.08] font-bold text-[#1a1018] mb-6">
            Finally know what&apos;s{' '}
            <em className="italic text-pink-accent">actually working</em>
            {' '}for your hair.
          </h1>
          <p className="text-[#7a6670] text-[1.1rem] leading-relaxed mb-10 max-w-100">
            Hair Routine Tracker turns scattered phone notes into a structured hair journal — track what you do, remember what works, and understand your hair over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/register"
              className="bg-rose-deep text-[#fdf8f3] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#3d2b6e] transition-all hover:shadow-xl hover:shadow-[#2d1b4e]/20 hover:-translate-y-0.5"
            >
              Start tracking
            </Link>
          </div>
          {/* Social proof */}
          {/* <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {['1632765854612-9b02b6ec2b15', '1535295972055-1c762f4483e5', '1640059567352-aa684b7fcc67', '1589156191108-c762ff4b96ab'].map((id, i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/photo-${id}?w=44&h=44&fit=crop&auto=format`}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border-2 border-[#fdf8f3] object-cover bg-[#ede6dc]"
                />
              ))}
            </div>
            <p className="text-sm text-[#7a6670]">
              <strong className="text-[#1a1018]">2,400+</strong> people tracking their hair journey
            </p>
          </div> */}
        </div>

        {/* Hero image + floating cards */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=520&h=600&fit=crop&auto=format"
            alt="Woman with beautiful natural afro hair"
            className="w-full h-135 object-cover rounded-3xl bg-[#ede6dc]"
          />
          {/* Floating stat: days in style */}
          <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl shadow-[#2d1b4e]/10 p-4 flex items-center gap-3 w-52">
            <div className="w-10 h-10 bg-rose-deep/10 rounded-xl flex items-center justify-center shrink-0">
              <Scissors className="w-5 h-5 text-rose-deep" />
            </div>
            <div>
              <p className="text-xs text-[#7a6670] font-medium">Days in mini twists</p>
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#2d1b4e]">14</p>
            </div>
          </div>
          {/* Floating stat: last wash */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-[#5C1E33]/10 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-deep/8 rounded-xl flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-rose-deep" />
            </div>
            <div>
              <p className="text-xs text-[#7a6670] font-medium">Last wash day</p>
              <p className="text-sm font-bold text-rose-deep">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}