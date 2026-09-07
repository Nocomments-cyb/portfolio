/**
 * Developer Profile Configuration
 * 
 * Centralized, credible profile metadata.
 * URLs and contact channels are only rendered if actively specified here.
 */
export const profileData = {
  alias: 'No Comment',
  headline: "Hi, I'm No Comment",
  tagline: 'I build ideas into products.',
  roleTitle: 'Frontend Developer & Product Builder',
  roleDescriptor: 'Frontend developer and product builder crafting interactive modern web experiences with React, JavaScript, and Three.js.',
  coreTags: [
    'Frontend Developer',
    'Product Builder',
    'React / JavaScript',
    'Interactive Web Experiences'
  ],
  status: 'Available for Opportunities',
  location: 'Dubai, United Arab Emirates',
  locationDetail: 'Open to Global Remote & High-Impact Contracts',
  timezone: 'Gulf Standard Time (UTC+4)',
  
  // Real URLs/handles can be configured here by the developer.
  // When null or empty, the UI displays a clean pending state without fabricating links.
  socials: {
    github: null, // e.g. 'https://github.com/username'
    linkedin: null, // e.g. 'https://linkedin.com/in/username'
    email: null, // e.g. 'developer@domain.com'
  },

  whatIBuild: [
    {
      title: 'Interactive Frontend Systems',
      description: 'Dynamic single-page interfaces built with React, modular custom hooks, and predictable state management.',
      icon: 'Monitor'
    },
    {
      title: 'Product MVPs & Working Prototypes',
      description: 'Transforming ideas into functional, responsive web products with clean user flows and practical architecture.',
      icon: 'Rocket'
    },
    {
      title: '3D & Immersive Web Experiences',
      description: 'Cinematic, interactive web environments with Three.js, React Three Fiber, and responsive performance.',
      icon: 'Sparkles'
    },
    {
      title: 'Full-Stack Data Integration',
      description: 'Connecting polished frontend interfaces with Supabase authentication, PostgreSQL databases, and real-time state.',
      icon: 'Database'
    }
  ]
};
