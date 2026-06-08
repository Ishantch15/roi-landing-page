const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,600;0,8..60,700;1,8..60,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Arial,  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
    font-weight: 400;
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
    // align-items: center;
    height: 64px;
    padding: 0 16px;
    max-width: 1280px;
    margin: 0 auto;
    text-align: left;
  }

  @media (min-width: 768px) {
    .roi-header-content {
      height: 80px;
      padding: 0 24px;
text-align: left;
    }
  }

  .roi-logo {
    font-size: 24px;
    font-weight: 700;
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
    font-weight: 500;
    font-size: 16px;
    color: #1a1a1a;
    text-decoration: none;
    padding: 8px 0;
    transition: color 0.3s;
    border-bottom: 2px solid transparent;
  }

  .roi-nav a:hover {
    color: #ff6600;
    text-align: left;

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
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: Arial, sans-serif;
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
    overflow: visible;
    padding: 10px 24px 80px;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,102,0,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 60%, rgba(255,153,51,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 30% 40% at 15% 80%, rgba(255,102,0,0.06) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
    z-index: 0;
  }

  .hero-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 24px 20px;
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    .hero-inner {
      padding: 40px 64px 80px;
    }
  }

  .hero-eyebrow-row {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 9999px;
    background: rgba(255, 102, 0, 0.12);
    color: #ff9933;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 102, 0, 0.25);
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
    font-size: clamp(28px, 5vw, 72px);
    font-weight: 600;
    line-height: 1.2;
    max-width: 820px;
    margin: 0 auto 24px;
    letter-spacing: -1px;
    word-break: keep-all;
    overflow-wrap: normal;
    white-space: normal;
  }

  @media (min-width: 768px) {
    .hero-h1 {
      font-size: 62px;
    }
  }

  @media (min-width: 1100px) {
    .hero-h1 {
      font-size: 52px;
    }
  }

  .hero-letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(30px);
    animation: letterReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes letterReveal {
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-letter.orange {
    color: #ff6600;

  }

  .hero-letter.space {
    width: 0.25em;
  }

  .hero-subtitle {
    font-size: 18px;
    color: rgba(255,255,255,0.85);
    max-width: 580px;
    margin: 0 auto 36px;
    line-height: 1.75;
    opacity: 0;
    transform: translateY(20px);
    font-weight: 400;
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
    margin-bottom: 48px;
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
    gap: 16px;
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
    font-size: 16px;
    font-weight: 500;
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
    font-weight: 700;
  }

  /* ---- floating image overlap ---- */
  .hero-img-wrap {
    position: relative;
    z-index: 2;
    width: calc(100% - 48px);
    max-width: 1200px;
    margin: -40px auto 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    .hero-img-wrap {
      width: calc(100% - 128px);
      margin-top: -60px;
    }
  }

  .hero-img-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.08),
      0 40px 80px rgba(0,0,0,0.6),
      0 8px 32px rgba(255,102,0,0.12);
    opacity: 0;
    transform: translateY(60px) scale(0.97);
    animation: imgReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;
  }

  @media (min-width: 768px) {
    .hero-img-frame {
      border-radius: 28px;
    }
  }

  @keyframes imgReveal {
    0%   { opacity: 0; transform: translateY(60px) scale(0.97); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .hero-img-frame img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .hero-img-frame::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, #0f172a 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  .hero-img-frame::after {
    content: '';
    position: absolute;
    bottom: 0; left: 5%; right: 5%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255,102,0,0.6), transparent);
    z-index: 3;
  }

  .hero-img-chrome {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 36px;
    background: rgba(15,23,42,0.95);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
    z-index: 4;
  }

  .hero-img-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .hero-img-bar {
    flex: 1;
    height: 20px;
    background: rgba(255,255,255,0.06);
    border-radius: 9999px;
    margin: 0 12px;
  }

  .hero-img-parallax {
    will-change: transform;
    transition: transform 0.05s linear;
  }

  .btn-main {
    background: #ff6600;
    color: white;
    padding: 18px 36px;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(255, 102, 0, 0.4);
    font-family: Arial, sans-serif;
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
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    font-family: Arial, sans-serif;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255,255,255,0.4);
  }

  /* Dashboard Gallery */
  .dashboard-gallery {
    width: 100%;
    position: relative;
    z-index: 2;
    margin-top: -100px;
    padding: 0 24px;
  }

  .dashboard-gallery img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
  }

  @keyframes galleryReveal {
    0%   { opacity: 0; transform: translateY(48px) scale(0.97); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .gallery-image-animated {
    opacity: 0;
    animation: galleryReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
  }

  @media (min-width: 768px) {
    .dashboard-gallery {
      margin-top: 0px;
      padding: 0 64px;
    }
  }

  .gallery-image {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(200, 200, 200, 0.3);
    object-fit: cover;
  }

  /* ===================== CHALLENGES SECTION ===================== */
  .challenges {
    background: white;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .challenges {
      padding: 120px 64px;
    }
  }

  .challenges-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-h2 {
    font-size: 36px;
    font-weight: 700;
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

  }
    section-h2orange{
    color: #ff6600;
    }

  .section-p {
    color: #1a1a1a;
    max-width: 700px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 400;
  }

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

  .modular-grid-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
text-align: left;
  }

  .modular-grid-card:hover {
    border-color: #ff6600;
    box-shadow: 0 8px 24px rgba(255, 102, 0, 0.15);
    transform: translateY(-4px);
  }

  .card-icon {
    font-size: 36px;
    color: #ff6600;
    margin-bottom: 16px;
  }

  .card-h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
    color: #1a1a1a;
  }

  .card-p {
    color: #1a1a1a;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
  }

  /* ===================== FRAMEWORK SECTION ===================== */
  .framework {
    background: #f5f5f5;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .framework {
      padding: 120px 64px;
    }
  }

  .framework-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .framework-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .framework-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .framework-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }

  .phase-card {
    background: white;
    font-size : 16px;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 32px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }

  .phase-card:hover {
    border-color: #ff6600;
    box-shadow: 0 12px 30px rgba(255, 102, 0, 0.15);
    transform: translateY(-8px);
  }
  .phase-card span{
  font-size: 16px;}

  .phase-num {
    width: 48px;
    height: 48px;
    background: #ff6600;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 16px;

  }

  .phase-h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #1a1a1a;
    text-align: left;
  }

  .phase-list {
    list-style: none;
  }

  .phase-list li {
    display: flex;
    gap: 10px;
    font-size: 16px;
    color: #1a1a1a;
    margin-bottom: 12px;
    align-items: flex-start;
    text-align: left;
    font-weight: 400;
    line-height: 1.5;
  }

  .phase-list li span:first-child {
    color: #ff6600;
    font-weight: 600;
  }

  /* ===================== FEATURES SECTION ===================== */
  .features {
    background: white;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .features {
      padding: 120px 64px;
    }
  }

  .features-container {
    max-width: 1280px;
    margin: 0 auto;
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

  .feature-card {
    background: #f0f4ff;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 32px;
    text-align: left;
    transition: all 0.3s;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(255, 102, 0, 0.15);
    border-color: #ff6600;
  }

  .feature-icon {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .feature-h4 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
    color: #1a1a1a;
  }

  .feature-p {
    font-size: 16px;
    color: #1a1a1a;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
  }

  /* ===================== AEO SECTION (DARK) ===================== */
  .aeo {
    background: #0a0f1e;
    color: white;
    padding: 120px 24px;
    position: relative;
    overflow: hidden;
  }

  .aeo::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    width: 60%;
    height: 80%;
    background: radial-gradient(ellipse at center, rgba(255,102,0,0.07) 0%, transparent 65%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    .aeo {
      padding: 120px 64px;
    }
  }

  .aeo-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .aeo-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .aeo-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .aeo-left {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .aeo-h2 {
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.15;
    text-align: left;
  }

  @media (min-width: 768px) {
    .aeo-h2 {
      font-size: 52px;
    }
  }

  .aeo-h2 .italic-orange {
    color: #ff6600;

  }

  .aeo-p {
    font-size: 16px;
    color: rgba(255,255,255,0.85);
    line-height: 1.75;
    max-width: 460px;
    text-align: left;
    font-weight: 400;
  }

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
  .stat-num {
    color: #ff6600;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
    text-align: left;
  }

  .stat-label {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
  }

  .aeo-items {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .aeo-item {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: 22px 24px;
    border-radius: 16px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    transition: all 0.3s;
  }

  .aeo-item:hover {
    background: rgba(255,102,0,0.06);
    border-color: rgba(255,102,0,0.2);
  }

  .aeo-icon {
    width: 46px;
    height: 46px;
    background: rgba(255, 102, 0, 0.15);
    border: 1px solid rgba(255,102,0,0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .aeo-content h4 {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 5px;
    color: white;
    text-align: left
  }

  .aeo-content p {
    font-size: 16px;
    color: rgba(255,255,255,0.85);
    line-height: 1.6;
    text-align: left;
    font-weight: 400;
  }

  /* ===================== CASE STUDIES SECTION ===================== */
  .case-studies {
    background: white;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .case-studies {
      padding: 120px 64px;
    }
  }

  .case-studies-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .case-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    .case-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .case-tag {
    display: inline-block;
    background: #ff6600;
    color: white;
    padding: 6px 12px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 600;
    width: fit-content;
  }

  .case-cards {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
    text-align: left';
  }

  @media (min-width: 768px) {
    .case-cards {
      grid-template-columns: repeat(2, 1fr);
      text-align: left';
    }
  }

  .case-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto 1fr auto auto;
    gap: 12px 24px;
    transition: all 0.3s;
    align-items: start;
    text-align: left';
  }

  .case-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(255,102,0,0.1);
    border-color: #ff6600;
  }

  .case-card-header {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }

  .case-card-h4 {
    grid-column: 1 / -1;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.4;
    text-align: left;
  }

  .case-card-p {
    grid-column: 1 / -1;
    color: #1a1a1a;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
  }

  .case-metric {
    text-align: right;
  }

  .case-metric-num {
    font-size: 28px;
    font-weight: 700;
    color: #ff6600;
  }

  .case-metric-label {
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
  }

  .case-link {
    color: #ff6600;
    font-weight: 600;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
  }

  /* ===================== COMPARISON TABLE ===================== */
  .comparison {
    background: #f5f5f5;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .comparison {
      padding: 120px 64px;
    }
  }

  .comparison-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .comparison-wrapper {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e8e8;
  }

  .comparison-header {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    background: #0f172a;
  }

  .comparison-header-cell {
    padding: 20px 24px;
    font-family: Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.3px;
    color: rgba(255,255,255,0.9);
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .comparison-header-cell:last-child {
    border-right: none;
  }

  .comparison-header-cell.col-highlight {
    background: #ff6600;
    color: white;
    position: relative;
  }

  .comparison-header-cell.col-highlight::after {
    content: '★ BEST';
    display: block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.75);
    margin-top: 4px;
  }

  .comparison-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    border-top: 1px solid #f0f0f0;
    transition: background 0.2s ease;
  }

  .comparison-row:hover {
    background: #fafafa;
  }

  .comparison-cell {
    padding: 20px 24px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #1a1a1a;
    border-right: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    line-height: 1.5;
    font-weight: 400;
  }

  .comparison-cell:last-child {
    border-right: none;
  }

  .comparison-cell.col-feature {
    font-weight: 600;
    color: #1a1a1a;
    font-size: 16px;
    background: #fafafa;
  }

  .comparison-cell.col-highlight {
    font-weight: 600;
    color: #ff6600;
    background: rgba(255, 102, 0, 0.02);
    font-size: 16px;
    position: relative;
  }

  .comparison-cell.col-muted {
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
  }

  /* ===================== CAMPAIGN SECTION ===================== */
  .campaign {
    background: #0f172a;
    color: white;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .campaign {
      padding: 120px 64px;
    }
  }

  .campaign-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .campaign-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
  }

  @media (min-width: 1024px) {
    .campaign-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .campaign-left {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .campaign-h2 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .campaign-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 640px) {
    .campaign-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .campaign-item {
    display: flex;
    gap: 16px;
  }

  .campaign-icon {
    flex-shrink: 0;
    margin-top: 4px;
    color: #ff6600;
  }

  .campaign-item h4 {
    font-weight: 600;
    margin-bottom: 4px;
    gap: 16px;
    color: rgba(255,255,255,0.9);
    text-align: left;
    line-height: 1.6;

  }

  .campaign-item p {
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
  }

  .results-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: left;
    font-size: 16px;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    font-size: 16px;
  }

  .result-num.counting {
    transition: all 0.1s ease;
  }

  .result-num {
    font-size: 48px;
    font-weight: 700;
    color: #ff6600;
    margin-bottom: 8px;

  }
.result p{
font-size: 16px;
}
  .result-label {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.9);

  }

  /* ===================== FAQ SECTION ===================== */
  .faq {
    background: #f0f4ff;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .faq {
      padding: 120px 64px;
    }
  }

  .faq-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .faq-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .faq-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .faq-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-item {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    margin-bottom: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .faq-item:hover {
    border-color: rgba(255,102,0,0.3);
  }

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
    font-family: Arial, sans-serif;
  }

  .faq-toggle:hover {
    background: #f0f4ff;
  }

  .faq-question {
    font-weight: 600;
    font-size: 17px;
    color: #1a1a1a;
  }

  .faq-chevron {
    flex-shrink: 0;
    color: #ff6600;
    transition: transform 0.3s;
  }

  .faq-chevron.open {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 1px solid #eee;
  }

  .faq-answer.open {
    max-height: 500px;
  }

  .faq-answer-text {
    padding: 24px 32px;
    color: #1a1a1a;
    line-height: 1.7;
    font-size: 16px;
    font-weight: 400;
  }

  /* ===================== PROCESS SECTION ===================== */
  .process {
    background: white;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .process {
      padding: 120px 64px;
    }
  }

  .process-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .process-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .process-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .process-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

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

  .process-step:hover {
    border-color: #ff6600;
    box-shadow: 0 8px 24px rgba(255,102,0,0.1);
    transform: translateY(-4px);
  }

  .step-num {
    width: 48px;
    height: 48px;
    background: #ff6600;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 600;
    font-size: 18px;
  }

  .step-title {
    font-weight: 600;
    color: #1a1a1a;
    font-size: 16px;
  }

  .step-desc {
    font-size: 16px;
    color: #1a1a1a;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
  }

  /* ===================== CTA SECTION ===================== */
  .cta {
    background: #0f172a;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 120px 24px;
  }

  @media (min-width: 768px) {
    .cta {
      padding: 120px 64px;
    }
  }

  .cta-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .cta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .cta-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .cta-left {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .cta-h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #ff6600;
text-align: left;
    font-family: 'Source Serif 4', serif;
  }

  @media (min-width: 768px) {
    .cta-h2 {
      font-size: 52px;
    }
  }

  .cta-p {
    font-size: 17px;
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    font-weight: 400;
    text-align: left;
  }

  .cta-check {
    display: flex;
    gap: 12px;
    padding: 16px 20px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    max-width: 380px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .cta-form {
    background: white;
    color: #1a1a1a;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    .cta-form {
      padding: 40px;
    }
  }

  .form-group {
    display: grid;
    gap: 24px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-weight: 600;
    font-size: 16px;
    color: #444;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
    display: block;
  }

  .form-input,
  .form-select {
    padding: 16px 20px;
    border-radius: 9999px;
    background: #f0f4ff;
    border: 2px solid transparent;
    font-size: 16px;
    transition: border-color 0.3s;
    font-family: Arial, sans-serif;
    color: #1a1a1a;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    font-weight: 400;
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
    font-size: 16px;
    pointer-events: none;
  }

  .form-input:focus,
  .form-select:focus {
    outline: none;
    border-color: #ff6600;
  }

  .form-submit {
    background: #ff6600;
    color: white;
    padding: 20px 32px;
    border-radius: 9999px;
    font-weight: 600;
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
    font-family: Arial, sans-serif;
    width: 100%;
  }

  .form-submit:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(255, 102, 0, 0.4);
  }

  .form-disclaimer {
    text-align: center;
    font-size: 11px;
    color: #444;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

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
    overflow-y: auto;
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
    overflow: visible;
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
    color: #1a1a1a;
    transition: all 0.2s;
  }

  .modal-close:hover {
    background: #ff6600;
    color: white;
  }

  .modal-title {
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
    padding-right: 40px;
  }

  .modal-subtitle {
    color: #444;
    font-size: 16px;
    margin-bottom: 28px;
    line-height: 1.6;
    font-weight: 400;
  }

  .modal-title .orange {
    color: #ff6600;

  }

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
    font-size: 18px;
  }

  .toast-body {
    flex: 1;
  }

  .toast-title {
    font-family: Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
    margin-bottom: 2px;
  }

  .toast-msg {
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
    font-weight: 400;
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

  .toast-close:hover {
    color: white;
  }

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

  /* ===================== FOOTER ===================== */
  .roi-footer {
    background: #0f172a;
    color: #ccc;
    padding: 60px 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 768px) {
    .roi-footer {
      padding: 80px 64px;
    }
  }

  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: 48px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .footer-content {
      grid-template-columns: repeat(4, 1fr);
      gap: 48px;
    }
  }

  .footer-title {
    font-weight: 600;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  .footer-desc {
    font-size: 16px;
    line-height: 1.7;
    font-weight: 400;
    color: #ccc;
  }

  .footer-links {
    list-style: none;
  }

  .footer-links li {
    margin-bottom: 12px;
  }

  .footer-links a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    font-weight: 400;
  }

  .footer-links a:hover {
    color: #ff6600;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 32px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.5px;
    opacity: 0.5;
    color: #ccc;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .footer-bottom {
      text-align: left;
    }
  }

  /* ===================== FULL RESPONSIVE OVERRIDES ===================== */

  /* NAVBAR */
  /* NAVBAR */
  @media (max-width: 768px) {
    .roi-header-content {
      padding: 0 16px;
      height: 64px;
    }

    .roi-logo img {
      height: 32px !important;
    }
  }

  @media (max-width: 480px) {
    .roi-header-content > div:first-child {
      gap: 6px;
    }
  }

  /* HERO */
  @media (max-width: 768px) {
    .hero {
      min-height: auto;
    }

    .hero-inner {
      padding: 32px 20px 60px;
      text-align: center;
    }

    .hero-h1 {
      font-size: clamp(26px, 8vw, 42px);
      letter-spacing: -0.5px;
    }

    .hero-subtitle {
      font-size: 16px;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .btn-main,
    .btn-secondary {
      width: 100%;
      max-width: 320px;
      padding: 15px 24px;
      font-size: 16px;
    }

    .hero-img-wrap {
      width: calc(100% - 32px);
      margin-top: -20px;
    }

    .hero-img-frame {
      border-radius: 14px;
    }

    .hero-img-chrome {
      height: 28px;
    }
  }
@media (max-width: 480px) {
    .revenue-label-full { display: none !important; }
    .revenue-label-short { display: inline !important; }
  }
  /* SECTION HEADERS */
  @media (max-width: 768px) {
    .section-h2 {
      font-size: 26px !important;
      letter-spacing: -0.3px;
    }

    .section-p {
      font-size: 16px;
    }

    .challenges,
    .framework,
    .features,
    .aeo,
    .case-studies,
    .comparison,
    .campaign,
    .faq,
    .process,
    .cta {
      padding: 64px 20px;
    }
  }

  /* CHALLENGES GRID */
  @media (max-width: 768px) {
    .grid-3 {
      grid-template-columns: 1fr;
    }

    .modular-grid-card {
      padding: 24px;
    }

    .card-h4 {
      font-size: 17px;
    }

    .card-p {
      font-size: 16px;
    }
  }

  /* FRAMEWORK / SEO MASTERY */
  @media (max-width: 1024px) {
    .framework-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .framework-grid {
      grid-template-columns: 1fr;
    }

    .section-header[style] {
      flex-direction: column !important;
      align-items: flex-start !important;
    }

    .phase-card {
      padding: 24px;
    }
  }

  /* FEATURES */
  @media (max-width: 1024px) {
    .grid-5 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid-5 {
      grid-template-columns: 1fr;
    }

    .feature-card {
      padding: 24px;
      text-align: left;
    }
  }

  /* AEO */
  @media (max-width: 1024px) {
    .aeo-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .aeo-h2 {
      font-size: 32px !important;
    }

    .stat-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .aeo-h2 {
      font-size: 26px !important;
    }

    .stat-num {
      font-size: 24px;
    }

    .aeo-item {
      padding: 16px;
    }
  }

  /* CASE STUDIES */
  @media (max-width: 1024px) {
    .case-cards {
      grid-template-columns: 1fr !important;
    }

    .case-card {
      grid-template-columns: 1fr;
    }

    .case-card-header {
      grid-column: 1;
    }

    .case-card-h4 {
      grid-column: 1;
      font-size: 17px;
    }

    .case-card-p {
      grid-column: 1;
    }
  }

  @media (max-width: 600px) {
    .case-card {
      padding: 24px;
    }

    .case-metric-num {
      font-size: 22px;
    }
  }

  /* COMPARISON TABLE */
  @media (max-width: 768px) {
    .comparison-header,
    .comparison-row {
      grid-template-columns: 1.5fr 1fr 1.5fr;
    }

    .comparison-header-cell:nth-child(4),
    .comparison-cell:nth-child(4) {
      display: none;
    }

    .comparison-header-cell,
    .comparison-cell {
      padding: 14px 12px;
      font-size: 16px;
    }

    .comparison-cell.col-feature {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .comparison-header,
    .comparison-row {
      grid-template-columns: 1.2fr 1fr 1.2fr;
    }

    .comparison-header-cell,
    .comparison-cell {
      padding: 12px 8px;
      font-size: 16px;
    }
  }

  /* REAL RESULTS REAL SAVINGS */
  @media (max-width: 768px) {
    .real-results-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  @media (max-width: 480px) {
    .real-results-grid {
      grid-template-columns: 1fr !important;
      font-size: 16px;
    }
  }

  /* VIDEO SECTION */
  @media (max-width: 768px) {
    .hero-img-frame {
      border-radius: 12px;
    }
  }

  /* CAMPAIGN */
  @media (max-width: 1024px) {
    .campaign-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .results-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .result-num {
      font-size: 36px;
    }
  }

  @media (max-width: 600px) {
    .campaign-h2 {
      font-size: 24px;
    }


    .results-box {
      padding: 28px 20px;
      font-size: 16px;
    }

    .result-num {
      font-size: 28px;
    }
  }

  /* FAQ */
  @media (max-width: 768px) {
    .faq-grid {
      grid-template-columns: 1fr;
    }

    .faq-question {
      font-size: 15px;
    }

    .faq-toggle {
      padding: 16px 20px;
    }

    .faq-answer-text {
      padding: 16px 20px;
      font-size: 14px;
    }
  }

  /* PROCESS */
  @media (max-width: 1024px) {
    .process-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .process-grid {
      grid-template-columns: 1fr;
    }

    .process-step {
      padding: 24px;
    }
  }

  /* CTA FORM */
  @media (max-width: 1024px) {
    .cta-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .cta-h2 {
      font-size: 32px !important;
    }
  }

  @media (max-width: 600px) {
    .cta-form {
      padding: 24px 20px;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .form-submit {
      font-size: 16px;
      padding: 16px 24px;
    }

    .cta-h2 {
      font-size: 26px !important;
    }

    .cta-p {
      font-size: 16px;
    }
  }

  /* MODAL */
  @media (max-width: 600px) {
    .modal-box {
      padding: 28px 20px;
      border-radius: 20px;
    }

    .modal-title {
      font-size: 20px;
    }

    .form-row {
      grid-template-columns: 1fr;
    }
  }

  /* FOOTER */
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .roi-footer {
      padding: 48px 20px;
    }
  }

  @media (max-width: 480px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .footer-bottom {
      text-align: center;
    }
  }

  /* TOAST */
  @media (max-width: 480px) {
    .toast-container {
      bottom: 16px;
      right: 12px;
      left: 12px;
    }

    .toast {
      min-width: unset;
      width: 100%;
    }
  }
`;

export default styles;
