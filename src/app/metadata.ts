import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'I Want To... | Collection of Interesting Titles',
  description: 'Explore the collection of interesting "I want to..." titles, including "i want to eat your pancreas", "I want to escape from princess lessons" and "I want to hug that gator".',
  keywords: ["i want to eat your pancreas", "I want to escape from princess lessons", "I want to hug that gator", "movies", "anime", "books"],
  openGraph: {
    title: "I Want To... | Collection of Interesting Titles",
    description: "Explore the collection of interesting 'I want to...' titles, including 'i want to eat your pancreas', 'I want to escape from princess lessons' and 'I want to hug that gator'.",
    url: "https://reddit-keywords-seo-test.vercel.app/",
    siteName: "I Want To...",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Want To... | Collection of Interesting Titles",
    description: "Explore the collection of interesting 'I want to...' titles",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const homeMetadata: Metadata = metadata;

export const eatYourPancreasMetadata: Metadata = {
  title: 'I want to eat your pancreas | Details',
  description: 'Learn about the touching movie and novel "I want to eat your pancreas". Explore this beautiful story about life, friendship, and accepting death.',
  keywords: ['i want to eat your pancreas', 'movie', 'novel', 'friendship', 'death', 'life'],
};

export const escapePrincessLessonsMetadata: Metadata = {
  title: 'I want to escape from princess lessons | Details',
  description: 'Learn about the light novel and anime "I want to escape from princess lessons". Explore an interesting story about self-worth and responsibility.',
  keywords: ['I want to escape from princess lessons', 'light novel', 'anime', 'princess', 'self-worth', 'responsibility'],
};

export const hugThatGatorMetadata: Metadata = {
  title: 'I want to hug that gator | Details',
  description: 'Learn about the interesting story "I want to hug that gator". Explore the relationship between humans and wildlife, and how we should respect dangerous creatures in nature.',
  keywords: ['I want to hug that gator', 'alligator', 'wildlife', 'nature', 'adventure'],
};

export const aboutMetadata: Metadata = {
  title: 'About | I Want To...',
  description: 'Learn more about the "I Want To..." website, an SEO-friendly site showcasing interesting titles.',
  keywords: ['about', 'I Want To', 'SEO', 'website information'],
}; 