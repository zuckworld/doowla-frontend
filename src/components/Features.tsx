"use client";

import { motion } from "framer-motion";
import {
  CardHand,
  StackedCards,
  FingerTap,
  Analytics,
  DownloadDoc,
  IdeaGear
} from "./DoowlaIcons";

const features = [
  {
    title: "Payment Links",
    icon: CardHand,
    description:
      "Create and share payment links without writing a single line of code. Perfect for freelancers, creators, and small businesses.",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    title: "Smart Checkout",
    icon: StackedCards,
    description:
      "Offer a sleek, mobile-optimized checkout experience. Fully branded and built to maximize conversions.",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    title: "Subscription Billing",
    icon: FingerTap,
    description:
      "Manage recurring billing and automate renewals. Ideal for SaaS, memberships, and donation platforms.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    title: "Analytics Dashboard",
    icon: Analytics,
    description:
      "Track transactions, manage payouts, and gain real-time insights across all your payment channels.",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
  },
  {
    title: "Multi-channel Payments",
    icon: DownloadDoc,
    description:
      "Accept payments via card, wallet, USSD, and crypto. Doowla works wherever your customers are.",
    gradient: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
  },
  {
    title: "Developer Tools",
    icon: IdeaGear,
    description:
      "Built with developers in mind. Powerful APIs, webhooks, SDKs, and docs to integrate seamlessly.",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2563EB' }}>
            Powerful tools for <span style={{ color: '#2563EB' }}>ambitious businesses</span>
          </h2>
          <p className="mt-4 text-xl text-white max-w-xl mx-auto">
            Doowla helps you launch faster, scale easier, and manage everything
            from a single payment platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-black border border-gray-200 hover:border-gray-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
              {/* Content */}
              <div className="relative z-10">
                <feature.icon width={64} height={64} className="mb-9" />
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-white">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 