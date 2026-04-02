<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();

// Simple contact methods array
const contactMethods = [
  { icon: 'fas fa-map-marker-alt', title: 'office', value: 'address' },
  { icon: 'fas fa-envelope', title: 'emailTitle', value: 'noc@shangtel.co.id', isLink: true, link: 'mailto:noc@shangtel.co.id' },
  { icon: 'fab fa-whatsapp', title: 'phoneTitle', value: '08114499096', isLink: true, link: 'https://wa.me/628114499096' }
];
</script>

<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <header class="contact-hero">
      <div class="container">
        <div class="badge">{{ t('nav.contact') }}</div>
        <h1 class="hero-title">{{ t('contact.title') }}</h1>
        <p class="hero-subtitle">{{ t('contact.subtitle') }}</p>
      </div>
    </header>

    <section class="contact-content">
      <div class="container grid-container">
        <!-- Contact Info Cards -->
        <div class="contact-info">
          <h2 class="section-heading">{{ t('footer.contact') }}</h2>
          <div class="info-cards">
            <div 
              v-for="(item, index) in contactMethods" 
              :key="index" 
              class="info-card glass"
            >
              <div class="card-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="card-text">
                <h3>{{ t(`contact.${item.title}`) }}</h3>
                <p v-if="!item.isLink">{{ t(`contact.${item.value}`) }}</p>
                <a v-else :href="item.link" target="_blank" class="contact-link">{{ item.value }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="contact-map glass">
          <div class="map-header">
            <h3><i class="fas fa-location-dot"></i> {{ t('contact.mapTitle') }}</h3>
          </div>
          <div class="map-wrapper">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15895.962208035678!2d119.5029415!3d-5.111944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefcf1e3f8a4ef%3A0xc314816c748c1f9c!2sJl.%20Keindahan%201%2C%20Tamalanrea%20Indah%2C%20Kec.%20Tamalanrea%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sen!2sid!4v1712061234567!5m2!1sen!2sid" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- High Impact CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-banner glass">
          <div class="cta-content">
            <div class="cta-text">
              <h2>{{ t('contact.ctaTitle') }}</h2>
              <p>Tim ahli kami siap memberikan solusi terbaik untuk infrastruktur Anda.</p>
            </div>
            <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg pulse-glow">
              {{ t('contact.ctaBtn') }} <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
  padding-bottom: 5rem;
}

.contact-hero {
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
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
}

.contact-content {
  padding: 4rem 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: flex-start;
}

.section-heading {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  position: relative;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary);
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  padding: 2.5rem;
  border-radius: 24px;
  display: flex;
  gap: 2rem;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(10px);
  border-color: rgba(14, 165, 233, 0.3);
}

.card-icon {
  width: 60px;
  height: 60px;
  background: rgba(14, 165, 233, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  flex-shrink: 0;
}

.card-text h3 {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.card-text p, .contact-link {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
  text-decoration: none;
}

.contact-link:hover {
  color: var(--primary);
}

/* Map */
.contact-map {
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-header {
  padding: 1.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.map-header h3 {
  font-size: 1.1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}

.map-wrapper {
  padding: 1rem;
}

.map-wrapper iframe {
  border-radius: 20px;
  filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%);
}

/* CTA */
.contact-cta {
  padding: 6rem 0;
}

.cta-banner {
  padding: 5rem;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(90deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.cta-text h2 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.2rem;
  color: var(--text-muted);
}

@media (max-width: 991px) {
  .grid-container { grid-template-columns: 1fr; }
  .cta-content { flex-direction: column; text-align: center; gap: 2.5rem; }
  .cta-text h2 { font-size: 2.2rem; }
  .hero-title { font-size: 3.2rem; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 2.5rem; }
  .cta-banner { padding: 3rem 1.5rem; }
}
</style>
