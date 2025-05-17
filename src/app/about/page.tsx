"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
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
            className="bg-gradient-to-br from-indigo-600/80 to-purple-700/80 p-8 rounded-2xl backdrop-blur-md"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              About This Site
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-200">Website Purpose</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                &quot;I Want To...&quot; is an SEO-friendly website showcasing interesting titles. This site collects unique titles that begin with &quot;I want to...&quot;, including &quot;i want to eat your pancreas&quot;, &quot;I want to escape from princess lessons&quot;, and &quot;I want to hug that gator&quot;. While these titles may sound strange or absurd, they all have interesting stories and profound meanings behind them.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-200 mt-8">Technical Implementation</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                This website is built with Next.js, a modern frontend framework based on React with excellent SEO optimization capabilities. We used Tailwind CSS for styling, Framer Motion and GSAP for animation effects, and Vercel Analytics for visitor data analysis. The entire site is hosted on the Vercel platform, ensuring fast loading speeds and stable performance.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-200 mt-8">SEO Optimization</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                This website was designed with special attention to SEO optimization, including:
              </p>
              <ul className="list-disc pl-6 text-white/90 mb-6 space-y-2">
                <li>Setting appropriate titles and descriptions for each page</li>
                <li>Using semantic HTML tags</li>
                <li>Optimizing page loading speed</li>
                <li>Adding appropriate keywords</li>
                <li>Implementing responsive design for various devices</li>
                <li>Using Vercel Analytics to track visitor data</li>
              </ul>
              
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