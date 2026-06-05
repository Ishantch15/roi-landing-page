import React, { useState, useEffect, useRef } from 'react';
import background from './assets/background.jpg';
import heroVideo from './assets/video.mp4';
import logo from './assets/roilogo.jpg';
import { Search, Bot, Zap, BarChart2, Settings, Brain, Eye, Sparkles, Users, CheckCircle, MessageCircle, Globe, X } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400;1,9..40,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
  }

  /* Header */
  .roi-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(200, 200, 200, 0.2);
  transition: all 0.3s ease;
}

  .roi-header.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .roi-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  max-width: 1280px;
  margin: 0 auto;
}
  @media (min-width: 768px) {
  .roi-header-content {
    height: 80px;
    padding: 0 24px;
  }
}

  .roi-logo {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #1a1a1a;
  }

  .roi-nav {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .roi-nav {
      display: none;
    }
  }

  .roi-nav a {
    font-weight: 600;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    padding: 8px 0;
    transition: color 0.3s;
    border-bottom: 2px solid transparent;
  }

  .roi-nav a:hover {
    color: #ff6600;
  }

  .roi-nav a.active {
    color: #ff6600;
    border-bottom-color: #ff6600;
  }

  .roi-header-cta {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media (max-width: 640px) {
    .roi-header-cta a {
      display: none;
    }
  }

  .roi-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .roi-btn-primary {
    background: #ff6600;
    color: white;
    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.3);
  }

  .roi-btn-primary:hover {
    transform: scale(1.05);
  }

  .roi-mobile-menu {
  display: none;
  background: white;
  border-top: 1px solid rgba(200, 200, 200, 0.15);
  padding: 12px 16px 20px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.roi-mobile-menu.open {
  display: block;
}

.roi-mobile-menu a:hover {
  background: rgba(255,102,0,0.06);
  color: #ff6600;
  border-radius: 12px;
}

.roi-mobile-menu-btn {
  display: none;
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  padding: 6px 10px;
  color: #1a1a1a;
  transition: all 0.3s;
}

.roi-mobile-menu-btn:hover {
  border-color: #ff6600;
  color: #ff6600;
}

@media (max-width: 1024px) {
  .roi-mobile-menu-btn {
    display: block;
  }
  .roi-header-cta {
    display: none;
  }
}

  /* Main Content */
  main {
    padding-top: 80px;
  }
#root {
  width: 100%;
  overflow-x: hidden;
}

  /* ===================== HERO SECTION ===================== */
  .hero {
  background: #0f172a;
  color: white;
  overflow: hidden;
  padding: 60px 0 80px;
  position: relative;
  width: 100%;
}

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,102,0,0.12) 0%, transparent 70%),
                radial-gradient(ellipse 40% 40% at 20% 20%, rgba(255,153,51,0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 80px 64px 120px;
    }
  }

  .hero-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    align-items: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 9999px;
    background: rgba(255, 102, 0, 0.12);
    color: #ff9933;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 102, 0, 0.25);
    width: fit-content;
    opacity: 0;
    transform: translateY(16px);
    animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
  }

  .hero-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff6600;
    display: inline-block;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }

  .hero-h1 {
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 700px;
}
@media (min-width: 768px) {
  .hero-h1 {
    font-size: 50px;
    max-width: 800px;
  }
}

.hero-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: letterReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes letterReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-letter.orange {
  color: #ff6600;
  font-style: italic;
}

