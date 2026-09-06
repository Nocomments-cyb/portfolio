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
  roleDescriptor: 'Full-stack developer & product builder engineering complete web applications from database architecture to polished user interfaces.',
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
      title: 'Full-Stack Web Applications',
      description: 'End-to-end architectures connecting robust backend systems with responsive, high-performance interfaces.',
      icon: 'Layers'
    },
    {
      title: 'Database & API Architecture',
      description: 'Relational data modeling, secure authentication, and real-time APIs powered by Supabase & PostgreSQL.',
      icon: 'Database'
    },
    {
      title: 'Interactive Frontend Systems',
      description: 'Dynamic single-page interfaces built with React, modular custom hooks, and reliable state management.',
      icon: 'Monitor'
    },
    {
      title: 'Product MVPs & Prototypes',
      description: 'Rapid functional prototypes engineered to validate core product hypotheses and real user workflows.',
      icon: 'Rocket'
    },
    {
      title: '3D & Immersive Web Experiences',
      description: 'Aesthetic, cinematic web environments with Three.js, WebGL shaders, and smooth micro-interactions.',
      icon: 'Sparkles'
    }
  ]
};
