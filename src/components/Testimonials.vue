<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();

const getIcon = (role) => {
  const r = role.toLowerCase();
  if (r.includes('pemerintah') || r.includes('government')) return 'fas fa-building-columns';
  if (r.includes('perhotelan') || r.includes('hospitality')) return 'fas fa-hotel';
  if (r.includes('hukum') || r.includes('legal')) return 'fas fa-scale-balanced';
  return 'fas fa-award';
};
</script>

<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="badge">{{ t('testimonials.title') }}</div>
        <h2 class="title">{{ t('testimonials.title') }}</h2>
        <p class="subtitle">{{ t('testimonials.subtitle') }}</p>
      </div>

      <div class="testimonial-grid">
        <div 
          v-for="(item, index) in t('testimonials.list')" 
          :key="index" 
          class="testimonial-card glass"
        >
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
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="verified">
              <i class="fas fa-check-circle"></i> Terverifikasi
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 8rem 0;
  background: radial-gradient(circle at 90% 10%, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
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

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  border-color: rgba(14, 165, 233, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.client-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
}

.client-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.3rem;
}

.client-role {
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.testimonial-text {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
  font-style: italic;
  position: relative;
  margin-bottom: 2rem;
}

.quote-icon {
  color: var(--primary);
  opacity: 0.2;
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stars {
  color: #fbbf24;
  font-size: 0.9rem;
  display: flex;
  gap: 4px;
}

.verified {
  font-size: 0.85rem;
  color: #22c55e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
</style>
