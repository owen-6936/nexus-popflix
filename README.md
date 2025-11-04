# 🎬 Popflix UI

Popflix is a modular, milestone-driven streaming interface built with Next.js. It supports multitasking-aware playback, reviewer-centric tagging, and badge-worthy contributor experiences.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS + Radix UI
- **State**: Zustand (lightweight and composable)
- **Player**: Shaka Player (adaptive streaming)
- **Auth**: NextAuth.js + JWT
- **Animations**: Framer Motion
- **CLI Companion**: Termplex integration (optional)

## 🧱 Project Structure

```bash

popflix-ui/
├── app/                  # App Router pages
│   ├── watch/[id]/       # Playback with milestone overlays
│   ├── discover/         # Smart search and watchlists
│   ├── badges/           # Contributor badge dashboard
│   └── layout.tsx        # Shared layout and style tokens
├── components/           # Reusable UI components
├── lib/                  # API clients, auth, style logic
├── public/               # Static assets
├── styles/               # Tailwind config and globals
├── tailwind.config.ts
├── tsconfig.json

```

## 🧠 Milestone Features

- 🎥 **Custom Player** with badge overlays and heatmap timeline
- 🧠 **MilestoneTagger** for scene annotations and contributor clarity
- 🏷️ **Badge System** for binge streaks, genre mastery, and review quality
- 🧩 **Modular Microservices** (coming soon) for media, auth, discovery, and analytics

## 🛠 Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## 📦 Scripts

```bash
pnpm dev       # Start dev server
pnpm build     # Build for production
pnpm lint      # Run ESLint
pnpm format    # Format with Prettier
```

## 🧪 Coming Soon

- CLI playback interface via Termplex
- Contributor velocity dashboard
- Anonymous mode with local-first data
- Programmable watchlist builder

---

Built with clarity, speed, and contributor joy ✨
