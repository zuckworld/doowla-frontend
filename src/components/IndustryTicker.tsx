"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Truck, HeartPulse, GraduationCap, Plane, CloudCog, Users, Calendar, Home, CreditCard, Store, Car, ShieldCheck, Gavel, Factory, Phone, Video, Leaf, Users2, Building2, Zap, Hammer, Scissors, Dumbbell, Utensils } from "lucide-react";

const industries = [
  "E-commerce",
  "Logistics & Delivery",
  "Healthcare",
  "Online Education",
  "Hospitality & Travel",
  "SaaS & Software Platforms",
  "Freelancers & Agencies",
  "Event Management",
  "Real Estate",
  "Fintech & Digital Banks",
  "Retail",
  "Automotive",
  "Insurance",
  "Legal Services",
  "Manufacturing",
  "Telecommunications",
  "Media & Entertainment",
  "Agriculture",
  "Nonprofits",
  "Government",
  "Utilities",
  "Construction",
  "Beauty & Wellness",
  "Fitness & Gyms",
  "Food & Beverage",
];

const industryIcons = [
  <ShoppingBag className="text-blue-500" size={32} />,
  <Truck className="text-green-500" size={32} />,
  <HeartPulse className="text-red-500" size={32} />,
  <GraduationCap className="text-purple-500" size={32} />,
  <Plane className="text-blue-400" size={32} />,
  <CloudCog className="text-blue-600" size={32} />,
  <Users className="text-pink-500" size={32} />,
  <Calendar className="text-yellow-500" size={32} />,
  <Home className="text-green-700" size={32} />,
  <CreditCard className="text-green-500" size={32} />,
  <Store className="text-gray-700" size={32} />,
  <Car className="text-blue-700" size={32} />,
  <ShieldCheck className="text-green-600" size={32} />,
  <Gavel className="text-purple-700" size={32} />,
  <Factory className="text-yellow-700" size={32} />,
  <Phone className="text-blue-500" size={32} />,
  <Video className="text-pink-400" size={32} />,
  <Leaf className="text-green-400" size={32} />,
  <Users2 className="text-blue-400" size={32} />,
  <Building2 className="text-gray-500" size={32} />,
  <Zap className="text-yellow-400" size={32} />,
  <Hammer className="text-yellow-800" size={32} />,
  <Scissors className="text-pink-600" size={32} />,
  <Dumbbell className="text-blue-600" size={32} />,
  <Utensils className="text-red-400" size={32} />,
];

export default function IndustryTicker() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#0000ff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Industries That Need Doowla
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Doowla is built to serve modern businesses that want to accept payments easily, locally or globally — with speed, security, and flexibility.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, -50 * industries.length]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 12,
              ease: "linear" 
            }}
            className="flex whitespace-nowrap"
            style={{ width: `${industries.length * 2 * 320}px` }}
          >
            {industries.map((industry, idx) => (
              <div
                key={`first-${idx}`}
                className="mx-4 px-4 py-3 rounded-3xl shadow-lg text-gray-800 text-center flex-shrink-0 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
                style={{ 
                  width: '220px',
                  minHeight: '80px',
                  marginRight: '16px',
                  marginLeft: '16px'
                }}
              >
                <span className="block text-xs font-medium text-neutral-600 mb-1">Industry</span>
                <span className="block text-base font-serif font-semibold text-center truncate w-full" style={{ color: '#0000ff', maxWidth: '180px' }}>{industry}</span>
              </div>
            ))}
            {industries.map((industry, idx) => (
              <div
                key={`second-${idx}`}
                className="mx-4 px-4 py-3 rounded-3xl shadow-lg text-gray-800 text-center flex-shrink-0 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
                style={{ 
                  width: '220px',
                  minHeight: '80px',
                  marginRight: '16px',
                  marginLeft: '16px'
                }}
              >
                <span className="block text-xs font-medium text-neutral-600 mb-1">Industry</span>
                <span className="block text-base font-serif font-semibold text-center truncate w-full" style={{ color: '#0000ff', maxWidth: '180px' }}>{industry}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 