"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "Launch in Minutes",
    description: "Go live without writing a single line of code. From sign-up to first payment, Doowla gets you up and running — instantly.",
    benefit: "No dev team? No problem.",
    image: "/Download premium image of Woman working remotely from a cafe by Luke Stackpoole about person, laptop, technology, portrait, and city 532492.jpg",
  },
  {
    title: "Smooth User Experience",
    description: "Our UI is built for clarity and speed — making payments feel seamless for both you and your customers.",
    benefit: "Payments should feel invisible.",
    image: "/Instagram.jpg",
  },
  {
    title: "Zero Learning Curve",
    description: "Designed with simplicity at its core, Doowla's dashboard is intuitive even for first-time users.",
    benefit: "Built for humans, not just developers.",
    image: "/Ideas as boundless as the sky_.jpg",
  },
  {
    title: "Instant Integrations",
    description: "Connect your website, store, or WhatsApp in a few clicks. From CMS plugins to custom APIs — you're covered.",
    benefit: "Less setup, more selling.",
    image: "/Beautiful golden fields in Norfolk (United….jpg",
  },
  {
    title: "Speed Meets Stability",
    description: "Whether it's Black Friday or a product launch, Doowla is built to handle high traffic with ultra-low latency.",
    benefit: "Fast, reliable — always on.",
    image: "/download (1).jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
    position: "absolute" as const,
  }),
};

export default function CardSliderSection() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  function paginate(newDirection: number) {
    setIndex(([prev, _]) => {
      let next = prev + newDirection;
      if (next < 0) next = cards.length - 1;
      if (next >= cards.length) next = 0;
      return [next, newDirection];
    });
  }

  return (
    <section className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Explore Doowla
          </h2>
          <p className="mt-6 text-2xl text-white max-w-3xl mx-auto">
            Slide through our core features and see what makes Doowla unique.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 bg-white border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center shadow hover:shadow-lg transition-all text-3xl"
            aria-label="Previous"
          >
            <span>&#8592;</span>
          </button>
          <div className="w-full max-w-5xl h-[380px] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.5 }}
                className="w-full h-full flex"
              >
                {/* Left: Text */}
                <div className="w-1/2 flex flex-col justify-center px-14 py-10">
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">{cards[index].title}</h3>
                  <p className="text-2xl text-white mb-2 leading-relaxed">{cards[index].description}</p>
                  <span className="text-lg font-semibold text-white mt-2 block">{cards[index].benefit}</span>
                </div>
                {/* Right: Image */}
                <div className="w-1/2 h-full flex items-stretch justify-center p-0">
                  <img
                    src={cards[index].image}
                    alt={cards[index].title}
                    className="rounded-2xl object-cover w-full h-full shadow-2xl border border-gray-200"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 bg-white border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center shadow hover:shadow-lg transition-all text-3xl"
            aria-label="Next"
          >
            <span>&#8594;</span>
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`w-4 h-4 rounded-full border-2 ${i === index ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'} transition-all`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 