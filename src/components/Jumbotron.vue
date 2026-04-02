<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../translations';
const { t } = useI18n();

const currentSlide = ref(0);
const slides = [
  { url: '/src/assets/img/hero-slide-1.png', alt: 'VSAT on Mountain' },
  { url: '/src/assets/img/hero-slide-2.png', alt: 'VSAT for Communities' },
  { url: '/src/assets/img/hero-slide-3.png', alt: 'Advanced VSAT Tech' }
];

let timer = null;
const startSlider = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 5000);
};

onMounted(() => {
  startSlider();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <section class="jumbotron">
    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-badge">{{ t('hero.cardTag') }}</div>
        <h1 class="hero-title" v-html="t('hero.headline')"></h1>
        <p class="hero-subtitle">
          {{ t('hero.subheadline') }}
        </p>
        
        <div class="hero-btns">
          <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg">
            {{ t('hero.cta1') }} <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#packages" class="btn btn-outline btn-lg">
            {{ t('hero.cta2') }}
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">{{ t('hero.stats.uptime') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">24/7</span>
            <span class="stat-label">{{ t('hero.stats.support') }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="slider-container glass">
          <transition-group name="fade">
            <div 
              v-for="(slide, index) in slides" 
              :key="index" 
              v-show="currentSlide === index"
              class="slide"
            >
              <img :src="slide.url" :alt="slide.alt" class="slide-img" />
            </div>
          </transition-group>
          <div class="slider-dots">
            <span 
              v-for="(_, index) in slides" 
              :key="index" 
              :class="{ active: currentSlide === index }"
              class="dot"
              @click="currentSlide = index"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  padding: 10rem 0 6rem;
  background: radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.hero-badge {
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
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-title :deep(.accent) {
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-btns {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Slider System */
.hero-visual {
  position: relative;
  z-index: 2;
}

.slider-container {
  width: 100%;
  aspect-ratio: 1.2 / 1;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
  background: rgba(15, 23, 42, 0.4);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s ease-out;
}

.slide[style*="display: none"] .slide-img {
  transform: scale(1.1);
}

.slide:not([style*="display: none"]) .slide-img {
  transform: scale(1);
}

.slider-dots {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
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
