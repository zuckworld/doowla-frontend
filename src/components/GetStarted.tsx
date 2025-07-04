"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Join thousands of businesses that trust Doowla to power their payments. 
              Get started in minutes, not months.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold text-white mb-1">No setup fees</h3>
                <p className="text-white text-sm">Start accepting payments immediately with zero upfront costs</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Instant activation</h3>
                <p className="text-white text-sm">Your account is ready to use in under 5 minutes</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Enterprise security</h3>
                <p className="text-white text-sm">Bank-level security and compliance built-in</p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>PCI DSS Level 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>99.999% Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 