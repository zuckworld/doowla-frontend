import React from "react";

// Glassmorphism gradient and blur filter defs (now accepts id and colors)
const GlassDefs = ({ id, from, to }: { id: string; from: string; to: string }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={from} />
      <stop offset="100%" stopColor={to} />
    </linearGradient>
    <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.6" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

// 1. Card in Hand (Blue to Cyan)
export const CardHand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-cardhand" from="#3B82F6" to="#06D6A0" />
    <rect x={8} y={16} width={32} height={20} rx={6} fill="url(#glass-gradient-cardhand)" />
    <rect x={14} y={22} width={20} height={8} rx={2} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={20} y={28} width={8} height={4} rx={1} fill="#06D6A0" />
    <rect x={12} y={36} width={12} height={4} rx={2} fill="#3B82F6" opacity={0.7} />
  </svg>
);

// 2. Lock Shield (Green to Teal)
export const LockShield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-lockshield" from="#22C55E" to="#14B8A6" />
    <rect x={12} y={20} width={24} height={18} rx={5} fill="url(#glass-gradient-lockshield)" />
    <circle cx={24} cy={29} r={4} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={20} y={12} width={8} height={10} rx={4} fill="#14B8A6" />
  </svg>
);

// 3. Analytics (Orange to Red)
export const Analytics = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-analytics" from="#F59E0B" to="#EF4444" />
    <rect x={10} y={16} width={28} height={18} rx={4} fill="url(#glass-gradient-analytics)" />
    <rect x={16} y={24} width={4} height={6} rx={2} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={22} y={20} width={4} height={10} rx={2} fill="#EF4444" />
    <rect x={28} y={18} width={4} height={12} rx={2} fill="#F59E0B" opacity={0.7} />
  </svg>
);

// 4. Clock Folder (Purple to Pink)
export const ClockFolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-clockfolder" from="#A78BFA" to="#EC4899" />
    <rect x={10} y={18} width={28} height={16} rx={4} fill="url(#glass-gradient-clockfolder)" />
    <circle cx={34} cy={26} r={6} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={28} y={20} width={12} height={12} rx={6} fill="#EC4899" />
    <path d="M34 24v3l2 1" stroke="#A78BFA" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

// 5. Stacked Cards (Pink to Rose)
export const StackedCards = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-stackedcards" from="#EC4899" to="#F43F5E" />
    <rect x={12} y={18} width={24} height={14} rx={3} fill="url(#glass-gradient-stackedcards)" />
    <rect x={16} y={24} width={16} height={8} rx={2} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={20} y={28} width={8} height={4} rx={1} fill="#F43F5E" />
  </svg>
);

// 6. Finger Tap (Yellow to Amber)
export const FingerTap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-fingertap" from="#FACC15" to="#F59E0B" />
    <circle cx={24} cy={24} r={10} fill="url(#glass-gradient-fingertap)" />
    <rect x={20} y={14} width={8} height={20} rx={4} fill="#F59E0B" />
    <circle cx={24} cy={24} r={4} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
  </svg>
);

// 7. Health Card (Teal to Emerald)
export const HealthCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-healthcard" from="#14B8A6" to="#10B981" />
    <rect x={12} y={18} width={24} height={14} rx={3} fill="url(#glass-gradient-healthcard)" />
    <rect x={18} y={24} width={12} height={6} rx={2} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={22} y={26} width={4} height={2} rx={1} fill="#10B981" />
    <rect x={24} y={22} width={2} height={4} rx={1} fill="#14B8A6" opacity={0.7} />
  </svg>
);

// 8. Lock Check (Red to Orange)
export const LockCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-lockcheck" from="#EF4444" to="#F97316" />
    <rect x={14} y={20} width={20} height={14} rx={4} fill="url(#glass-gradient-lockcheck)" />
    <rect x={20} y={12} width={8} height={8} rx={4} fill="#F97316" />
    <path d="M20 28l4 4 4-6" stroke="#fff" strokeWidth={2} strokeLinecap="round" filter="url(#glass-blur)" />
  </svg>
);

// 9. Idea Gear (Indigo to Blue)
export const IdeaGear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-ideagear" from="#6366F1" to="#3B82F6" />
    <circle cx={24} cy={24} r={10} fill="url(#glass-gradient-ideagear)" />
    <circle cx={24} cy={24} r={6} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <path d="M24 18v4M24 28v2M18 24h4M28 24h2" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

// 10. Download Document (Violet to Purple)
export const DownloadDoc = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-downdoc" from="#8B5CF6" to="#A78BFA" />
    <rect x={14} y={14} width={20} height={20} rx={4} fill="url(#glass-gradient-downdoc)" />
    <rect x={20} y={20} width={8} height={8} rx={2} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <path d="M24 18v8M21 25l3 3 3-3" stroke="#A78BFA" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

// 11. Chat Bubbles (Teal to Cyan)
export const ChatBubbles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-chatbubbles" from="#14B8A6" to="#06D6A0" />
    <rect x={10} y={18} width={18} height={12} rx={4} fill="url(#glass-gradient-chatbubbles)" />
    <rect x={20} y={24} width={14} height={8} rx={3} fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={14} y={28} width={6} height={4} rx={2} fill="#06D6A0" />
  </svg>
);

// 12. Envelope Mail (Cyan to Blue)
export const EnvelopeMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width || 64} height={props.height || 64} viewBox="0 0 48 48" fill="none" {...props}>
    <GlassDefs id="glass-gradient-envelope" from="#06D6A0" to="#3B82F6" />
    <rect x={12} y={18} width={24} height={14} rx={4} fill="url(#glass-gradient-envelope)" />
    <polygon points="12,18 24,30 36,18" fill="#fff" opacity={0.5} filter="url(#glass-blur)" />
    <rect x={18} y={22} width={12} height={6} rx={2} fill="#3B82F6" />
  </svg>
); 