"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          LEIJ
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="text-zinc-200 transition-colors">About</Link>
          <Link href="#skills" className="text-zinc-200 transition-colors">Skills</Link>
          <Link href="#projects" className="text-zinc-200 transition-colors">Projects</Link>
          <Link href="#experience" className="text-zinc-200 transition-colors">Experience</Link>
        </nav>
        
        <Link href="#contact" className="hidden md:inline-flex items-center justify-center bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
          Contact Me
        </Link>
      </div>
    </motion.header>
  );
}