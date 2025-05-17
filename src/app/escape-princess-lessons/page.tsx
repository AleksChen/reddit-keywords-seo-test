"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EscapePrincessLessonsPage() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      
      <main className="flex flex-col min-h-screen pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-blue-600/80 to-purple-700/80 p-8 rounded-2xl backdrop-blur-md"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I want to escape from princess lessons
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">About the Work</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                &quot;I want to escape from princess lessons&quot; is a light novel and anime about an ordinary girl who is suddenly told she is a princess and is forced to attend various princess training courses. This work combines comedy, coming-of-age, and fantasy elements, exploring themes of identity and personal growth.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200 mt-8">Story Synopsis</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                The protagonist is an ordinary high school girl living a normal life until one day, a mysterious messenger appears and tells her that she is actually a princess from a distant kingdom. To fulfill her royal duties, she must immediately begin princess training courses, which include etiquette, dancing, politics, and diplomacy. However, these courses are extremely difficult for someone accustomed to an ordinary life, and she begins to look for various ways to escape these lessons.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200 mt-8">Theme Exploration</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Through the protagonist&apos;s experiences, this story explores the conflicts between responsibility and freedom, tradition and modernity, personal desires and collective expectations. As the story progresses, the protagonist gradually understands the responsibilities that come with her royal identity and learns how to fulfill these responsibilities while maintaining her sense of self. This work explores profound themes of growth in a light-hearted and humorous way.
              </p>
              
              <div className="mt-10">
                <Link 
                  href="/"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 