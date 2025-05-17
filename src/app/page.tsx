"use client";

import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import TitleCard from './components/TitleCard';

const titles = [
  {
    title: 'I want to eat your pancreas',
    description: 'This is a deeply moving Japanese novel and film about the friendship between a girl with a pancreatic disease and an introverted boy. Despite the strange-sounding title, it\'s actually a beautiful story about life, friendship, and accepting death.',
    color: 'bg-gradient-to-br from-pink-600 to-purple-700',
    slug: 'eat-your-pancreas'
  },
  {
    title: 'I want to escape from princess lessons',
    description: 'This is a light novel and anime about an ordinary girl who is suddenly told she\'s a princess and is forced to take princess lessons. She tries to escape these lessons but learns important lessons about self-worth and responsibility in the process.',
    color: 'bg-gradient-to-br from-blue-600 to-purple-700',
    slug: 'escape-princess-lessons'
  },
  {
    title: 'I want to hug that gator',
    description: 'This is a fun story about a brave (or reckless) person who wants to hug an alligator. The story explores the relationship between humans and wildlife, and how we should respect dangerous creatures in nature.',
    color: 'bg-gradient-to-br from-green-600 to-blue-700',
    slug: 'hug-that-gator'
  }
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      
      <main className="flex flex-col min-h-screen pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
              I Want To...
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Explore the stories behind these interesting and captivating &quot;I want to...&quot; titles
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {titles.map((title, index) => (
              <TitleCard 
                key={title.slug}
                title={title.title}
                description={title.description}
                color={title.color}
                slug={title.slug}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Why are these titles so unique?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These titles stand out because they break conventions and spark curiosity. They typically use the common phrase &quot;I want to...&quot; in unexpected ways, creating memorable titles.
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
