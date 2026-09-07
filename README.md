# Interactive 3D Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live-portfolio--peach--seven--89.vercel.app-06b6d4?style=flat-square)](https://portfolio-peach-seven-89.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r182-black?style=flat-square&logo=three.js)](https://threejs.org/)

An interactive 3D developer portfolio showcasing full-stack web products, interactive WebGL experiences, and engineering case studies. Built with **React 19**, **Vite 6**, **Three.js**, **React Three Fiber**, and **Tailwind CSS**.

🌐 **Live Deployment:** [https://portfolio-peach-seven-89.vercel.app/](https://portfolio-peach-seven-89.vercel.app/)

---

## 🌌 Overview & Highlights

The portfolio is structured around a real-time, interactive 3D developer workspace overlooking an illuminated Dubai skyline, complemented by deep technical project case studies and verified capability dossiers.

### Key Capabilities
- **Interactive 3D Workspace:** Real-time WebGL scene featuring a developer workstation, procedural Dubai skyline, dynamic lighting, and interactive HUD telemetry overlays.
- **Full-Stack Engineering Proof:** In-depth case study of flagship product [VYBE](https://github.com/Nocomments-cyb/vybe) detailing PostgreSQL schema architecture, Supabase integration, and real-time WebSocket messaging.
- **Evidence-Based Technical Skills:** Transparent skill mapping directly linked to production codebases and architectural implementations.
- **Disciplined Engineering Workflow:** Documented 5-step methodology from problem discovery to production deployment (`DISCOVER → BUILD → INTEGRATE → REFINE → SHIP`).

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Build** | React 19, Vite 6, JavaScript (ES modules) |
| **3D & Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Styling & UI** | Tailwind CSS, Lucide React icons, Glassmorphism design tokens |
| **Deployment** | Vercel (CI/CD automated production builds) |

---

## ⚙️ Architecture & Engineering Considerations

### 1. Interactive 3D Scene Architecture
- **Camera & Parallax:** Damped mouse and touch parallax camera rig with bounded rotation angles to prevent disorienting camera flips.
- **Procedural Screen Textures:** Dynamic HTML5 canvas textures simulating live terminal compilation logs and syntax-highlighted IDE code.
- **Interactive Telemetry HUD:** Interactive objects (monitors, desk items) trigger responsive modal dossiers providing technical specifications.

### 2. Performance & Asset Optimization
- **Vite Manual Chunking:** Configured `manualChunks` in `vite.config.js` to isolate `three` and vendor dependencies into a standalone cacheable chunk, maintaining fast initial page loads.
- **Procedural Geometry:** The Dubai skyline, architectural window, desk, and lighting rigs are rendered procedurally to minimize external binary 3D asset overhead.
- **Hardware Acceleration & WebGL Fallback:** Automatic WebGL capability detection with a graceful fallback to a high-resolution reference render on unsupported devices or constrained browsers.

### 3. Responsive Design & Mobile Usability
- Full viewport responsiveness tested across mobile devices (360px–430px) and wide desktop displays.
- Touch-optimized interaction targets with bottom-sheet drawer patterns for mobile telemetry overlays.
- Safe-area inset handling ensuring HUD elements remain visible above mobile browser navigation bars.

### 4. Accessibility & User Preferences
- Respects `prefers-reduced-motion` media queries by disabling camera parallax and ambient floating animations.
- Accessible semantic headings (`h1`–`h4`), ARIA labels on interactive canvas controls, and high-contrast color palettes.

---

## 🗂️ Project Structure

```
portfolio/
├── public/                 # Static assets and WebGL fallback graphics
├── src/
│   ├── assets/             # Optimized image assets
│   ├── components/
│   │   ├── 3d/             # Three.js / React Three Fiber components
│   │   │   ├── DeveloperScene.jsx     # Master 3D canvas, error boundary & fallback
│   │   │   ├── CameraRig.jsx          # Damped mouse parallax controller
│   │   │   ├── Lighting.jsx           # Ambient, key, rim, and neon bounce lights
│   │   │   ├── DubaiWindow.jsx        # Procedural skyline & Burj Khalifa silhouette
│   │   │   ├── Monitors.jsx           # Dual displays with dynamic canvas textures
│   │   │   ├── DeveloperCharacter.jsx # Developer silhouette and workstation chair
│   │   │   ├── SceneHUD.jsx           # Interactive telemetry modals & mobile drawers
│   │   │   └── screenTextures.js      # Procedural IDE & terminal canvas generators
│   │   ├── projects/       # Case study modals & modular project cards
│   │   │   ├── ProjectCard.jsx        # Card with problem/solution blocks
│   │   │   └── ProjectDetails.jsx     # Full engineering case study modal
│   │   ├── Navbar.jsx      # Glassmorphism header with navigation links
│   │   ├── Hero.jsx        # Hero presentation with primary CTAs
│   │   ├── Projects.jsx    # Flagship VYBE showcase & engineering breakdown
│   │   ├── About.jsx       # Developer story & 5-step engineering workflow
│   │   ├── Skills.jsx      # Evidence-based skill matrix
│   │   ├── Contact.jsx     # Direct channels, role fits & communication form
│   │   └── Footer.jsx      # Navigation footer
│   ├── data/
│   │   ├── profileData.js  # Personal bio, contact, and capability data
│   │   ├── projectsData.js # Architectural decisions & project metadata
│   │   └── skillsData.js   # Technical skills with verified project evidence
│   ├── App.jsx             # Main layout orchestrator
│   ├── index.css           # Tailwind CSS directives & custom styling
│   └── main.jsx            # Application root entry point
├── vite.config.js          # Vite build configuration & chunking
└── package.json            # Dependencies and scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Nocomments-cyb/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 👨‍💻 Developer & Contact

- **Developer:** No Comment ([@Nocomments-cyb](https://github.com/Nocomments-cyb))
- **Role:** Software Developer & Product Builder
- **Portfolio:** [https://portfolio-peach-seven-89.vercel.app/](https://portfolio-peach-seven-89.vercel.app/)
- **Email:** [guzzy3443@gmail.com](mailto:guzzy3443@gmail.com)
- **GitHub:** [github.com/Nocomments-cyb](https://github.com/Nocomments-cyb)
