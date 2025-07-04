"use client";

import { motion } from "framer-motion";

export default function AccountType() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-14"
        >
          Choose the Right Account for You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Personal Account Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black text-white p-10 rounded-2xl flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-200"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Personal Account</h3>
              <p className="text-lg mb-6 text-white">
                Perfect for freelancers, content creators, and mini online store owners. 
                Get paid faster and manage your income with ease.
              </p>
              <div className="text-white text-sm leading-relaxed space-y-4">
                <p>
                  Doowla transforms how you get paid. Create professional payment links in seconds and share them with clients worldwide. 
                  No more waiting for bank transfers or dealing with complex payment setups.
                </p>
                <p>
                  Set up recurring payments for your subscriptions and memberships, so you never miss a payment. 
                  Track your earnings in real-time and withdraw funds instantly to your bank account whenever you need them.
                </p>
                <p>
                  Whether you're a freelance designer, content creator, or running a small online store, 
                  Doowla gives you the tools to look professional and get paid like a business.
                </p>
              </div>
            </div>
            <div className="mt-8">
              {/* Button removed for coming soon mode */}
            </div>
          </motion.div>

          {/* Business Account Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-white p-10 rounded-2xl flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-200"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Business Account</h3>
              <p className="text-lg mb-6 text-white">
                Scale your business with enterprise-grade payment solutions. From solopreneurs to growing enterprises, 
                Doowla provides the tools you need to accelerate revenue growth and streamline payment operations.
              </p>
              <div className="text-white text-sm leading-relaxed space-y-4">
                <p>
                  Doowla's enterprise-grade payment gateway ensures 99.9% uptime, so your business never misses a sale. 
                  Process payments securely and expand your customer base with confidence.
                </p>
                <p>
                  Customize checkout experiences that match your brand and integrate seamlessly with your existing systems. 
                  Get real-time insights into your revenue with advanced analytics and automated reconciliation.
                </p>
                <p>
                  Protect your business with built-in fraud detection and risk management tools. 
                  Get dedicated support when you need it most to help your business grow.
                </p>
              </div>
            </div>
            <div className="mt-8">
              {/* Button removed for coming soon mode */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 