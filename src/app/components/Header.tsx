"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-8 backdrop-blur-md bg-black/20 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-white text-2xl font-bold flex items-center">
            <span className="text-pink-400 mr-1">I</span> 
            <span className="text-purple-400 mr-1">Want</span> 
            <span className="text-blue-400">To...</span>
          </Link>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-pink-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-white hover:text-purple-400 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
} 