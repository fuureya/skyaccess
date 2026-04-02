<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();

// Helper to get image path
const getImg = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};
</script>

<template>
  <div class="about-view">
    <!-- Hero Section -->
    <header class="about-hero">
      <div class="container">
        <div class="badge">{{ t('nav.about') }}</div>
        <h1 class="hero-title">{{ t('about.title') }}</h1>
        <p class="hero-subtitle">{{ t('about.subtitle') }}</p>
      </div>
    </header>

    <!-- Unified Strategy Intro -->
    <section class="strategy-intro">
      <div class="container">
        <div class="intro-card glass">
          <h2 class="section-title">{{ t('about.focusTitle') }}</h2>
          <p class="intro-description">{{ t('about.focusText') }}</p>
        </div>
      </div>
    </section>

    <!-- Alternating Detailed Sections -->
    <section class="solution-sections">
      <div 
        v-for="(factor, index) in t('about.factors')" 
        :key="index" 
        class="solution-section"
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <div class="container section-grid">
          <div class="section-content">
            <div class="section-number">0{{ index + 1 }}</div>
            <h2 class="section-heading">{{ factor.title }}</h2>
            <p class="section-description">{{ factor.desc }}</p>
          </div>
          <div class="section-media">
            <div class="image-wrapper glass">
              <img :src="getImg(factor.img)" :alt="factor.title" class="solution-img" />
              <div class="img-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Business CTA -->
    <section class="about-cta">
      <div class="container">
        <div class="cta-card glass">
          <div class="cta-glow"></div>
          <h2 class="cta-heading">{{ t('about.ctaTitle') }}</h2>
          <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg pulse-glow">
            {{ t('about.ctaBtn') }} <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  padding-bottom: 2rem;
}

.about-hero {
  padding: 12rem 0 6rem;
  background: radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2rem;
  line-height: 1;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.strategy-intro {
  padding: 4rem 0;
}

.intro-card {
  padding: 4rem;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.intro-description {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* Alternating Sections */
.solution-sections {
  padding: 4rem 0;
}

.solution-section {
  padding: 8rem 0;
  position: relative;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.solution-section.reverse .section-grid {
  direction: rtl;
}

.solution-section.reverse .section-content {
  direction: ltr;
}

.section-number {
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  line-height: 1;
  display: block;
  letter-spacing: -2px;
}

.section-heading {
  font-size: 3.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.8rem;
  line-height: 1.2;
  position: relative;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--primary);
  border-radius: 2px;
}

.solution-section.reverse .section-heading::after {
  left: auto;
  right: 0;
}

.section-description {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.image-wrapper {
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/10;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.solution-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-wrapper:hover .solution-img {
  transform: scale(1.05);
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.4));
}

/* CTA */
.about-cta {
  padding: 8rem 0;
}

.cta-card {
  padding: 6rem;
  border-radius: 50px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
}

.cta-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
  animation: slow-rotate 20s linear infinite;
  z-index: 0;
}

@keyframes slow-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cta-heading {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 991px) {
  .hero-title { font-size: 3.5rem; }
  .section-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
  .solution-section.reverse .section-grid { direction: ltr; }
  .section-heading { font-size: 2.2rem; }
  .cta-card { padding: 4rem 2rem; }
  .cta-card h2 { font-size: 2.2rem; }
  .section-number { font-size: 3rem; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.1rem; }
}
</style>
