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
    whatIActuallyBuilt: [
      {
        category: 'Frontend',
        details: 'React UI, responsive mobile-first layouts, interactive discovery feed, custom component state, and real-time messaging interface'
      },
      {
        category: 'Backend',
        details: 'Supabase platform integration, secure session authentication, Storage for verified user photos, and RESTful client-server contracts'
      },
      {
        category: 'Database',
        details: 'PostgreSQL relational schema modeling, foreign key relationships, table indexes, and granular Row Level Security (RLS) policies'
      },
      {
        category: 'Real-Time',
        details: 'Live WebSocket subscriptions for instant chat messaging, typing presence, and optimistic UI client updates'
      },
      {
        category: 'Product Logic',
        details: 'User discovery algorithms, likes, mutual matching workflows, online status, and strict photo onboarding verification'
      }
    ],
    architecture:
      'User → React / Vite application → Supabase services → PostgreSQL database → RLS / authentication / real-time functionality',
    architectureTree: [
      { level: 1, label: 'USER', sub: 'Client Browser & Mobile Viewport' },
      { level: 2, label: 'REACT / VITE', sub: 'Component Architecture, Custom Hooks & Reactive State' },
      {
        level: 3,
        label: 'SUPABASE PLATFORM',
        branches: [
          { name: 'AUTH', desc: 'Session tokens & identity lifecycle' },
          { name: 'DATABASE', desc: 'Data operations & query contract' },
          { name: 'STORAGE', desc: 'Verified profile photos & assets' },
          { name: 'REAL-TIME', desc: 'Live WebSocket channel subscriptions' }
        ]
      },
      { level: 4, label: 'POSTGRESQL + RLS', sub: 'Relational Schemas, Constraints & Row Level Security Policies' }
    ],
    engineeringDecisions: [
      {
        title: 'Component-Driven Architecture',
        rationale: 'Separated UI atoms, custom hooks for application state, and modular views to ensure maintainability and predictable debugging.'
      },
      {
        title: 'Defensive Data Access with RLS',
        rationale: 'Enforced multi-tenant privacy directly in PostgreSQL via Row Level Security, ensuring unauthorized requests cannot access or mutate private data.'
      },
      {
        title: 'Real-Time Application Synchronization',
        rationale: 'Leveraged Supabase real-time subscriptions with optimistic client updates for instantaneous messaging feedback without polling lag.'
      },
      {
        title: 'Mobile-First Responsive Engineering',
        rationale: 'Designed layout systems and touch-friendly gesture navigation specifically for handheld phone viewports before adapting to desktop monitors.'
      },
      {
        title: 'Input Validation & Defensive UI States',
        rationale: 'Implemented strict client-side validation, verified photo requirements during onboarding, and clear error/empty state boundaries.'
      },
      {
        title: 'Separation of UI, Data, and Interaction Logic',
        rationale: 'Decoupled visual rendering from data querying and mutations, keeping application components lean and straightforward to test.'
      }
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
    whatIActuallyBuilt: [
      {
        category: 'Frontend',
        details: 'Responsive catalog layout, live keyword search, multi-tag category filter pills, and mobile-friendly item cards'
      },
      {
        category: 'Backend & Data',
        details: 'Supabase integration, relational item records, image upload preview pipeline, and claim request submissions'
      },
      {
        category: 'Product Logic',
        details: 'Finder/owner claim verification protocol, categorized discovery tags, and item status tracking'
      }
    ],
    engineeringDecisions: [
      {
        title: 'State-Driven Tag Filtering',
        rationale: 'Engineered responsive multi-tag filtering directly in client state for sub-millisecond search updates without page reloads.'
      },
      {
        title: 'Client-Side Image Validation',
        rationale: 'Implemented image format, size verification, and instant local thumbnail generation before network upload dispatch.'
      },
      {
        title: 'Structured Claim Verification',
        rationale: 'Created a step-by-step verification flow ensuring misplaced items require specific identifying details before contact release.'
      }
    ],
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
    statusExplanation: 'In active development // Walkthrough & demo available upon request',
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
      'Standard web experiences often lack visual depth, missing opportunities for memorable interactive digital storytelling and spatial product showcases.',
    approach:
      'Prototyping modular 3D scenes using Three.js and React Three Fiber that maintain steady 60fps framerates across laptops and mobile devices.',
    whatIBuilt:
      'Built procedural 3D environments, custom camera rigs with parallax damping, canvas-rendered UI textures, dynamic room lighting, and capped DPR performance configurations.',
    whatIActuallyBuilt: [
      {
        category: '3D Canvas & Meshes',
        details: 'Procedural room geometry, desk, monitors, Dubai skyline with Burj Khalifa, and lighting rigs in React Three Fiber'
      },
      {
        category: 'Interaction Systems',
        details: 'Object selection, raycasting hit-tests, pointer hover indicators, and bidirectional scene-to-HUD communication'
      },
      {
        category: 'Performance Optimization',
        details: 'DPR clamped to 1–1.5, memoized geometries, lightweight materials, and prefers-reduced-motion damping for smooth 60fps execution'
      }
    ],
    engineeringDecisions: [
      {
        title: 'DPR Clamping & Thermal Control',
        rationale: 'Clamping device pixel ratios to max 1.5 prevents high-density mobile screens from dropping frames or drawing excessive GPU power.'
      },
      {
        title: 'Parallax Damping & Accessibility',
        rationale: 'Implemented exponential smoothing for mouse and scroll parallax with full fallback disablement for users preferring reduced motion.'
      },
      {
        title: 'Dynamic Canvas Textures',
        rationale: 'Generated procedural terminal code textures in JavaScript and mapped them onto 3D monitor surfaces without external video file weight.'
      }
    ],
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
    statusExplanation: 'Actively running in the hero workstation above',
    previewTitle: '3D WebGL Canvas R&D Preview',
    previewType: 'canvas',
    previewNote: 'Interactive canvas preview actively demonstrated in the Hero workstation.'
  }
];
