<script setup>
import { useI18n } from '../i18n';
const { t } = useI18n();
</script>

<template>
  <section class="jumbotron">
    <div class="jumbotron-bg">
      <div class="glow-1"></div>
      <div class="glow-2"></div>
    </div>
    
    <div class="container jumbotron-content">
      <div class="hero-text">
        <h1 class="headline" v-html="t('hero.headline')"></h1>
        <p class="subheadline">
          {{ t('hero.subheadline') }}
        </p>
        
        <div class="cta-group">
          <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary">{{ t('hero.cta1') }} <i class="fab fa-whatsapp"></i></a>
          <button class="btn btn-outline">{{ t('hero.cta2') }}</button>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">100+</span>
            <span class="stat-label">{{ t('hero.stats.speed') }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">{{ t('hero.stats.uptime') }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">24/7</span>
            <span class="stat-label">{{ t('hero.stats.support') }}</span>
          </div>
        </div>
      </div>

      <div class="hero-image-wrapper">
        <div class="glass-card">
          <div class="card-header">
            <div class="card-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="card-body">
            <div class="speed-meter">
              <div class="meter-ring"></div>
              <div class="speed-value">VSAT</div>
              <div class="speed-unit">Satellite Tech</div>
            </div>
            <p class="card-tag">{{ t('hero.cardTag') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px; /* Offset for fixed navbar */
  background: #020617;
}

.jumbotron-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.glow-1 {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
  filter: blur(60px);
}

.glow-2 {
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
  filter: blur(80px);
}

.jumbotron-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 4rem;
}

.headline {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #fff;
}

.accent {
  background: linear-gradient(to right, #0ea5e9, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subheadline {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.btn {
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 20px rgba(14, 165, 233, 0.2);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(14, 165, 233, 0.3);
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* Jumbotron Graphic */
.hero-image-wrapper {
  display: flex;
  justify-content: center;
}

.glass-card {
  width: 320px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
  animation: float 6s ease-in-out infinite;
}

.card-header {
  margin-bottom: 2rem;
}

.card-dots {
  display: flex;
  gap: 6px;
}

.card-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.speed-meter {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
}

.meter-ring {
  width: 180px;
  height: 180px;
  border: 4px solid rgba(14, 165, 233, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  position: absolute;
  top: -10px;
  animation: rotate 3s linear infinite;
}

.speed-value {
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-top: 1.5rem;
}

.speed-unit {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: -5px;
}

.card-tag {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  background: rgba(14, 165, 233, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  display: block;
  margin: 0 auto;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 991px) {
  .jumbotron-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .headline {
    font-size: 3rem;
  }

  .subheadline {
    margin: 0 auto 2.5rem;
  }

  .cta-group {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-image-wrapper {
    order: -1;
  }
}

@media (max-width: 576px) {
  .headline {
    font-size: 2.5rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .cta-group {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
