/**
 * Developer Profile Configuration
 * 
 * Centralized, credible profile metadata.
 * URLs and contact channels are only rendered if actively specified here.
 */
export const profileData = {
  alias: 'No Comment',
  headline: "Hi, I'm No Comment",
  tagline: 'I build full-stack web products and interactive experiences.',
  roleTitle: 'Software Developer & Product Builder',
  roleDescriptor: 'Software developer and product builder crafting full-stack web products and interactive modern experiences with React, Supabase, PostgreSQL, and Three.js.',
  coreTags: [
    'Software Developer',
    'Product Builder',
    'Full-Stack Web Products',
    'Interactive Experiences'
  ],
  status: 'Available for Opportunities',
  location: 'Dubai, United Arab Emirates',
  locationDetail: 'Open to Global Remote & High-Impact Contracts',
  timezone: 'Gulf Standard Time (UTC+4)',
  
  // Real URLs/handles configured for direct inquiries.
  socials: {
    github: 'https://github.com/Nocomments-cyb',
    linkedin: null,
    email: 'guzzy3443@gmail.com',
  },

  whatIBuild: [
    {
      title: 'Full-Stack Web Products',
      description: 'Production-grade applications combining modular React frontend architecture, Supabase backend integration, relational PostgreSQL schemas, and real-time state synchronization.',
      icon: 'Layers'
    },
    {
      title: 'Product MVPs & Prototypes',
      description: 'Rapid translation of product concepts into working web applications with verified onboarding flows, responsive layouts, and robust client-side validation.',
      icon: 'Rocket'
    },
    {
      title: 'Interactive Web Experiences',
      description: 'Fluid, high-performance interfaces built with responsive design systems, touch-friendly navigation, accessible HTML semantics, and smooth micro-interactions.',
      icon: 'Monitor'
    },
    {
      title: 'Real-Time Applications',
      description: 'Live multi-user interfaces powered by WebSocket subscriptions, optimistic UI updates, typing indicators, and reliable event-driven state.',
      icon: 'Radio'
    },
    {
      title: 'Data-Driven Applications',
      description: 'Secure relational data structures with PostgreSQL, granular Row Level Security (RLS) policies, session-based authentication, and RESTful API data contracts.',
      icon: 'Database'
    },
    {
      title: '3D / Immersive Web Experiences',
      description: 'Interactive WebGL scenes built with Three.js and React Three Fiber, featuring capped DPR optimization, dynamic lighting, and reduced-motion compliance.',
      icon: 'Sparkles'
    }
  ]
};
