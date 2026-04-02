<script setup>
import Jumbotron from '../components/Jumbotron.vue';
import { useI18n } from '../i18n';
const { t } = useI18n();
</script>

<template>
  <div class="home-view">
    <Jumbotron />
    
    <section class="info-section container">
      <div class="section-header">
        <div class="section-badge">{{ t('info.badge') }}</div>
        <h2 class="section-title">{{ t('info.title') }}</h2>
        <p class="section-desc">{{ t('info.desc') }}</p>
      </div>

      <div class="benefits-grid">
        <div v-for="(benefit, index) in t('info.benefits')" :key="index" class="benefit-card">
          <div class="benefit-icon">
            <i :class="index === 0 ? 'fas fa-globe-asia' : index === 1 ? 'fas fa-satellite' : index === 2 ? 'fas fa-bolt' : 'fas fa-headset'"></i>
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.desc }}</p>
        </div>
      </div>

      <div class="cta-banner glass">
        <div class="cta-content">
          <h3>{{ t('info.cta') }}</h3>
          <p>{{ t('hero.subheadline') }}</p>
        </div>
        <a href="mailto:noc@shangtel.co.id" class="btn btn-primary">
          {{ t('info.ctaBtn') }} <i class="fas fa-comment-dots"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding-bottom: 5rem;
}

.info-section {
  padding: 8rem 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-badge {
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

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
}

.section-desc {
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: rgba(14, 165, 233, 0.05);
  border-color: rgba(14, 165, 233, 0.2);
  transform: translateY(-10px);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 2rem;
  transition: all 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3);
}

.benefit-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.benefit-desc {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
}

.cta-banner {
  padding: 4rem;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%);
}

.cta-content h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.cta-content p {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
}

.btn-primary {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .cta-banner {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}
</style>
