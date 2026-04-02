<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from '../translations';
const { t } = useI18n();

const currentIndex = ref(0);
const testimonialList = computed(() => t('testimonials.list') || []);

const getIcon = (role) => {
  const r = role.toLowerCase();
  if (r.includes('pemerintah') || r.includes('government')) return 'fas fa-building-columns';
  if (r.includes('perhotelan') || r.includes('hospitality')) return 'fas fa-hotel';
  if (r.includes('hukum') || r.includes('legal')) return 'fas fa-scale-balanced';
  return 'fas fa-award';
};

let timer = null;
const startAutoPlay = () => {
  timer = setInterval(() => {
    next();
  }, 6000);
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonialList.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonialList.value.length) % testimonialList.value.length;
};

const goTo = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="badge">{{ t('testimonials.title') }}</div>
        <h2 class="title">{{ t('testimonials.title') }}</h2>
        <p class="subtitle">{{ t('testimonials.subtitle') }}</p>
      </div>

      <div class="slider-wrapper">
        <div class="slider-container">
          <div 
            class="slider-track" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(item, index) in testimonialList" 
              :key="index" 
              class="slide"
            >
              <div class="testimonial-card glass">
                <div class="card-header">
                  <div class="client-icon">
                    <i :class="getIcon(item.role)"></i>
                  </div>
                  <div class="client-info">
                    <h4 class="client-name">{{ item.name }}</h4>
                    <span class="client-role">{{ item.role }}</span>
                  </div>
                </div>
                <p class="testimonial-text">
                  <i class="fas fa-quote-left quote-icon"></i>
                  {{ item.text }}
                </p>
                <div class="card-footer">
                  <div class="stars">
                    <i class="fas fa-star" v-for="i in 5" :key="i"></i>
                  </div>
                  <span class="verified">
                    <i class="fas fa-check-circle"></i> Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="nav-btn prev" @click="prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="nav-btn next" @click="next">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="slider-dots">
          <span 
            v-for="(_, index) in testimonialList" 
            :key="index" 
            :class="{ active: currentIndex === index }"
            class="dot"
            @click="goTo(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 8rem 0;
  background: radial-gradient(circle at 10% 90%, rgba(14, 165, 233, 0.03) 0%, transparent 50%);
  overflow: hidden;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
}

.badge {
  display: inline-block;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Slider System */
.slider-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.slider-container {
  overflow: hidden;
  border-radius: 32px;
}

.slider-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  flex: 0 0 100%;
  padding: 1rem;
}

.testimonial-card {
  padding: 3rem;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.client-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.05) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary);
}

.client-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
}

.client-role {
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonial-text {
  font-size: 1.3rem;
  color: #f8fafc;
  line-height: 1.8;
  font-style: italic;
  position: relative;
  margin-bottom: 3rem;
}

.quote-icon {
  color: var(--primary);
  opacity: 0.3;
  font-size: 2rem;
  margin-right: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stars {
  color: #fbbf24;
  font-size: 1rem;
  display: flex;
  gap: 6px;
}

.verified {
  font-size: 0.9rem;
  color: #22c55e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Nav Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn.prev { left: -70px; }
.nav-btn.next { right: -70px; }

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 3rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.4s ease;
}

.dot.active {
  background: var(--primary);
  width: 30px;
  border-radius: 10px;
}

@media (max-width: 1100px) {
  .nav-btn.prev { left: 10px; }
  .nav-btn.next { right: 10px; }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }

  .testimonial-card {
    padding: 2rem;
  }

  .nav-btn {
    display: none;
  }
}
</style>
