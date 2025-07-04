"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronLeft, ChevronRight, Zap, Shield, Globe, TrendingUp, Star, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WaitlistModal from "./WaitlistModal";

export default function Hero() {
  // Typewriter/backspace effect for headline
  const words = ["Business.", "Enterprise.", "Startup."];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // Dashboard slider state
  const [slide, setSlide] = useState(0);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const dashboards = [
    // Dashboard 1: Existing
    (
      <div className="bg-white rounded-2xl shadow-2xl border p-6 md:p-8 w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-white">Dashboard</span>
          <span className="text-xs text-gray-300">Dec 20 - 26</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Conversions</span>
            <span className="text-green-600 text-xs font-semibold">+ 0.85 %</span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-2">67,894</div>
          {/* Simple Bar Chart */}
          <div className="flex items-end h-20 gap-1">
            <div className="bg-blue-500 rounded w-4 h-14" />
            <div className="bg-blue-500 rounded w-4 h-10" />
            <div className="bg-blue-500 rounded w-4 h-12" />
            <div className="bg-blue-500 rounded w-4 h-5" />
            <div className="bg-blue-500 rounded w-4 h-9" />
            <div className="bg-blue-500 rounded w-4 h-20" />
            <div className="bg-blue-500 rounded w-4 h-16" />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
            <span className="text-xs text-gray-300">Total Sessions</span>
            <span className="text-xl font-bold text-white">12,354</span>
            <span className="text-green-400 text-xs font-semibold">+ 0.85 %</span>
          </div>
          <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
            <span className="text-xs text-gray-300">Average Requests</span>
            <span className="text-xl font-bold text-white">74.06</span>
            <span className="text-red-400 text-xs font-semibold">- 3.90 %</span>
          </div>
          <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
            <span className="text-xs text-gray-300">Total Users</span>
            <span className="text-xl font-bold text-white">839</span>
          </div>
          <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
            <span className="text-xs text-gray-300">New Users</span>
            <span className="text-xl font-bold text-white">440</span>
          </div>
        </div>
      </div>
    ),
    // Dashboard 2: Inspired by new screenshot
    (
      <div className="bg-white rounded-2xl shadow-2xl border p-6 md:p-8 w-full">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-300">Total Cases</span>
            <span className="text-lg font-bold text-white">14,443</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-300">Open Cases</span>
            <span className="text-lg font-bold text-white">7,456</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-300">Closed Cases</span>
            <span className="text-lg font-bold text-white">18,869</span>
          </div>
        </div>
        {/* Bar Chart */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Total Cases</span>
            <span className="text-green-400 text-xs font-semibold">+ 6%</span>
          </div>
          <div className="text-2xl font-extrabold text-white mb-2">234.02K</div>
          <div className="flex items-end h-20 gap-1">
            <div className="bg-blue-500 rounded w-4 h-16" />
            <div className="bg-blue-500 rounded w-4 h-14" />
            <div className="bg-blue-500 rounded w-4 h-14" />
            <div className="bg-blue-500 rounded w-4 h-10" />
            <div className="bg-blue-500 rounded w-4 h-18" />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>HR</span><span>Integrity</span><span>Misuse</span><span>Audit</span><span>ER</span>
          </div>
        </div>
        {/* Line Chart (mock) */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Incident Frequency Rate</span>
            <span className="text-green-400 text-xs font-semibold">2022</span>
          </div>
          <div className="w-full h-20 flex items-end">
            {/* Line chart mock: dots and lines */}
            <div className="w-full flex items-end h-full">
              <div className="h-8 w-2 bg-blue-300 rounded-full mx-0.5" />
              <div className="h-10 w-2 bg-blue-400 rounded-full mx-0.5" />
              <div className="h-12 w-2 bg-blue-500 rounded-full mx-0.5" />
              <div className="h-6 w-2 bg-blue-300 rounded-full mx-0.5" />
              <div className="h-14 w-2 bg-blue-600 rounded-full mx-0.5" />
              <div className="h-10 w-2 bg-blue-400 rounded-full mx-0.5" />
              <div className="h-8 w-2 bg-blue-300 rounded-full mx-0.5" />
            </div>
          </div>
        </div>
        {/* Heatmap (mock) */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Traffic Channels</span>
          </div>
          <div className="grid grid-cols-10 gap-0.5">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded ${i % 7 === 0 ? "bg-blue-600" : i % 5 === 0 ? "bg-blue-400" : "bg-blue-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  ];

  useEffect(() => {
    let typingSpeed = 90;
    let deletingSpeed = 50;
    let pause = 1200;
    let timeout: NodeJS.Timeout;
    const fullWord = words[currentWord];

    if (!isDeleting && displayed !== fullWord) {
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed !== "") {
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayed === fullWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentWord, words]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((prev) => (prev + 1) % dashboards.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [slide, dashboards.length]);

  // Only keep the first dashboard card (Dashboard)
  const dashboard = (
    <div className="bg-white rounded-2xl shadow-2xl border p-6 md:p-8 w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-white">Dashboard</span>
        <span className="text-xs text-gray-300">Dec 20 - 26</span>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300 text-sm">Conversions</span>
          <span className="text-green-600 text-xs font-semibold">+ 0.85 %</span>
        </div>
        <div className="text-3xl font-extrabold text-white mb-2">67,894</div>
        {/* Simple Bar Chart */}
        <div className="flex items-end h-20 gap-1">
          <div className="bg-blue-500 rounded w-4 h-14" />
          <div className="bg-blue-500 rounded w-4 h-10" />
          <div className="bg-blue-500 rounded w-4 h-12" />
          <div className="bg-blue-500 rounded w-4 h-5" />
          <div className="bg-blue-500 rounded w-4 h-9" />
          <div className="bg-blue-500 rounded w-4 h-20" />
          <div className="bg-blue-500 rounded w-4 h-16" />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
          <span className="text-xs text-gray-300">Total Sessions</span>
          <span className="text-xl font-bold text-white">12,354</span>
          <span className="text-green-400 text-xs font-semibold">+ 0.85 %</span>
        </div>
        <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
          <span className="text-xs text-gray-300">Average Requests</span>
          <span className="text-xl font-bold text-white">74.06</span>
          <span className="text-red-400 text-xs font-semibold">- 3.90 %</span>
        </div>
        <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
          <span className="text-xs text-gray-300">Total Users</span>
          <span className="text-xl font-bold text-white">839</span>
        </div>
        <div className="bg-white rounded-xl border p-3 flex flex-col items-start">
          <span className="text-xs text-gray-300">New Users</span>
          <span className="text-xl font-bold text-white">440</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Headline and CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
            Financial infrastructure <br /> to scale your {" "}
            <span className="text-blue-600">{displayed}</span>
            <span className="text-blue-600 animate-pulse">|</span>
          </h1>
          <p className="mt-8 text-2xl md:text-3xl text-white">
            The modern way to accept payments, automate revenue, and grow your business globally.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <button
              className="px-8 py-4 text-xl rounded-lg text-white font-semibold hover:opacity-90 transition bg-blue-600 border border-blue-600"
              onClick={() => setWaitlistOpen(true)}
            >
              Join Waitlist
            </button>
          </div>
          <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
        </div>
        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative w-full max-w-[420px] h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
            <Image
              src="/yyy.jpg"
              alt="Team working together"
              width={420}
              height={520}
              className="object-cover w-full h-full mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 