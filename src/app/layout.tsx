import "../globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Doowla Home",
  description: "Modern payments platform for businesses, startups and enterprises",
};

export default function RootLayout({ children, darkMode }: { children: ReactNode, darkMode?: boolean }) {
  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Favicons for all devices and browsers */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body>{children}</body>
    </html>
  );
} 