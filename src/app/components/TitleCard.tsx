"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TitleCardProps {
  title: string;
  description: string;
  color: string;
  slug: string;
  index: number;
}

export default function TitleCard({ title, description, color, slug, index }: TitleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className={`${color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between`}
    >
      <div>
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.div 
        className="mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          href={`/${slug}`}
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-medium hover:bg-white/30 transition-colors"
        >
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  );
} 