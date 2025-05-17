"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EatYourPancreasPage() {
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
            className="bg-gradient-to-br from-pink-600/80 to-purple-700/80 p-8 rounded-2xl backdrop-blur-md"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I want to eat your pancreas
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-pink-200">About the Work</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                &quot;I want to eat your pancreas&quot; is a Japanese novel written by Yoru Sumino, later adapted into manga, animated film, and live-action movie. Despite the strange and even horrifying-sounding title, it&apos;s actually a deeply moving story about the friendship between a girl named Sakura Yamauchi, who has a pancreatic disease, and an introverted boy referred to as &quot;I&quot;.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-pink-200 mt-8">Story Synopsis</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                The story begins when the protagonist &quot;I&quot; finds a diary titled &quot;Living with Disease&quot; at a hospital, which belongs to Sakura Yamauchi who records her life with pancreatic disease. When he discovers that the diary&apos;s owner is his classmate, Sakura asks him to keep her illness a secret. As time passes, these two very different people build a deep friendship, with Sakura helping &quot;I&quot; break out of his self-imposed isolation, while &quot;I&quot; accompanies Sakura through the final days of her life.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-pink-200 mt-8">Meaning of the Title</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                The title &quot;I want to eat your pancreas&quot; comes from an old Japanese saying: if you eat a part of someone&apos;s body, you can cure the disease in that part. Sakura half-jokingly tells &quot;I&quot; that if he could eat her pancreas, perhaps she would be cured. This seemingly strange title actually symbolizes a profound emotional connection and a desire for life.
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