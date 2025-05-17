"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 md:px-8 mt-auto backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-white/70 text-center md:text-left">
              © {new Date().getFullYear()} I Want To...
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 