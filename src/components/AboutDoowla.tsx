"use client";

import Image from "next/image";
import { useRef } from "react";

export default function AboutDoowla() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image Display */}
        <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px]">
          <div className="w-full h-[340px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <Image
              src="/65838ab2-8f23-41b3-98de-27acb8bfdd42.jpg"
              alt="Team collaborating at whiteboard"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Right: About Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white" style={{ fontFamily: 'Satoshi, serif' }}>
            What is Doowla?
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">A modern, global payments platform for ambitious businesses.</h3>
          <p className="text-lg text-white mb-6">
            Doowla empowers businesses of all sizes to accept payments, manage revenue, and scale globally with ease. Our platform combines advanced technology, robust security, and a seamless user experience—so you can focus on growth, not complexity. Whether you're a startup, enterprise, or creator, Doowla gives you the tools to connect with customers, automate workflows, and unlock new opportunities worldwide.
          </p>
          <a href="#" className="text-lg font-semibold underline text-white hover:text-blue-400 transition">
            Learn more about Doowla
          </a>
        </div>
      </div>
    </section>
  );
} 