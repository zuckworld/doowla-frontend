import { useState } from "react";

export default function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-black bg-opacity-90 border border-gray-200 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Join the Waitlist</h2>
        <p className="text-white text-center mb-6">Be the first to experience Doowla. Get early access, updates, and more.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="px-5 py-3 rounded-lg bg-black bg-opacity-60 border border-gray-200 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading || status === "success"}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-lg bg-blue-600 hover:bg-blue-700 transition border border-blue-600 disabled:opacity-60"
            disabled={loading || status === "success"}
          >
            {loading ? "Joining..." : status === "success" ? "Joined!" : "Join Waitlist"}
          </button>
          {status === "success" && <p className="text-green-400 text-center">You're on the list! We'll keep you posted.</p>}
          {status === "error" && <p className="text-red-400 text-center">Please enter a valid email address.</p>}
        </form>
        <p className="text-xs text-gray-400 text-center mt-4">We respect your privacy. No spam, ever.</p>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
} 