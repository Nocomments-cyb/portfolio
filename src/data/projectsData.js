export const projectsData = [
  {
    id: 'vybe',
    title: 'VYBE',
    category: 'Full-Stack Social Discovery Platform',
    featured: true,
    badge: 'Flagship Full-Stack Case Study',
    status: 'Active Development / Production-Ready MVP',
    statusType: 'active',
    tagline: 'A mobile-first social discovery platform engineered across the stack with real-time messaging and strict data security.',
    whatItIs:
      'A full-stack responsive web application designed for genuine social discovery, combining a React frontend, Supabase backend services, PostgreSQL database, real-time messaging, and defensive security rules into one cohesive product.',
    summary:
      'A full-stack social discovery product demonstrating complete end-to-end development—from responsive React UI to Supabase backend, PostgreSQL data modeling, and real-time state.',
    problem:
      'Building a modern social discovery platform with real-time interactions, clean UX, and strict privacy/moderation rules—avoiding the clutter, slow latency, and data vulnerabilities of legacy social networks.',
    approach:
      'Full-stack architecture pairing a mobile-first React frontend with Supabase and PostgreSQL. Engineered database relationships, Row Level Security (RLS) policies, real-time WebSocket subscriptions, and disciplined application state.',
    whatIBuilt:
      'Engineered the complete application across the stack: responsive React frontend, Supabase backend integration, PostgreSQL database schemas, authentication, Row Level Security rules, real-time messaging, photo-verified onboarding, and discovery/matching logic.',
    builtAcrossTheStack:
      'VYBE combines the frontend application, backend services, database, authentication, security rules, real-time functionality, and product logic into one working product.',
    architecture:
      'User → React / Vite application → Supabase services → PostgreSQL database → RLS / authentication / real-time functionality',
    architectureFlow: [
      'User',
      'React / Vite application',
      'Supabase services',
      'PostgreSQL database',
      'RLS / authentication / real-time functionality'
    ],
    highlights: [
      'Full-stack product development combining React interface and Supabase/PostgreSQL backend',
      'Real-time messaging functionality with WebSocket subscriptions, typing indicators, and optimistic UI',
      'Defensive Row Level Security (RLS) policies enforcing multi-tenant privacy at the database layer',
      'End-to-end product logic for user authentication, profile management, photo onboarding requirements, and matching workflows'
    ],
    features: [
      'React frontend with responsive, gesture-friendly product interface',
      'Supabase backend & PostgreSQL relational schema modeling',
      'User authentication & session management with Row Level Security (RLS)',
      'Real-time messaging functionality with live WebSocket subscriptions',
      'Product & discovery logic with likes, mutual matching, and user status',
      'Profile management with strict photo onboarding requirements',
      'Data-driven application state with optimistic caching and error handling',
      'Clean backend integration connecting client mutations with database contracts'
    ],
    technologies: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Real-time', 'RLS'],
    demoUrl: null, // Configured upon public deployment
    githubUrl: null, // Configured upon public release
    statusExplanation: 'Private repository // Walkthrough & demo available upon request',
    previewTitle: 'VYBE Application Architecture',
    previewType: 'browser',
    previewNote: 'Full-stack application architecture preview. Ready for production screenshots upon deployment.'
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
      'Designed the responsive user interface, structured category filtering system, item claim request workflows, and application state management.',
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
      'An exploratory testing ground for interactive web graphics, focusing on real-time Three.js WebGL canvas integrations, procedural geometry, and performance benchmarking.',
    summary:
      'An exploratory testing ground for interactive web graphics, including real-time Three.js WebGL canvas integrations, procedural geometry, and performance benchmarking.',
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
