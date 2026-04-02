<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();
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

    <!-- Strategy Section -->
    <section class="strategy-section">
      <div class="container">
        <div class="strategy-content glass">
          <div class="strategy-text">
            <h2 class="section-title">{{ t('about.focusTitle') }}</h2>
            <p>{{ t('about.focusText') }}</p>
          </div>
          <div class="strategy-visual">
            <div class="pulse-ring"></div>
            <i class="fas fa-network-wired strategy-icon"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Informative Factors -->
    <section class="factors-section">
      <div class="container">
        <div class="factors-grid">
          <div 
            v-for="(factor, index) in t('about.factors')" 
            :key="index" 
            class="factor-card glass"
          >
            <div class="factor-icon">
              <i v-if="index === 0" class="fas fa-clock-rotate-left"></i>
              <i v-if="index === 1" class="fas fa-truck-fast"></i>
              <i v-if="index === 2" class="fas fa-vault"></i>
              <i v-if="index === 3" class="fas fa-headset"></i>
            </div>
            <h3 class="factor-title">{{ factor.title }}</h3>
            <p class="factor-desc">{{ factor.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Business CTA -->
    <section class="about-cta">
      <div class="container">
        <div class="cta-card glass">
          <div class="cta-glow"></div>
          <h2>{{ t('about.ctaTitle') }}</h2>
          <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg">
            {{ t('about.ctaBtn') }} <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  padding-bottom: 5rem;
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

.strategy-section {
  padding: 6rem 0;
}

.strategy-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  padding: 5rem;
  border-radius: 48px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.strategy-text p {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.strategy-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.strategy-icon {
  font-size: 8rem;
  color: var(--primary);
  z-index: 2;
  filter: drop-shadow(0 0 20px var(--primary));
}

.pulse-ring {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-ring 3s infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1.5); opacity: 0; }
}

.factors-section {
  padding: 6rem 0;
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.factor-card {
  padding: 3rem 2.5rem;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.factor-card:hover {
  transform: translateY(-10px);
  border-color: rgba(14, 165, 233, 0.4);
}

.factor-icon {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
}

.factor-title {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 700;
}

.factor-desc {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
}

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

.cta-card h2 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 1;
}

.btn-lg {
  position: relative;
  z-index: 1;
}

@media (max-width: 991px) {
  .hero-title { font-size: 3.5rem; }
  .strategy-content { padding: 3rem; grid-template-columns: 1fr; text-align: center; }
  .cta-card { padding: 4rem 2rem; }
  .cta-card h2 { font-size: 2.2rem; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.1rem; }
}
</style>
