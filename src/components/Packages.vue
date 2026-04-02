<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();
</script>

<template>
  <section class="consultation-section container">
    <div class="consultation-card glass">
      <div class="consultation-content">
        <div class="section-badge">{{ t('packages.badge') }}</div>
        <h2 class="section-title">{{ t('packages.title') }}</h2>
        <p class="section-desc">
          {{ t('packages.desc') }}
        </p>
        <div class="consultation-features">
          <div class="c-feat">
            <i class="fas fa-satellite-dish"></i>
            <span>Custom VSAT Solutions</span>
          </div>
          <div class="c-feat">
            <i class="fas fa-shield-alt"></i>
            <span>Reliable Connectivity</span>
          </div>
          <div class="c-feat">
            <i class="fas fa-headset"></i>
            <span>Expert Consultation</span>
          </div>
        </div>
        <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg">
          {{ t('packages.cta') }} <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <div class="consultation-visual">
        <div class="visual-glow"></div>
        <img src="../assets/img/consultant.png" alt="Professional Consultant" class="consultant-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.consultation-section {
  padding: 6rem 1.5rem;
}

.consultation-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  padding: 5rem;
  border-radius: 48px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%);
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
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
}

.consultation-features {
  display: flex;
  gap: 2rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.c-feat {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
  font-weight: 500;
}

.c-feat i {
  color: var(--primary);
  font-size: 1.2rem;
}

.btn-lg {
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.consultation-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
}

.consultant-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.visual-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary);
  filter: blur(80px);
  opacity: 0.15;
  z-index: 1;
}

@media (max-width: 1200px) {
  .section-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 991px) {
  .consultation-card {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
    text-align: center;
  }
  
  .consultation-features {
    justify-content: center;
  }
  
  .section-desc {
    margin: 0 auto 3rem;
  }
  
  .consultation-visual {
    display: none;
  }
}
</style>
