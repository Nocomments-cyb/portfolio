# No Comment — Developer Portfolio

A dark, premium, futuristic developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌌 Visual Concept & Architecture

The portfolio represents an interactive cinematic developer environment:
- **Atmosphere:** Dark futuristic developer sanctuary at night.
- **Visual Centerpiece:** A young Black male developer working at a high-end dual-monitor workstation, with headphones, ambient neon purple/cyan lighting, and the Dubai night skyline (featuring the Burj Khalifa) visible through panoramic floor-to-ceiling windows.
- **Stage 1 Foundation:** Visual shell and clean component layout ready for progressive enhancement. Includes HUD overlay toggles, telemetry readouts, and an explicit mount container (`#interactive-scene-root`) prepared for the future 3D/WebGL interactive character scene.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                  # HTML entry point with custom font stack
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration with Tailwind CSS v4 & React
├── public/                     # Static public assets
│   └── developer_workspace.jpg # Visual shell workspace asset
├── src/
│   ├── assets/                 # Image assets
│   │   └── developer_workspace.jpg
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphism sticky navbar with mobile drawer
│   │   ├── Hero.jsx            # Hero section with primary message & CTA buttons
│   │   ├── WorkspaceVisual.jsx # Developer workspace visual shell & WebGL placeholder
│   │   ├── Projects.jsx        # VYBE flagship showcase, Lost & Found, & Future R&D
│   │   ├── About.jsx           # Developer bio, product ethos, & interactive terminal
│   │   ├── Skills.jsx          # Categorized technical capabilities & quality guarantee
│   │   ├── Contact.jsx         # Transmission form, Dubai location, & direct channels
│   │   ├── Icons.jsx           # Clean SVG brand icons (GitHub, LinkedIn, Twitter)
│   │   └── Footer.jsx          # Minimalist footer with quick jump links
│   ├── data/
│   │   ├── projectsData.js      # Structured project metadata (VYBE, Lost & Found, etc.)
│   │   └── skillsData.js        # Skill categorization (React, Supabase, PostgreSQL, etc.)
│   ├── App.jsx                 # Main application layout orchestrator
│   ├── index.css               # Cyber grid, glow utilities, and scrollbar styling
│   └── main.jsx                # React root mount point
```

---

## 🚀 How to Run Locally

1. **Clone or Navigate to the directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Create a production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```
