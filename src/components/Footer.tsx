"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Mail, FileText, HelpCircle, Code, Activity, Send, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Nigeria");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed: ${email} | Country: ${country}`);
    setEmail("");
  };

  return (
    <footer className="bg-black pt-16 pb-8 px-4">
      <div className="w-full h-px mb-12" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-white">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {/* About */}
          <div className="bg-black">
            <h3 className="font-bold mb-3 text-lg" style={{ color: '#0000ff' }}>About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Press & media</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Partner with us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Products */}
          <div className="bg-black">
            <h3 className="font-bold mb-3 text-lg" style={{ color: '#2563EB' }}>Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Risk management</a></li>
              <li><a href="#" className="hover:underline">Authentication</a></li>
              <li><a href="#" className="hover:underline">Issuing</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="bg-black">
            <h3 className="font-bold mb-3 text-lg" style={{ color: '#2563EB' }}>Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Academy</a></li>
              <li><a href="#" className="hover:underline">Knowledge Hub</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>
          {/* Platform */}
          <div className="bg-black">
            <h3 className="font-bold mb-3 text-lg" style={{ color: '#2563EB' }}>Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Infrastructure</a></li>
              <li><a href="#" className="hover:underline">Licenses</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Responsible disclosure policy</a></li>
              <li><a href="#" className="hover:underline">Service Status</a></li>
            </ul>
          </div>
        </div>
        {/* Socials & Newsletter */}
        <div className="flex flex-col items-end gap-8 min-w-[260px] bg-black">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="rounded-xl p-3 hover:bg-gray-50 transition" style={{ color: '#2563EB' }}><Facebook size={24} className="text-[#2563EB]" /></a>
            <a href="#" className="rounded-xl p-3 hover:bg-gray-50 transition" style={{ color: '#2563EB' }}><Linkedin size={24} className="text-[#2563EB]" /></a>
            <a href="#" className="rounded-xl p-3 hover:bg-gray-50 transition" style={{ color: '#2563EB' }}>
              {/* X/Twitter icon as SVG */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path d="M7 7l10 10M17 7L7 17" /></svg>
            </a>
          </div>
          <button className="font-semibold rounded-xl px-8 py-4 text-lg hover:opacity-90 transition whitespace-nowrap text-black" style={{ backgroundColor: '#fff' }}>
            Subscribe to our newsletter
          </button>
        </div>
      </div>
    </footer>
  );
} 