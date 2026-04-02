<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();
</script>

<template>
  <section class="packages-section container">
    <div class="section-header">
      <div class="section-badge">{{ t('packages.badge') }}</div>
      <h2 class="section-title">{{ t('packages.title') }}</h2>
      <p class="section-desc">{{ t('packages.subtitle') }}</p>
    </div>

    <div class="packages-grid">
      <div 
        v-for="(pkg, index) in t('packages.list')" 
        :key="index" 
        class="package-card"
        :class="{ 'popular': pkg.isPopular }"
      >
        <div v-if="pkg.isPopular" class="popular-badge">Most Popular</div>
        <div class="package-header">
          <h3 class="package-name">{{ pkg.name }}</h3>
          <div class="package-speed">{{ pkg.speed }}</div>
          <div class="package-price">{{ pkg.price }}</div>
        </div>
        
        <ul class="package-features">
          <li v-for="(feat, fIndex) in pkg.features" :key="fIndex">
            <i class="fas fa-check-circle"></i> {{ feat }}
          </li>
        </ul>

        <a href="https://wa.me/628114499096" target="_blank" class="btn" :class="pkg.isPopular ? 'btn-primary' : 'btn-outline'">
          {{ t('packages.cta') }} <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.packages-section {
  padding: 5rem 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.section-desc {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.package-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem 2rem;
  border-radius: 32px;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.package-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(14, 165, 233, 0.3);
}

.package-card.popular {
  background: rgba(14, 165, 233, 0.05);
  border: 2px solid var(--primary);
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.package-card.popular:hover {
  transform: scale(1.08) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  padding: 0.4rem 1.5rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4);
}

.package-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
}

.package-speed {
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.package-price {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.package-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
  text-align: left;
}

.package-features li {
  color: var(--text-muted);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
}

.package-features li i {
  color: var(--primary);
  font-size: 1rem;
}

.package-card .btn {
  width: 100%;
  padding: 1.2rem;
  font-weight: 700;
}

@media (max-width: 991px) {
  .package-card.popular {
    transform: scale(1);
  }
  .package-card.popular:hover {
    transform: translateY(-10px);
  }
}
</style>
