"use client"

import Link from 'next/link'
import {
  Home, Plus, Clock, Package, Settings, LogOut, Menu, X,
  Search, Trash2, Sparkles, ChevronRight, ChevronLeft,
  Check, BookOpen, TrendingUp, Heart, Users, Zap, Star,
  Calendar, Droplets, Scissors, Eye, EyeOff, Edit3,
  AlertTriangle, RotateCcw, FlaskConical
} from 'lucide-react';


export default function AboutStorySection() {
  return (
    <section className="bg-rose-deep py-18 px-6 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="order-1">
          <p className="text-pink-accent text-sm font-bold uppercase tracking-widest mb-5">The story</p>
          <h2 className="font-['Playfair_Display'] text-4xl text-[#f5ede4] font-bold leading-tight mb-6">
            Built from a phone notes app and a real frustration
          </h2>
          <div className="space-y-4 text-[#F1DDE1] leading-relaxed">
            <p>
              Hair Routine Tracker started as a personal habit — tracking hair care in scattered phone notes because nothing structured existed. The problem was real: thousands of products, an ocean of advice, and no way to know what&apos;s working <em className="italic text-white/55">for your specific hair</em>.
            </p>
            <p>
              Most people repurchase products that did nothing, forget what worked brilliantly, and lose track of how long a protective style has been in. Hair Routine Tracker is your dedicated, structured hair journal.
            </p>
          </div>
        </div> 


        <div className="relative order-2 items-center space-y-4">

          <div className="bg-white rounded-2xl p-5 border border-[#2d1b4e]/5 hover:shadow-md hover:border-[#2d1b4e] hover:border-1.5 hover:-translate-y-0.5 transition-all">
            
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gray-400"> 
              📄 NOTES APP
            </div>

            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-bold text-sm">
                  Wash day · Tue 15 July
                </p>

                <div className="mt-1 text-sm ">
                  <p>· protein</p>
                  <p>· trim</p>
                  <p>· flat twist</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm">
                  Fri 1 Aug
                </p>

                <div className="mt-1 text-sm">
                  <p>· mini twists w extension</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm">
                  Sat 4 Oct
                </p>

                <div className="mt-1 text-sm">
                  <p>· take out mini braids</p>
                  <p>· protein wash</p>
                  <p>· twistout for sunday</p>
                </div>
              </div>
            </div>
          </div>
          

          {/* Arrow */}
          <div className="animate-bounce text-blush-light text-center">
            ↓
          </div>

          {/* Dashboard Card */}
          <div className="rounded-4xl bg-rose-deep-hover p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            {/* Top */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif ">
                  Hair Routine Tracker
                </h3>

                <p className="text-xs text-purple-200">
                  Sat, 4 Oct 2025
                </p>
              </div>

              {/* Tags */}
              <div className="mb-3 flex flex-wrap gap-3">

                <span className="rounded-full bg-purple-500/20 px-4 py-2 text-xs text-purple-200">
                  Wash day
                </span>

                <span className="rounded-full bg-orange-500/20 px-4 py-2 text-xs text-orange-200">
                  Protein treatment
                </span>

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-xs text-green-200">
                  Protective style
                </span>

              </div>

              {/* Notes */}
              <p className="mb-3 text-sm text-purple-100">
                Took out mini braids. Protein wash. Twist-out prepped
                for Sunday.
              </p>

              {/* Products */}
              <div className="mb-3 flex flex-wrap gap-3">
                {[
                  "Aphogee protein",
                  "Cantu leave-in",
                  "Eco styler",
                ].map((product) => (
                  <span
                    key={product}
                    className="rounded-xl border border-white/20 px-4 py-2 text-xs text-purple-100"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3">

                <div className="grid grid-cols-3 gap-6 text-center">

                  <div>
                    <p className="text-lg font-bold text-purple-300">
                      17
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-purple-200">
                      Days Since Wash
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-purple-300">
                      6
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-purple-200">
                      Entries Logged
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-purple-300">
                      4×
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-purple-200">
                      Cantu Used
                    </p>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}