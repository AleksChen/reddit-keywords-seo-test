"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HugThatGatorPage() {
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
            className="bg-gradient-to-br from-green-600/80 to-blue-700/80 p-8 rounded-2xl backdrop-blur-md"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I want to hug that gator
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-200">About the Work</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                &quot;I want to hug that gator&quot; is an interesting story about human interaction with wildlife. Through the seemingly absurd desire of a person wanting to hug an alligator, this story explores human curiosity about nature, our sense of awe, and how we should interact with wild animals.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-200 mt-8">Story Background</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                The story takes place in the swamplands of the American South, home to the American alligator. The protagonist is a young person full of curiosity about wildlife who, while visiting a local wildlife sanctuary, becomes attracted to a seemingly &quot;friendly&quot; alligator and develops an impulse to hug it. This seemingly simple desire triggers a series of reflections on human interactions with the natural world.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-200 mt-8">Theme Exploration</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Through the protagonist&apos;s experience, this story explores several important themes: human misunderstandings about wildlife, how we project human emotions onto animals, the importance of respecting nature, and the necessity of maintaining a safe distance. The story reminds us in a humorous yet thought-provoking way that while it&apos;s important to appreciate and respect wildlife, we also need to understand their nature and behavior, and maintain an appropriate distance.
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