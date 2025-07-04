"use client";

import { motion } from "framer-motion";
import {
  LockShield,
  StackedCards,
  Analytics,
  CardHand,
  DownloadDoc,
  ChatBubbles,
  LockCheck,
  // Add GlobeGlassIcon import here when implemented
} from "./DoowlaIcons";

const features = [
  {
    icon: <span className="w-16 h-16 inline-block bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">🌐</span>, // Replace with <GlobeGlassIcon width={64} height={64} /> when ready
    title: "Global Reach, Local Power",
    bullets: [
      "Accept payments in 195+ countries",
      "135+ currencies, 100+ payment methods",
      "Seamless cross-border transactions",
      "One simple integration"
    ],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <LockShield width={64} height={64} />,
    title: "Next-Gen Fraud Protection",
    bullets: [
      "AI-driven fraud detection",
      "Adapts to new threats instantly",
      "No extra integration needed",
      "Real-time analytics & alerts"
    ],
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: <StackedCards width={64} height={64} />,
    title: "Conversion-Boosting Checkout",
    bullets: [
      "Flexible, branded UI components",
      "Pre-built, mobile-first payment forms",
      "Accelerated, one-click checkout",
      "No-code payment links"
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: <Analytics width={64} height={64} />,
    title: "Revenue Optimization",
    bullets: [
      "Smart payment retries",
      "Auto-updated cards",
      "Seamless customer authentication"
    ],
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: <CardHand width={64} height={64} />,
    title: "Platform-Ready Payments",
    bullets: [
      "Instant merchant onboarding",
      "Powerful platform management",
      "Embedded payment components",
      "Advanced risk tools"
    ],
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: <DownloadDoc width={64} height={64} />,
    title: "Lightning-Fast Payouts",
    bullets: [
      "Flexible payout schedules",
      "Like-for-like settlements",
      "Full payout transparency"
    ],
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <ChatBubbles width={64} height={64} />,
    title: "24/7 Human Support",
    bullets: [
      "Live chat, phone, and email",
      "Expert technical support",
      "Extensive documentation"
    ],
    gradient: "from-teal-500 to-teal-600"
  },
  {
    icon: <LockCheck width={64} height={64} />,
    title: "Rock-Solid Security & Compliance",
    bullets: [
      "99.999% uptime SLA",
      "PCI DSS Level 1 certified",
      "Global regulatory licenses"
    ],
    gradient: "from-red-500 to-red-600"
  }
];

export default function BenefitsGrid() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2563EB' }}>
            Everything you need to scale, built in.
          </h2>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            Doowla gives you the global reach, security, and flexibility to grow your business—no matter where you start.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-start bg-black rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 w-full">
                {feature.icon && (
                  <span className="mb-4 block">{feature.icon}</span>
                )}
                <h3 className="font-semibold text-xl mb-4 text-white">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mt-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span className="text-white text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 