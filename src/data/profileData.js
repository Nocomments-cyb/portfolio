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
  roleDescriptor: 'Frontend developer focused on building modern, interactive web experiences.',
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
      title: 'Interactive Web Applications',
      description: 'Dynamic single-page interfaces built with React and modular component state.',
      icon: 'Layers'
    },
    {
      title: 'Responsive Interfaces',
      description: 'Mobile-first fluid layouts engineered to adapt seamlessly across any viewport.',
      icon: 'Monitor'
    },
    {
      title: 'Product Prototypes',
      description: 'Rapid functional prototypes designed to test hypotheses and validate core user flows.',
      icon: 'Rocket'
    },
    {
      title: 'Modern Frontend Experiences',
      description: 'Aesthetic, cinematic UI with dark-mode styling, micro-interactions, and 3D accents.',
      icon: 'Sparkles'
    },
    {
      title: 'Database-Backed Applications',
      description: 'Relational data models and real-time backend integrations powered by Supabase & PostgreSQL.',
      icon: 'Database'
    }
  ]
};