.hero-letter.space {
  width: 0.25em;
}

  .hero-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(40px) rotateX(-20deg);
    transform-origin: top center;
    animation: wordReveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    margin-right: 0.22em;
  }

  .hero-word:last-child {
    margin-right: 0;
  }

  @keyframes wordReveal {
    0% { opacity: 0; transform: translateY(40px) rotateX(-20deg); }
    60% { opacity: 1; }
    100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
  }

  .hero-word.orange {
    color: #ff6600;
    position: relative;
  }

  .hero-word.orange::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 2px;
    transition: width 0.4s ease 0.2s;
  }

  .hero-word.orange.underline-visible::after {
    width: 100%;
  }

  .hero-word.italic {
    font-style: italic;
    color: #ff9933;
  }

  .hero-subtitle {
    font-size: 18px;
    color: rgba(255,255,255,0.65);
    max-width: 560px;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(20px);
  }

  .hero-subtitle.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes fadeSlideUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 8px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
  }

  .hero-buttons.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @media (min-width: 640px) {
    .hero-buttons {
      flex-direction: row;
    }
  }

  .hero-stats {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(16px);
  }

  .hero-stats.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .hero-stat-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 9999px;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    transition: all 0.3s;
  }

  .hero-stat-pill:hover {
    background: rgba(255,102,0,0.1);
    border-color: rgba(255,102,0,0.3);
    color: white;
  }

  .hero-stat-pill-num {
    color: #ff9933;
    font-size: 16px;
    font-weight: 800;
  }

  /* ===================== END HERO ===================== */

  .btn-main {
    background: #ff6600;
    color: white;
    padding: 18px 36px;
    border: none;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(255, 102, 0, 0.4);
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.3px;
  }

  .btn-main:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 102, 0, 0.5);
  }

  .btn-secondary {
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 18px 36px;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 15px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255,255,255,0.4);
  }

  /* Dashboard Images Gallery */
  .dashboard-gallery {
  background: white;
  padding: 0;
  margin: 0;
  width: 100%;
}

  @media (min-width: 768px) {
    .dashboard-gallery {
      padding: 60px 24px;
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: center;
  }

  @media (min-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .gallery-image {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(200, 200, 200, 0.3);
    object-fit: cover;
  }

  /* Section Base Styles */
  .section {
    padding: 80px 24px;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .section {
      padding: 120px 64px;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-h2 {
    font-size: 36px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) {
    .section-h2 {
      font-size: 48px;
    }
  }

  .section-h2 .orange {
    color: #ff6600;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 8px;
  }

  .section-h2 .italic-orange {
    color: #ff6600;
    font-style: italic;
  }

  .section-p {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    font-size: 18px;
  }

  /* Card Grids */
  .grid-3 {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .grid-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .grid-5 {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .grid-5 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-5 {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .card:hover {
    border-color: #ff6600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .card-h4 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #1a1a1a;
  }

  .card-p {
    color: #666;
    font-size: 14px;
  }

  /* Challenges Section */
  .challenges {
    background: white;
  }

  .challenge-card {
    background: white;
    border: 1px solid #eee;
    border-radius: 24px;
    padding: 32px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .challenge-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,102,0,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .challenge-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .challenge-card:hover {
    border-color: rgba(255,102,0,0.25);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(255,102,0,0.1), 0 4px 12px rgba(0,0,0,0.06);
  }

  .challenge-card:hover::before { opacity: 1; }
  .challenge-card:hover::after { transform: scaleX(1); }

  .challenge-card:hover .challenge-icon-wrap {
    background: #ff6600;
    color: white;
    transform: rotate(-8deg) scale(1.1);
  }

  .challenge-card:hover .challenge-bar-fill {
    width: 100%;
  }

  .challenge-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .challenge-icon-wrap {
    width: 56px;
    height: 56px;
    background: rgba(255,102,0,0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff6600;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .challenge-num {
    font-size: 28px;
    font-weight: 800;
    color: rgba(255,102,0,0.15);
    font-family: 'Syne', sans-serif;
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }

  .challenge-card:hover .challenge-num { color: rgba(255,102,0,0.3); }

  .challenge-title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    letter-spacing: -0.3px;
  }

  .challenge-desc {
    color: #888;
    font-size: 14px;
    line-height: 1.6;
    flex: 1;
  }

  .challenge-bar {
    height: 3px;
    background: #f0f0f0;
    border-radius: 9999px;
    overflow: hidden;
    margin-top: 8px;
  }

  .challenge-bar-fill {
    height: 100%;
    width: 30%;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 9999px;
    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* ===================== FRAMEWORK SECTION ===================== */
  .framework {
    background: #0f172a;
    position: relative;
    overflow: hidden;
  }

  .framework::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,102,0,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 30% 40% at 10% 10%, rgba(255,153,51,0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .framework::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .framework .section-h2 { color: white; }
  .framework .section-p { color: rgba(255,255,255,0.55); }

  .framework-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .framework-grid {
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
    }
  }

  .phase-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 36px 28px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
    transform: translateY(50px);
  }

  .phase-card.card-visible {
    animation: phaseCardReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes phaseCardReveal {
    0% { opacity: 0; transform: translateY(50px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .phase-card:nth-child(1) { animation-delay: 0.0s; }
  .phase-card:nth-child(2) { animation-delay: 0.1s; }
  .phase-card:nth-child(3) { animation-delay: 0.2s; }
  .phase-card:nth-child(4) { animation-delay: 0.3s; }
  .phase-card:nth-child(5) { animation-delay: 0.4s; }

  .phase-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff6600, #ff9933, transparent);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }

  .phase-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,102,0,0.12) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    border-radius: 24px;
  }

  .phase-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255, 102, 0, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(255, 102, 0, 0.15), 0 0 0 1px rgba(255,102,0,0.2);
  }

  .phase-card:hover::before { opacity: 1; }
  .phase-card:hover::after { opacity: 1; }
  .phase-card:hover .phase-num { transform: scale(1.15) rotate(10deg); box-shadow: 0 8px 25px rgba(255, 102, 0, 0.5); }
  .phase-card:hover .phase-h4 { color: #ff9933; }
  .phase-card:hover .phase-connector { width: 100%; }

  .phase-num {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, #ff6600, #ff9933);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 4px 15px rgba(255, 102, 0, 0.35);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 1;
  }

  .phase-h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
    letter-spacing: -0.3px;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  .phase-connector {
    position: absolute;
    bottom: 0; left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #ff6600, transparent);
    transition: width 0.5s ease;
    border-radius: 0 0 24px 24px;
  }

  .phase-list {
    list-style: none;
    position: relative;
    z-index: 1;
  }

  .phase-list li {
    display: flex;
    gap: 10px;
    font-size: 13.5px;
    color: rgba(255,255,255,0.55);
    margin-bottom: 14px;
    font-weight: 500;
    align-items: flex-start;
    transition: color 0.3s ease;
  }

  .phase-card:hover .phase-list li { color: rgba(255,255,255,0.75); }

  .phase-list li span:first-child {
    color: #ff6600;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ===================== END FRAMEWORK ===================== */

  /* Features Section */
  .features { background: white; }

  .feature-card {
    background: #f0f4ff;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255,102,0,0.1);
    border-color: #ff6600;
  }

  .feature-icon { font-size: 36px; margin-bottom: 16px; }
  .feature-h4 { font-weight: 700; font-size: 18px; margin-bottom: 8px; color: #1a1a1a; }
  .feature-p { font-size: 14px; color: #666; }

  /* Dark Sections */
  .dark-section {
    background: #0f172a;
    color: white;
    position: relative;
    overflow: hidden;
  }

  .dark-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .dark-grid { grid-template-columns: 1fr 1fr; }
  }

  .dark-left { display: flex; flex-direction: column; gap: 32px; }

  .dark-h2 {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) { .dark-h2 { font-size: 48px; } }

  .dark-p { font-size: 18px; color: #d1d5db; line-height: 1.7; }

  .stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .stat-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
  }

  .stat-num { color: #ff6600; font-size: 28px; font-weight: 800; margin-bottom: 8px; }
  .stat-label { font-size: 10px; font-weight: 600; letter-spacing: 1px; color: rgba(255, 255, 255, 0.6); }

  .aeo-items { display: flex; flex-direction: column; gap: 16px; }

  .aeo-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px;
    border-radius: 24px;
    display: flex;
    gap: 16px;
    transition: all 0.3s;
  }

  .aeo-item:hover {
    background: rgba(255,102,0,0.08);
    border-color: rgba(255,102,0,0.3);
  }

  .aeo-icon {
    width: 48px; height: 48px;
    background: rgba(255, 102, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 20px;
  }

  .aeo-content h4 { font-weight: 700; font-size: 18px; margin-bottom: 4px; }
  .aeo-content p { font-size: 14px; color: #d1d5db; }

  /* Case Studies */
  .case-studies { background: white; }

  .case-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    .case-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
  }

  .case-hero {
    position: relative;
    height: 300px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    margin-bottom: 32px;
  }

  @media (min-width: 768px) { .case-hero { height: 500px; } }

  .case-hero img { width: 100%; height: 100%; object-fit: cover; }
  .case-hero video { width: 100%; height: 100%; object-fit: cover; }

  .case-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px;
    color: white;
  }

  .case-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: flex-end;
  }

  @media (min-width: 768px) { .case-content { grid-template-columns: 1fr auto; } }

  .case-tag {
    display: inline-block;
    background: #ff6600;
    color: white;
    padding: 6px 12px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 700;
    width: fit-content;
  }

  .case-title { font-size: 24px; font-weight: 700; }
  @media (min-width: 768px) { .case-title { font-size: 32px; } }
  .case-desc { color: rgba(255, 255, 255, 0.7); font-size: 14px; }

  .metrics { display: flex; gap: 16px; }

  .metric {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px;
    border-radius: 16px;
    text-align: center;
    min-width: 120px;
  }

  .metric-num { font-size: 24px; font-weight: 700; color: #ff9933; margin-bottom: 4px; }
  .metric-label { font-size: 10px; font-weight: 600; letter-spacing: 0.5px; color: rgba(255, 255, 255, 0.6); }

  .case-cards {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .case-cards { grid-template-columns: repeat(2, 1fr); } }

  .case-card {
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all 0.3s;
  }

  .case-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(255,102,0,0.1); border-color: #ff6600; }

  .case-card-header { display: flex; justify-content: space-between; align-items: flex-start; }
  .case-metric { text-align: right; }
  .case-metric-num { font-size: 28px; font-weight: 700; color: #ff6600; }
  .case-metric-label { font-size: 10px; font-weight: 600; color: #666; }
  .case-card-h4 { font-size: 20px; font-weight: 700; color: #1a1a1a; }
  .case-card-p { color: #666; font-size: 14px; }
  .case-link { color: #ff6600; font-weight: 600; text-decoration: none; font-size: 14px; cursor: pointer; }

  /* ===================== COMPARISON — CARD LAYOUT ===================== */
  .comparison { background: #f5f5f5; }

  .comparison-wrapper {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e8e8;
  }

  /* Header row */
  .comparison-header {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    background: #0f172a;
  }

  @media (max-width: 768px) {
    .comparison-header {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .comparison-header-cell {
    padding: 20px 24px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.3px;
    color: rgba(255,255,255,0.6);
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .comparison-header-cell:last-child { border-right: none; }

  .comparison-header-cell.col-highlight {
    background: #ff6600;
    color: white;
    position: relative;
  }

  .comparison-header-cell.col-highlight::after {
    content: '★ BEST';
    display: block;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.75);
    margin-top: 4px;
  }

  /* Data rows */
  .comparison-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    border-top: 1px solid #f0f0f0;
    transition: background 0.2s ease;
  }

  @media (max-width: 768px) {
    .comparison-row {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .comparison-row:hover { background: #fafafa; }

  .comparison-cell {
    padding: 20px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #555;
    border-right: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    line-height: 1.5;
  }

  .comparison-cell:last-child { border-right: none; }

  .comparison-cell.col-feature {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 14px;
    background: #fafafa;
  }

  .comparison-cell.col-highlight {
    font-weight: 700;
    color: #ff6600;
    background: rgba(255, 102, 0, 0.02);
    font-size: 14px;
    position: relative;
  }

  .comparison-cell.col-muted {
    color: #999;
    font-size: 13px;
  }

  @media (max-width: 640px) {
    .comparison-cell {
      padding: 16px 12px;
      font-size: 12px;
    }
    .comparison-cell.col-feature {
      font-size: 12px;
    }
    .comparison-header-cell {
      padding: 16px 12px;
      font-size: 11px;
    }
  }
  /* ===================== END COMPARISON ===================== */

  /* Campaign */
  .campaign { background: #0f172a; color: white; }

  .campaign-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
  }

  @media (min-width: 1024px) { .campaign-grid { grid-template-columns: 1fr 1fr; } }

  .campaign-left { display: flex; flex-direction: column; gap: 32px; }

  .campaign-h2 {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .campaign-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 640px) { .campaign-items { grid-template-columns: repeat(2, 1fr); } }

  .campaign-item { display: flex; gap: 16px; }
  .campaign-icon { flex-shrink: 0; margin-top: 4px; color: #ff6600; }
  .campaign-item h4 { font-weight: 700; margin-bottom: 4px; }
  .campaign-item p { font-size: 12px; color: #a0aec0; }

  .results-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .results-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }

  .result-num { font-size: 48px; font-weight: 800; color: #ff6600; margin-bottom: 8px; }
  .result-label { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; color: rgba(255, 255, 255, 0.6); }

  /* FAQ */
  .faq { background: #f0f4ff; }
  .faq-container { max-width: 1200px; margin: 0 auto; }

  .faq-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }

  .faq-column { display: flex; flex-direction: column; gap: 12px; }

  .faq-item {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    margin-bottom: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .faq-item:hover { border-color: rgba(255,102,0,0.3); }

  .faq-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .faq-toggle:hover { background: #f0f4ff; }
  .faq-question { font-weight: 700; font-size: 18px; color: #1a1a1a; }
  .faq-chevron { flex-shrink: 0; color: #ff6600; transition: transform 0.3s; }
  .faq-chevron.open { transform: rotate(180deg); }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 1px solid #eee;
  }

  .faq-answer.open { max-height: 500px; }
  .faq-answer-text { padding: 24px 32px; color: #666; line-height: 1.7; font-size: 14px; }

  /* Process */
  .process { background: white; }

  .process-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }

  .process-step {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s;
  }

  .process-step:hover { border-color: #ff6600; box-shadow: 0 8px 24px rgba(255,102,0,0.1); transform: translateY(-4px); }

  .step-num {
    width: 48px; height: 48px;
    background: #ff6600;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 700;
    font-size: 18px;
  }

  .step-title { font-weight: 700; color: #1a1a1a; }
  .step-desc { font-size: 14px; color: #666; }

  /* CTA */
  .cta { background: #0f172a; color: white; position: relative; overflow: hidden; }

  .cta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) { .cta-grid { grid-template-columns: 1fr 1fr; } }

  .cta-left { display: flex; flex-direction: column; gap: 32px; }

  .cta-h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) { .cta-h2 { font-size: 56px; } }

  .cta-p { font-size: 18px; color: #d1d5db; line-height: 1.7; }

  .cta-check {
    display: flex;
    gap: 16px;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    max-width: 400px;
  }

  .cta-form {
    background: white;
    color: #1a1a1a;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) { .cta-form { padding: 48px; } }

  .form-group { display: grid; gap: 24px; }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) { .form-row { grid-template-columns: repeat(2, 1fr); } }

  .form-field { display: flex; flex-direction: column; gap: 8px; }
  .form-label { font-weight: 600; font-size: 12px; color: #666; letter-spacing: 0.5px; }

  .form-input,
  .form-select {
    padding: 16px 20px;
    border-radius: 9999px;
    background: #f0f4ff;
    border: 2px solid transparent;
    font-size: 14px;
    transition: border-color 0.3s;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  .form-select-wrapper {
    position: relative;
  }

  .form-select-wrapper::after {
    content: '▾';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #ff6600;
    font-size: 14px;
    pointer-events: none;
  }

  .form-input:focus, .form-select:focus {
    outline: none;
    border-color: #ff6600;
  }

  .form-submit {
    background: #ff6600;
    color: white;
    padding: 20px 32px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(255, 102, 0, 0.3);
    margin-top: 8px;
    font-family: 'DM Sans', sans-serif;
    width: 100%;
  }

  .form-submit:hover { transform: scale(1.02); box-shadow: 0 8px 30px rgba(255, 102, 0, 0.4); }
  .form-disclaimer { text-align: center; font-size: 11px; color: #666; letter-spacing: 0.5px; }

  /* ===================== MODAL ===================== */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    opacity: 0;
    animation: modalFadeIn 0.3s ease forwards;
  }

  @keyframes modalFadeIn {
    to { opacity: 1; }
  }

  .modal-box {
    background: white;
    border-radius: 28px;
    padding: 40px;
    width: 100%;
    max-width: 560px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.3);
    transform: translateY(24px);
    animation: modalSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes modalSlideUp {
    to { transform: translateY(0); }
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    background: #f0f4ff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: all 0.2s;
  }

  .modal-close:hover {
    background: #ff6600;
    color: white;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
    padding-right: 40px;
  }

  .modal-subtitle {
    color: #888;
    font-size: 14px;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .modal-title .orange { color: #ff6600; font-style: italic; }
  /* ===================== END MODAL ===================== */

  /* ===================== TOAST ===================== */
  .toast-container {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    gap: 12px;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    .toast-container {
      bottom: 20px;
      right: 16px;
      left: 16px;
    }
  }

  .toast {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 16px 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,102,0,0.15);
    pointer-events: all;
    min-width: 300px;
    max-width: 400px;
    transform: translateX(120%);
    opacity: 0;
    animation: toastSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .toast.toast-exit {
    animation: toastSlideOut 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
  }

  @keyframes toastSlideIn {
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes toastSlideOut {
    to { transform: translateX(120%); opacity: 0; }
  }

  @media (max-width: 640px) {
    .toast {
      min-width: unset;
      max-width: 100%;
      transform: translateY(100%);
    }
    .toast.toast-exit {
      animation: toastSlideOutMobile 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
    }
    @keyframes toastSlideOutMobile {
      to { transform: translateY(100%); opacity: 0; }
    }
  }

  .toast-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #ff6600, #ff9933);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
  }

  .toast-body {
    flex: 1;
  }

  .toast-title {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: white;
    margin-bottom: 2px;
  }

  .toast-msg {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.55);
    line-height: 1.5;
  }

  .toast-close {
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255,255,255,0.35);
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: color 0.2s;
    flex-shrink: 0;
  }

  .toast-close:hover { color: white; }

  .toast-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 0 0 0 16px;
    animation: toastProgress 4s linear forwards;
  }

  @keyframes toastProgress {
    from { width: 100%; }
    to { width: 0%; }
  }
  /* ===================== END TOAST ===================== */

  /* Footer */
  .roi-footer {
    background: #0f172a;
    color: #999;
    padding: 60px 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 768px) { .roi-footer { padding: 80px 64px; } }

  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: 48px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .footer-content { grid-template-columns: repeat(4, 1fr); gap: 48px; } }

  .footer-title { font-weight: 600; color: white; font-size: 12px; letter-spacing: 1px; margin-bottom: 24px; }
  .footer-desc { font-size: 14px; line-height: 1.7; }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 12px; }
  .footer-links a { color: #999; text-decoration: none; font-size: 14px; transition: color 0.3s; }
  .footer-links a:hover { color: #ff6600; }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 32px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.5px;
    opacity: 0.4;
  }

  @media (min-width: 768px) { .footer-bottom { text-align: left; } }
`;


function useJivoChat() {
  useEffect(() => {
    // JivoChat script in index.html will auto-initialize globally
    // This hook provides optional API access if needed

    // Optional: Log when JivoChat is ready
    if (window.jivo_api) {
      console.log('JivoChat API available');

    }
  }, []);
}

const N8N_WEBHOOK_URL = 'https://n8n.srv1484736.hstgr.cloud/webhook/roi-spectrum-audit';

function AuditForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', budget: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    if (!formData.budget) e.budget = 'Please select a budget range';
    return e;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    setLoading(true);
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', phone: '', budget: '' });
      onSubmit();
    } catch (err) {
      console.error('Webhook error:', err);
      onSubmit();
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    borderColor: errors[field] ? '#ef4444' : 'transparent',
  });

  return (
    <div className="form-group">
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">FULL NAME</label>
          <input
            type="text"
            className="form-input"
            placeholder="John Doe"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            style={inputStyle('name')}
          />
          {errors.name && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.name}</span>}
        </div>
        <div className="form-field">
          <label className="form-label">WORK EMAIL</label>
          <input
            type="email"
            className="form-input"
            placeholder="john@company.com"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            style={inputStyle('email')}
          />
          {errors.email && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.email}</span>}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label">MOBILE NUMBER</label>
        <input
          type="tel"
          className="form-input"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={e => handleChange('phone', e.target.value)}
          style={inputStyle('phone')}
        />
        {errors.phone && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.phone}</span>}
      </div>

      <div className="form-field">
        <label className="form-label">CURRENT MONTHLY MARKETING BUDGET</label>
        <div className="form-select-wrapper">
          <select
            className="form-select"
            value={formData.budget}
            onChange={e => handleChange('budget', e.target.value)}
            style={inputStyle('budget')}
          >
            <option value="" disabled>Select your budget range</option>
            <option value="lt5k">Less than $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-50k">$25,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
        {errors.budget && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.budget}</span>}
      </div>

      <button
        type="button"
        className="form-submit"
        onClick={handleSubmit}
        disabled={loading}
        style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Submitting…' : 'Submit For Free Audit ✉'}
      </button>
      <p className="form-disclaimer">By submitting, you agree to our Terms &amp; Privacy Policy.</p>
    </div>
  );
}

/* ===== TOAST SYSTEM ===== */
function Toast({ id, title, message, onRemove }) {
  const [exiting, setExiting] = useState(false);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => onRemove(id), 350);
  };

  useEffect(() => {
    const t = setTimeout(() => dismiss(), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`toast${exiting ? ' toast-exit' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="toast-icon">✓</div>
      <div className="toast-body">
        <div className="toast-title">{title}</div>
        <div className="toast-msg">{message}</div>
      </div>
      <button className="toast-close" onClick={dismiss} aria-label="Dismiss">
        <X size={14} />
      </button>
      {!exiting && <div className="toast-progress" />}
    </div>
  );
}

function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <Toast key={t.id} {...t} onRemove={onRemove} />
      ))}
    </div>
  );
}

function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}

/* ===== MODAL COMPONENT ===== */
function AuditModal({ onClose, onSuccess }) {
  const handleSubmit = () => {
    onSuccess();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
        <h2 className="modal-title">
          Claim Your Free <span className="orange">SEO & AI Audit</span>
        </h2>
        <p className="modal-subtitle">
          No generic reports. No automated fluff. Just a senior-led audit built for your brand.
        </p>
        <AuditForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

/* ===== WORD ANIMATION COMPONENT ===== */
function AnimatedHeadline() {
  const text1 = "Your Next Customer Is Searching AI.";
  const text2 = "Will They Find You?";

  const allLetters = [
    ...text1.split('').map(ch => ({ char: ch, orange: false })),
    { char: 'BREAK', orange: false },
    ...text2.split('').map(ch => ({ char: ch, orange: true })),
  ];

  return (
    <>
      {allLetters.map((item, i) => {
        if (item.char === 'BREAK') return <br key={i} />;
        return (
          <span
            key={i}
            className={`hero-letter${item.orange ? ' orange' : ''}${item.char === ' ' ? ' space' : ''}`}
            style={{ animationDelay: `${0.3 + i * 0.03}s` }}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        );
      })}
    </>
  );
}

/* ===== INTERSECTION OBSERVER HOOK ===== */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const comparisonRows = [
  { feature: 'Optimization Focus', trad: 'Keywords & Rankings', roi: 'AI Answers & Revenue ROI', free: 'Basic On-Page' },
  { feature: 'Search Channels', trad: 'Google & Bing', roi: 'Google, ChatGPT, Gemini, Perplexity', free: 'Google Only' },
  { feature: 'Transparency', trad: 'Monthly Static PDF', roi: 'Real-Time Project Dashboard', free: 'Inconsistent Email' },
  { feature: 'Implementation', trad: '"Advice" Only', roi: 'Hands-on Technical Execution', free: 'Scope Limited' },
  { feature: 'Strategic Level', trad: 'Junior-Managed', roi: 'Senior-Only Leadership', free: 'Varies Greatly' },
];

export default function ROISpectrum() {
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const [frameworkRef, frameworkInView] = useInView(0.1);

  // Initialize JivoChat
  useJivoChat();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setSubtitleVisible(true), 1800);
    const t2 = setTimeout(() => setButtonsVisible(true), 2100);
    const t3 = setTimeout(() => setStatsVisible(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleAuditSuccess = () => {
    addToast('Audit Request Received!', "We'll review your site and be in touch within 24 hours.");
  };

  const faqItems = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "AEO is the process of optimizing your content so that AI-powered search engines and chatbots (like ChatGPT, Claude, and Google Gemini) can easily understand and recommend your brand as the primary answer to user queries."
    },
    {
      question: "How long does it take to see ROI?",
      answer: "While SEO is a long-term play, our precision framework typically yields measurable 'leading indicators' within the first 45-60 days, with substantial lead volume increases appearing around the 4-month mark."
    },
    {
      question: "Do you handle technical implementation?",
      answer: "Yes. Unlike agencies that just provide a PDF of 'recommendations,' our tech team works directly with your developers (or handles it ourselves) to ensure fixes are actually deployed."
    }
  ];

  return (
    <div>
      <style>{styles}</style>

      {modalOpen && <AuditModal onClose={closeModal} onSuccess={handleAuditSuccess} />}

      <ToastContainer toasts={toasts} onRemove={removeToast} />

      {/* Header */}
      <header className={`roi-header ${scrollY > 20 ? 'scrolled' : ''}`}>
        <div className="roi-header-content">
          <div className="roi-logo">
            <img src={logo} alt="ROI Spectrum" style={{ height: '50px', width: 'auto' }} />
          </div>
          <nav className="roi-nav">
            <a href="#" className="active">Solutions</a>
            <a href="#">Results</a>
            <a href="#">Framework</a>
            <a href="#">Insights</a>
          </nav>

          <div className="roi-header-cta">
            <button className="roi-btn roi-btn-primary" onClick={openModal}>Get a Free Audit</button>
          </div>

          <button
            className="roi-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`roi-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a href="#" className="active" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,102,0,0.06)', color: '#ff6600', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Solutions</a>
            <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Results</a>
            <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Framework</a>
            <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Insights</a>
          </nav>
          <button className="roi-btn roi-btn-primary" style={{ width: '100%', marginTop: '16px', padding: '14px', fontSize: '15px' }} onClick={openModal}>Get Free Audit</button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="hero-h1">
                <AnimatedHeadline />
              </h1>

              <p className={`hero-subtitle${subtitleVisible ? ' visible' : ''}`}>
                We combine next-gen SEO with Answer Engine Optimization — so your brand shows up everywhere your customers are searching, including AI.
              </p>

              <div className={`hero-buttons${buttonsVisible ? ' visible' : ''}`}>
                <button className="btn-main" onClick={openModal}>Start Your Free Audit ↗</button>
                <button className="btn-secondary">View Case Studies</button>
              </div>

              <div className={`hero-stats${statsVisible ? ' visible' : ''}`}>
                <div className="hero-stat-pill">
                  <span className="hero-stat-pill-num">4,000+</span>
                  <span>Brands Grown</span>
                </div>
                <div className="hero-stat-pill">
                  <span className="hero-stat-pill-num">2.5x</span>
                  <span>Avg. Lead Growth</span>
                </div>
                <div className="hero-stat-pill">
                  <span className="hero-stat-pill-num">Top 3</span>
                  <span>AI Visibility</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Gallery */}
        <section className="dashboard-gallery">
          <img src={background} alt="Dashboard 1" className="gallery-image"
            style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </section>

        {/* Challenges */}
        <section className="challenges section">
          <div className="section-header">
            <h2 className="section-h2">Is Your Website <span className="orange">Costing You</span> Customers?</h2>
            <p className="section-p">Most agencies focus on traffic. We focus on ROI. In the age of AI search, simply "ranking" isn't enough.</p>
          </div>

          <div className="grid-3">
            {[
              { icon: <Search size={28} />, title: 'Visibility Gap', desc: "92% of users don't scroll past page 1 of Google results.", num: '92%' },
              { icon: <Bot size={28} />, title: 'AI Erosion', desc: 'AI Search now answers 40% of queries directly, bypassing your site.', num: '40%' },
              { icon: <Zap size={28} />, title: 'Conversion Leak', desc: 'Poor UX kills conversion faster than low traffic volume ever could.', num: '#1' },
              { icon: <BarChart2 size={28} />, title: 'Legacy Tracking', desc: 'Relying on vanity metrics like "clicks" instead of actual pipeline revenue.', num: '0$' },
              { icon: <Settings size={28} />, title: 'Technical Debt', desc: 'Slow page speeds and mobile friction hurting your organic authority.', num: '-30%' },
              { icon: <Brain size={28} />, title: 'Semantic Discord', desc: 'Content that fails to answer the user intent that modern LLMs prioritize.', num: 'AI' },
            ].map((item, i) => (
              <div key={i} className="challenge-card">
                <div className="challenge-card-top">
                  <div className="challenge-icon-wrap">{item.icon}</div>
                  <div className="challenge-num">{item.num}</div>
                </div>
                <h4 className="challenge-title">{item.title}</h4>
                <p className="challenge-desc">{item.desc}</p>
                <div className="challenge-bar">
                  <div className="challenge-bar-fill" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="framework section">
          <div className="section-header">
            <h2 className="section-h2">Our Proven <span className="italic-orange">Growth Framework</span></h2>
            <p className="section-p">A systematic 5-phase approach to market dominance and sustainable ROI.</p>
          </div>

          <div className="framework-grid" ref={frameworkRef}>
            {[
              { num: 1, title: 'Deep Audit', items: ['Technical debt analysis', 'Conversion leak mapping', 'Competitor AEO scan'] },
              { num: 2, title: 'Semantic Mapping', items: ['AI intent clustering', 'Content gap identification', 'Entity relationship setup'] },
              { num: 3, title: 'Velocity Build', items: ['High-authority asset creation', 'Rapid technical deployment', 'Schema graph expansion'] },
              { num: 4, title: 'Conversion Lab', items: ['A/B testing iterations', 'Friction reduction tech', 'Intent-based CRO'] },
              { num: 5, title: 'Scale Engine', items: ['Winning cluster expansion', 'Multichannel AEO dominance', 'Continuous ROI optimization'] }
            ].map((phase, i) => (
              <div
                key={i}
                className={`phase-card${frameworkInView ? ' card-visible' : ''}`}
                style={frameworkInView ? { animationDelay: `${i * 0.12}s` } : {}}
              >
                <div className="phase-num">{phase.num}</div>
                <h4 className="phase-h4">{phase.title}</h4>
                <ul className="phase-list">
                  {phase.items.map((item, j) => (
                    <li key={j}><span>›</span> {item}</li>
                  ))}
                </ul>
                <div className="phase-connector" />
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="features section">
          <div className="section-header">
            <h2 className="section-h2">What Makes <span className="orange">ROI Spectrum</span> Different?</h2>
          </div>

          <div className="grid-5">
            {[
              { icon: <Bot size={32} color="#ff6600" />, title: 'AI Recommendations', desc: 'Proprietary tools for AEO optimization.' },
              { icon: <Eye size={32} color="#ff6600" />, title: 'Total Transparency', desc: 'Real-time access to every task and metric.' },
              { icon: <Users size={32} color="#ff6600" />, title: 'Senior Expertise', desc: 'No juniors. Senior-only account strategy.' },
              { icon: <Zap size={32} color="#ff6600" />, title: 'Execution Velocity', desc: 'Rapid changes that impact ROI faster.' },
              { icon: <CheckCircle size={32} color="#ff6600" />, title: 'Guaranteed Results', desc: 'We tie our success to your growth.' }
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-h4">{feature.title}</h4>
                <p className="feature-p">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AEO */}
        <section className="aeo dark-section" style={{ padding: '80px 24px' }}>
          <div className="dark-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="dark-left">
              <h2 className="dark-h2">Why SEO Alone Is <span className="italic-orange">No Longer Enough</span></h2>
              <p className="dark-p">We are entering the era of Answer Engine Optimization. Users are moving away from traditional lists of links and towards direct answers provided by platforms like ChatGPT, Gemini, and Perplexity.</p>

              <div className="stat-grid">
                <div className="stat-box">
                  <div className="stat-num">40%</div>
                  <div className="stat-label">Decrease in Traditional CTR</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">65%</div>
                  <div className="stat-label">Users Trust AI Answers</div>
                </div>
              </div>
            </div>

            <div className="aeo-items">
              {[
                { icon: <MessageCircle size={24} color="#ff6600" />, title: 'ChatGPT Optimization', desc: 'Ensuring your brand is the primary recommendation for conversational AI.' },
                { icon: <Sparkles size={24} color="#ff6600" />, title: 'SGE Visibility', desc: "Dominating Google's Search Generative Experience AI snapshots." },
                { icon: <Brain size={24} color="#ff6600" />, title: 'Semantic Authority', desc: 'Building the knowledge graph connections that modern LLMs use.' }
              ].map((item, i) => (
                <div key={i} className="aeo-item">
                  <div className="aeo-icon">{item.icon}</div>
                  <div className="aeo-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="case-studies section">
          <div className="case-header">
            <div>
              <h2 className="section-h2">Cinematic <span className="italic-orange">Success Modules</span></h2>
              <p className="section-p" style={{ marginTop: '8px' }}>Real data. Real growth. High-impact results.</p>
            </div>
            <a href="#" className="case-link">View All Case Studies →</a>
          </div>

          <div className="case-hero">
            <video
              src={heroVideo}
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div className="case-overlay">
              <div className="case-content">
                <div>
                  <h3 className="case-title">Luna Visuals: 350% Growth in Inbound Leads</h3>
                  <p className="case-desc">Pivoting from traditional SEO to an AEO-first approach captured high-intent traffic across all major AI search platforms.</p>
                </div>
                <div className="metrics">
                  <div className="metric">
                    <div className="metric-num">+350%</div>
                    <div className="metric-label">Leads Growth</div>
                  </div>
                  <div className="metric">
                    <div className="metric-num">-40%</div>
                    <div className="metric-label">CPA Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-cards">
            {[
              {
                tag: 'FinTech',
                metric: '$2.4M',
                label: 'New Pipeline',
                title: 'Artemis Finance: Dominating Complex Financial Queries',
                desc: 'Secured top-tier visibility in ChatGPT and Claude through semantic mapping for high-value financial keywords.'
              },
              {
                tag: 'Enterprise E-comm',
                metric: '+180%',
                label: 'Organic Rev Growth',
                title: 'Velo Sport: 180% Increase in Global Organic Revenue',
                desc: 'Full technical infrastructure overhaul to meet Core Web Vitals and maximize conversion for 50+ locations.'
              }
            ].map((study, i) => (
              <div key={i} className="case-card">
                <div className="case-card-header">
                  <div className="case-tag">{study.tag}</div>
                  <div className="case-metric">
                    <div className="case-metric-num">{study.metric}</div>
                    <div className="case-metric-label">{study.label}</div>
                  </div>
                </div>
                <h4 className="case-card-h4">{study.title}</h4>
                <p className="case-card-p">{study.desc}</p>
                <a href="#" className="case-link">Read Study →</a>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="comparison section">
          <div className="section-header">
            <h2 className="section-h2">Traditional Agencies <span className="italic-orange">vs. ROI Spectrum</span></h2>
          </div>

          <div className="comparison-wrapper">
            <div className="comparison-header">
              <div className="comparison-header-cell">Service Feature</div>
              <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Traditional Agency</div>
              <div className="comparison-header-cell col-highlight">ROI Spectrum (AEO+SEO)</div>
              <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Freelancers</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={i} className="comparison-row">
                <div className="comparison-cell col-feature">{row.feature}</div>
                <div className="comparison-cell col-muted">{row.trad}</div>
                <div className="comparison-cell col-highlight">{row.roi}</div>
                <div className="comparison-cell col-muted">{row.free}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Campaign */}
        <section className="campaign section" style={{ padding: '80px 24px' }}>
          <div className="campaign-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="campaign-left">
              <h2 className="campaign-h2">Everything Included in <br /><span className="italic-orange">Your Campaign</span></h2>

              <div className="campaign-items">
                {[
                  { title: 'Bespoke Cluster Strategy', desc: 'Custom semantic maps for your niche.' },
                  { title: 'Technical Implementation', desc: 'Hands-on fixes for CMS, speed, schema.' },
                  { title: 'High-Authority Digital PR', desc: 'Relevant, high-traffic publications.' },
                  { title: 'AI Visibility Tracking', desc: 'Monitoring ChatGPT & SGE rankings.' },
                  { title: 'Weekly Performance Sync', desc: 'Direct access to your strategist.' },
                  { title: 'Conversion Lab Access', desc: 'Continuous A/B landing page testing.' }
                ].map((item, i) => (
                  <div key={i} className="campaign-item">
                    <div className="campaign-icon" style={{ fontSize: '20px' }}>✓</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="results-box">
              <h2 style={{ fontSize: '32px', fontWeight: 800 }}>What Results <br /><span className="italic-orange">Can You Expect?</span></h2>

              <div className="results-grid">
                {[
                  { num: '2.5x', label: 'Avg. Lead Growth (Year 1)' },
                  { num: 'Top 3', label: 'AEO Visibility Positioning' },
                  { num: '30%', label: 'Reduction in Paid CPA' },
                  { num: '100%', label: 'Transparency Reporting' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="result-num">{item.num}</div>
                    <div className="result-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq section">
          <div className="section-header">
            <h2 className="section-h2">Frequently Asked Questions</h2>
          </div>

          <div className="faq-container">
            <div className="faq-grid">
              <div className="faq-column">
                {faqItems.slice(0, 2).map((item, i) => (
                  <div key={i} className="faq-item">
                    <button className="faq-toggle" onClick={() => toggleFAQ(i)}>
                      <span className="faq-question">{item.question}</span>
                      <span className={`faq-chevron ${openFAQ === i ? 'open' : ''}`}>▼</span>
                    </button>
                    <div className={`faq-answer ${openFAQ === i ? 'open' : ''}`}>
                      <div className="faq-answer-text">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="faq-column">
                {faqItems.slice(2).map((item, i) => (
                  <div key={i + 2} className="faq-item">
                    <button className="faq-toggle" onClick={() => toggleFAQ(i + 2)}>
                      <span className="faq-question">{item.question}</span>
                      <span className={`faq-chevron ${openFAQ === i + 2 ? 'open' : ''}`}>▼</span>
                    </button>
                    <div className={`faq-answer ${openFAQ === i + 2 ? 'open' : ''}`}>
                      <div className="faq-answer-text">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process section">
          <div className="section-header">
            <h2 className="section-h2">What Happens <span className="italic-orange">After You Book?</span></h2>
          </div>

          <div className="process-grid">
            {[
              { num: 1, title: 'Initial Scan', desc: 'Our AI agents run a 24-hour diagnostic on your domain visibility.' },
              { num: 2, title: 'Expert Review', desc: "A senior analyst manually identifies 'quick-win' revenue gaps." },
              { num: 3, title: 'Roadmap Call', desc: 'A 30-min strategy session to walk through your custom plan.' },
              { num: 4, title: 'Launch Prep', desc: 'We scope technical resources needed to kick off Phase 1.' }
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta dark-section" style={{ padding: '80px 24px' }}>
          <div className="cta-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="cta-left">
              <h2 className="cta-h2">Claim Your Free <br /><span className="italic-orange">SEO & AI Visibility Audit</span> Today.</h2>
              <p className="cta-p">Our team of senior analysts will manually review your website, identify "leaking" conversion paths, and build a customized AI Search roadmap for your brand. No generic reports. No automated fluff.</p>
              <div className="cta-check">
                <span style={{ fontSize: '20px' }}>✓</span>
                <p>Verified data-driven results for 4,000+ brands worldwide.</p>
              </div>
            </div>

            <div className="cta-form">
              <AuditForm onSubmit={handleAuditSuccess} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="roi-footer">
        <div className="footer-content">
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '16px' }}>ROI Spectrum</div>
            <p className="footer-desc">Driving data-driven growth through next-generation SEO & Answer Engine Optimization. High-impact visibility for the AI era.</p>
          </div>
          <div>
            <div className="footer-title">Solutions</div>
            <ul className="footer-links">
              <li><a href="#">SEO Excellence</a></li>
              <li><a href="#">AEO Framework</a></li>
              <li><a href="#">Content Velocity</a></li>
              <li><a href="#">Link Authority</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Company</div>
            <ul className="footer-links">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Our Framework</a></li>
              <li><a href="#">Blog Insights</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Legal</div>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2024 ROI Spectrum Agency. All rights reserved. Precise Data-Driven Growth.
        </div>
      </footer>
    </div>
  );
}
