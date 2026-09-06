export const projectsData = [
  {
    id: 'vybe',
    title: 'VYBE',
    category: 'Full Stack Web App',
    featured: true,
    badge: 'Flagship Case Study',
    status: 'In Development / Prototype',
    statusType: 'development',
    tagline: 'A modern social/dating experience focused on helping people discover meaningful connections.',
    summary:
      'A full-stack social discovery application designed with responsive layouts, real-time interactions, and modern state architecture.',
    problem:
      'Traditional social and connection platforms often feel cluttered, slow, or impersonal, relying on complex interfaces that distract from genuine discovery.',
    approach:
      'Engineered a lightweight, mobile-first web interface prioritizing fast loading, clean typography, intuitive user discovery cards, and real-time backend synchronization.',
    features: [
      'Real-time data synchronization & authentication flow',
      'Optimized component hierarchy with zero layout shifts',
      'Mobile-first responsive interface with dark-mode aesthetic',
      'Relational schema design on PostgreSQL with secure access controls'
    ],
    technologies: ['React', 'JavaScript', 'Vite', 'Supabase', 'PostgreSQL', 'Git/GitHub'],
    demoUrl: null, // Set real URL when deployment is active
    githubUrl: null, // Set real repository URL when public
    previewTitle: 'VYBE Application Preview Frame',
    previewType: 'browser',
    previewNote: 'Neutral preview wireframe. Ready to be replaced with real application screenshots.'
  },
  {
    id: 'lost-and-found',
    title: 'Lost & Found',
    category: 'Community Platform',
    featured: false,
    badge: 'Active Project',
    status: 'In Development',
    statusType: 'development',
    tagline: 'A streamlined reporting and item recovery network with real-time match notifications.',
    summary:
      'A centralized community platform connecting people with misplaced belongings through structured categorization and instant search.',
    problem:
      'Misplaced items are typically reported across scattered chat groups or social feeds, making it difficult for finders and owners to search or verify claims efficiently.',
    approach:
      'Created a centralized catalog with category filtering, image uploads, and an automated verification workflow to connect finders with rightful owners.',
    features: [
      'Instant search and multi-tag filtering system',
      'Image upload and preview verification pipeline',
      'Structured item claim request workflow',
      'Responsive listing cards for mobile and desktop screens'
    ],
    technologies: ['React', 'JavaScript', 'Supabase', 'Tailwind CSS', 'Responsive Design'],
    demoUrl: null,
    githubUrl: null,
    previewTitle: 'Lost & Found Platform Preview',
    previewType: 'browser',
    previewNote: 'Platform architecture mockup. Ready for production screenshots.'
  },
  {
    id: 'future-projects',
    title: 'Future R&D Lab',
    category: 'Next-Gen Concepts',
    featured: false,
    badge: 'Concept & R&D',
    status: 'Concept',
    statusType: 'concept',
    tagline: 'Experimental web interfaces, 3D digital twins, and AI-accelerated workflows.',
    summary:
      'An exploratory testing ground for cutting-edge frontend capabilities, including real-time Three.js WebGL canvas integrations, shader design, and performance benchmarking.',
    problem:
      'Standard web experiences often lack visual depth and memorable interactive storytelling, missing opportunities to engage users on a deeper emotional level.',
    approach:
      'Prototyping modular 3D scenes using Three.js and React Three Fiber that maintain high performance (60 FPS) across lower-power mobile devices and laptops.',
    features: [
      'Interactive 3D cinematic canvas integration with React Three Fiber',
      'High-fps procedural geometry with capped DPR limits',
      'Damped mouse-parallax camera with reduced-motion compliance',
      'Modular client architecture ready for GLTF asset pipelines'
    ],
    technologies: ['React', 'Three.js', 'React Three Fiber', 'Vite', 'Performance Optimization'],
    demoUrl: null,
    githubUrl: null,
    previewTitle: '3D WebGL Canvas R&D Preview',
    previewType: 'canvas',
    previewNote: 'Interactive canvas preview actively demonstrated in the Hero section.'
  }
];
