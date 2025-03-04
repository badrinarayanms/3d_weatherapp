### Next.js 3D Weather Visualization

An interactive Next.js application that displays weather data in a 3D model of a building, using React Three Fiber and a Weather API. The scene dynamically switches between day and night based on real-time weather conditions. Styled with Tailwind CSS for a sleek UI.

Deployed Link: https://3dweatherapp-liart.vercel.app/
## Features

-- 3D Interactive Building 🏢 with real-time weather updates

-- Day & Night Mode 🌞🌙 based on actual time

-- Weather API Integration ⛅ for real-time updates

-- Dynamic 3D Markers 📍 showing temperature, humidity, etc.

-- Smooth Animations 🎭 for immersive experience

-- Styled with Tailwind CSS 🎨

## Tech Stack

-- Next.js – for server-side rendering & API calls

-- React Three Fiber (Three.js) – for 3D rendering

-- Tailwind CSS – for responsive UI

-- Weather API – for live weather data

## Installation

# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to project folder
cd your-repo

# Install dependencies
yarn install  # or npm install

# Start development server
yarn dev  # or npm run dev

## Environment Variables

Create a .env.local file and add your API key:

NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here

## Usage

-- Enter a location to fetch weather data

-- View the 3D building with real-time weather info

-- Day & Night mode auto-switches based on time

-- Rotate, zoom, and explore the 3D scene interactively

📷 Screenshots
Day Mode ☀️
![image](https://github.com/user-attachments/assets/19e93508-7bf8-4cfc-98e3-7fe0797aa589)


Night Mode 🌙
![image](https://github.com/user-attachments/assets/d1715c76-1744-4a21-8ab3-b940582fcaac)

Contributions are welcome! Fork the repo, make your changes, and submit a PR.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

