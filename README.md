# No Comment — Developer Portfolio

A dark, premium, futuristic developer portfolio website featuring a **real-time 3D cinematic developer environment** built with **React 19**, **Vite 6**, **Three.js**, and **React Three Fiber**.

---

## 🌌 Visual Concept & Stage 2 3D Architecture

The hero section transports the visitor directly into a private developer sanctuary:
- **Atmosphere:** Deep indigo/midnight room with cinematic purple/cyan/blue neon ambient lighting.
- **Architectural Panorama:** Floor-to-ceiling glass window overlooking the illuminated Dubai night skyline, featuring a stepped, glowing silhouette of the **Burj Khalifa** with an active aviation hazard beacon, high-rise skyscrapers, and Sheikh Zayed highway light streaks.
- **3D Workstation:**
  - **Monitors:** Dual-display array—an ultrawide 38" monitor displaying active React IDE code with realistic syntax highlighting and an overhead light bar, paired with a vertical 27" monitor showing live terminal logs and database telemetry.
  - **Developer Character:** Tasteful stylized silhouette/figure of a young Black male developer in deep focus with a styled fade haircut and over-ear studio headphones.
  - **Peripherals:** Custom 75% mechanical keyboard with RGB underglow, precision mouse on a leatherette desk mat, ceramic coffee mug with rising steam, artisan succulent, and liquid-cooled PC chassis with spinning RGB fans.
  - **Room:** Acoustic dark wood slat wall with vertical neon channels and floating display shelf.
- **Interactive Objects:** Click or hover on the Monitors, Window, Developer, Keyboard, or Headphones to trigger focused HUD telemetry dossiers or navigate directly to projects.
- **Cinematic Camera:** Smooth mouse parallax with gentle damping, automatically reduced on mobile devices and respecting `prefers-reduced-motion`.
- **Graceful Fallback:** Automatic WebGL detection fallback to high-fidelity reference render if WebGL is unavailable.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                  # HTML entry point with custom font stack
├── package.json                # Project dependencies (React 19, Three.js, R3F, etc.)
├── vite.config.js              # Vite config with manual chunking for Three.js
├── public/                     # Static public assets
│   └── developer_workspace.jpg # Visual fallback & reference asset
├── src/
│   ├── assets/                 # Image assets
│   ├── components/
│   │   ├── 3d/                 # Real 3D Cinematic Workspace Architecture
│   │   │   ├── DeveloperScene.jsx     # Master 3D Canvas, WebGL detector & error boundary
│   │   │   ├── CameraRig.jsx          # Damped mouse parallax camera controller
│   │   │   ├── Lighting.jsx           # Key, rim, ambient, and neon bounce lights
│   │   │   ├── DubaiWindow.jsx        # Procedural Burj Khalifa, towers, and starfield
│   │   │   ├── Desk.jsx               # Sit-stand desk, steel legs, desk mat, LED strip
│   │   │   ├── Monitors.jsx           # Dual monitors with custom canvas textures
│   │   │   ├── DeveloperCharacter.jsx # Stylized developer silhouette & executive chair
│   │   │   ├── Peripherals.jsx        # Mechanical keyboard, mouse, mug, PC rig
│   │   │   ├── Room.jsx               # Acoustic slat wall, floor, floating shelf
│   │   │   ├── SceneHUD.jsx           # Futuristic interactive telemetry overlay & modals
│   │   │   └── screenTextures.js      # Procedural IDE & Terminal canvas texture generators
│   │   ├── Navbar.jsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── Hero.jsx            # Hero section with exact copy & CTA buttons
│   │   ├── WorkspaceVisual.jsx # Master workspace container (3D, Photo, Telemetry modes)
│   │   ├── Projects.jsx        # Flagship showcase (VYBE), Lost & Found, and Future R&D
│   │   ├── About.jsx           # Developer bio, product ethos, and interactive terminal
│   │   ├── Skills.jsx          # Categorized technical capabilities
│   │   ├── Contact.jsx         # Transmission hub & availability status
│   │   ├── Icons.jsx           # Clean SVG brand icons
│   │   └── Footer.jsx          # Footer with quick navigation
│   ├── data/
│   │   ├── projectsData.js      # Structured project metadata
│   │   └── skillsData.js        # Skill categorization
│   ├── App.jsx                 # Main application layout orchestrator
│   ├── index.css               # Styling, cyber grid, and custom scrollbar
│   └── main.jsx                # React root mount point
```

---

## 🚀 How to Run Locally

1. **Navigate to the directory:**
   ```bash
   cd /home/shhhh/portfolio
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Create a production build:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```
