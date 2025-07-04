"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, Settings, HelpCircle, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WaitlistModal from "./WaitlistModal";

const navItems = [
  { 
    label: "Products", 
    dropdown: [
      { name: "Payment Links", icon: "🔗" },
      { name: "Checkout", icon: "💳" },
      { name: "Subscriptions", icon: "🔄" }
    ] 
  },
  { 
    label: "Solutions", 
    dropdown: [
      { name: "Retail", icon: "🏪" },
      { name: "Enterprise", icon: "🏢" },
      { name: "Startups", icon: "🚀" }
    ] 
  },
  { label: "Resources", link: "#resources" },
  { label: "Pricing", link: "#pricing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-10 flex-shrink-0">
          <Image src="/file_00000000cf1861f48dfaee54e68145dd copy.png" alt="Doowla Logo" width={130} height={34} className="h-12 w-auto object-contain" />
        </div>
        {/* Center: Nav */}
        <nav className="hidden md:flex space-x-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setDropdownOpen(item.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <motion.span
                className="text-white hover:text-gray-400 font-medium cursor-pointer flex items-center gap-1 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className="transition-transform duration-200" />}
              </motion.span>
              {item.dropdown && dropdownOpen === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-black shadow-lg border rounded-xl z-40 overflow-hidden"
                >
                  {item.dropdown.map((drop, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-3 text-gray-200 hover:bg-gray-900 transition-colors duration-200 flex items-center gap-3"
                    >
                      <span>{drop.name}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
          <button
            className="mr-2 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Select language"
            onClick={() => alert('Language selector coming soon!')}
          >
            <Globe size={28} className="text-white hover:text-[#2563EB] transition-colors" />
          </button>
          <button
            className="px-6 py-3 rounded-lg border-2 border-blue-600 text-white hover:bg-blue-600 hover:text-white transition text-lg font-semibold"
            onClick={() => setWaitlistOpen(true)}
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black px-4 pb-4 shadow-sm border-t"
          >
            <div className="space-y-2">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-white flex items-center gap-2">
                    {item.label}
                  </p>
                  {item.dropdown ? (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((drop, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-sm text-gray-300 hover:text-gray-100 flex items-center gap-2 py-1 transition-colors"
                        >
                          <span>{drop.name}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block text-white hover:text-gray-100 flex items-center gap-2 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 flex gap-2">
              <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-white text-lg font-semibold hover:bg-blue-600 hover:text-white transition" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </header>
  );
} 