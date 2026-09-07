export const projectsData = [
  {
    id: 'vybe',
    title: 'VYBE',
    category: 'Social Discovery Platform',
    featured: true,
    badge: 'Flagship Case Study',
    status: 'Active Development / Production-Ready MVP',
    statusType: 'active',
    tagline: 'A mobile-first social discovery platform engineered with real-time interactions and strict privacy rules.',
    whatItIs:
      'A full-stack responsive web application designed for genuine social discovery, featuring real-time messaging, profile customization, and community circles.',
    summary:
      'A full-stack social discovery application designed with responsive layouts, real-time interactions, and modern state architecture.',
    problem:
      'Building a modern social discovery platform with real-time interactions, clean UX, and strict privacy/moderation rules—avoiding the clutter, slow latency, and privacy vulnerabilities of legacy social networks.',
    approach:
      'Mobile-first responsive web app, component-driven React architecture, Supabase backend integration, real-time subscriptions, strict photo requirement onboarding, and defensive data access rules.',
    whatIBuilt:
      'Full frontend implementation, state management, feed interactions, real-time chat, onboarding flow, and integration with backend APIs/services.',
    architecture:
      'Frontend (React, Vite, Tailwind CSS) • Backend (Supabase / PostgreSQL, Row Level Security, Storage) • Real-time (Supabase subscriptions) • Hosting/Deployment readiness.',
    highlights: [
      'Interactive discovery feed with gesture-friendly responsive navigation',
      'Real-time messaging system with typing indicators and optimistic UI updates',
      'Onboarding flow requiring verified profile photo before discovery access',
      'Defensive bidirectional user moderation, blocking, and reporting UX'
    ],
    features: [
      'Interactive discovery feed with gesture-friendly responsive navigation',
      'Real-time messaging system with typing indicators and optimistic UI updates',
      'Onboarding flow requiring verified profile photo before discovery access',
      'Defensive bidirectional user moderation, blocking, and reporting UX'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vite', 'Git'],
    demoUrl: null, // Configured upon public deployment
    githubUrl: null, // Configured upon public release
    statusExplanation: 'Private repository // Walkthrough & demo available upon request',
    previewTitle: 'VYBE Application Architecture',
    previewType: 'browser',
    previewNote: 'Interactive application preview wireframe. Ready for production screenshots upon deployment.'
  },
  {
    id: 'lost-and-found',
    title: 'Lost & Found',
    category: 'Community Recovery Platform',
    featured: false,
    badge: 'Product MVP',
    status: 'In Development',
    statusType: 'development',
    tagline: 'A centralized item recovery platform connecting communities with instant categorization and search.',
    whatItIs:
      'A web application connecting people with misplaced belongings through structured categorizations, image uploads, and an automated verification workflow.',
    summary:
      'A centralized community platform connecting people with misplaced belongings through structured categorization and instant search.',
    problem:
      'Misplaced belongings are scattered across disparate social media groups and chat threads, lacking structured search, image verification, or organized ownership claiming.',
    approach:
      'Engineered a centralized catalog with multi-tag filtering, image previews, and structured claim workflows to connect finders with verified owners.',
    whatIBuilt:
      'Designed the responsive user interface, structured category filtering system, item claim request workflows, and frontend state management.',
    architecture:
      'Component-driven React client interface backed by relational data structures and responsive Tailwind CSS layouts.',
    highlights: [
      'Instant search and multi-tag filtering system',
      'Image upload and preview verification pipeline',
      'Structured item claim request workflow',
      'Responsive listing cards for mobile and desktop screens'
    ],
    features: [
      'Instant search and multi-tag filtering system',
      'Image upload and preview verification pipeline',
      'Structured item claim request workflow',
      'Responsive listing cards for mobile and desktop screens'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Responsive Design', 'Git'],
    demoUrl: null,
    githubUrl: null,
    statusExplanation: 'In active development // Staging deployment in progress',
    previewTitle: 'Lost & Found Platform Preview',
    previewType: 'browser',
    previewNote: 'Platform architecture mockup. Ready for production screenshots.'
  },
  {
    id: 'future-projects',
    title: 'Interactive 3D Web Lab',
    category: 'WebGL & Graphics R&D',
    featured: false,
    badge: 'Graphics & WebGL R&D',
    status: 'Live Interactive Concept',
    statusType: 'live',
    tagline: 'Explorations in WebGL shaders, Three.js scenes, and real-time 3D web graphics.',
    whatItIs:
      'An exploratory testing ground for cutting-edge frontend capabilities, focusing on real-time Three.js WebGL canvas integrations, procedural geometry, and performance benchmarking.',
    summary:
      'An exploratory testing ground for cutting-edge frontend capabilities, including real-time Three.js WebGL canvas integrations, procedural geometry, and performance benchmarking.',
    problem:
      'Standard web experiences often lack visual depth, missing opportunities for memorable interactive digital storytelling.',
    approach:
      'Prototyping modular 3D scenes using Three.js and React Three Fiber that maintain steady 60fps framerates across laptops and mobile devices.',
    whatIBuilt:
      'Built procedural 3D environments, custom camera rigs with parallax damping, canvas-rendered UI textures, and dynamic room lighting.',
    architecture:
      'React Three Fiber component tree with imperative Three.js render loops and dynamic canvas texture generation.',
    highlights: [
      'Interactive 3D cinematic canvas integration with React Three Fiber',
      'High-fps procedural geometry with capped DPR limits',
      'Damped mouse-parallax camera with reduced-motion compliance',
      'Live interactive implementation actively demonstrated in the Hero workstation'
    ],
    features: [
      'Interactive 3D cinematic canvas integration with React Three Fiber',
      'High-fps procedural geometry with capped DPR limits',
      'Damped mouse-parallax camera with reduced-motion compliance',
      'Live interactive implementation actively demonstrated in the Hero workstation'
    ],
    technologies: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Vite', 'Performance Optimization'],
    demoUrl: null,
    githubUrl: null,
    statusExplanation: 'Actively running in the hero section above',
    previewTitle: '3D WebGL Canvas R&D Preview',
    previewType: 'canvas',
    previewNote: 'Interactive canvas preview actively demonstrated in the Hero workstation.'
  }
];
