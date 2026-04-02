<script setup>
import { useI18n } from '../translations';
const { t } = useI18n();

// Helper to get image path
const getImg = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

// Gallery items with layout spans
const galleryItems = [
  { id: 1, span: 'large', img: 'hero-slide-1.png', title_id: 'Konektivitas Desa Pedalaman', title_en: 'Inland Village Connectivity' },
  { id: 2, span: 'wide', img: 'hero-slide-2.png', title_id: 'Digitalisasi UMKM Pesisir', title_en: 'Coastal SME Digitalization' },
  { id: 3, span: 'normal', img: 'hero-slide-3.png', title_id: 'Layanan Dukungan Masyarakat', title_en: 'Community Support Services' },
  { id: 4, span: 'tall', img: 'uptime.png', title_id: 'Monitor Reliabilitas Sinyal', title_en: 'Signal Reliability Monitoring' },
  { id: 5, span: 'normal', img: 'deployment.png', title_id: 'Instalasi Cepat di Pelosok', title_en: 'Rapid Remote Installation' },
  { id: 6, span: 'wide', img: 'security.png', title_id: 'Transmisi Data Terenkripsi', title_en: 'Encrypted Data Transmission' },
  { id: 7, span: 'normal', img: 'support.png', title_id: 'Pusat Dukungan Teknis NOC', title_en: 'NOC Technical Support Center' },
  { id: 8, span: 'tall', img: 'gallery-v1.png', title_id: 'Pendidikan Digital di Pegunungan', title_en: 'Digital Education in Mountains' }
];
</script>

<template>
  <div class="gallery-view">
    <header class="gallery-hero">
      <div class="container">
        <div class="badge">{{ t('nav.gallery') }}</div>
        <h1 class="hero-title">{{ t('gallery.title') }}</h1>
        <p class="hero-subtitle">{{ t('gallery.subtitle') }}</p>
      </div>
    </header>

    <section class="gallery-container">
      <div class="container">
        <!-- Masonry Grid -->
        <div class="gallery-grid">
          <div 
            v-for="item in galleryItems" 
            :key="item.id" 
            class="gallery-item glass"
            :class="item.span"
          >
            <div class="image-wrapper">
              <img :src="getImg(item.img)" :alt="item.title_id" class="gallery-img" />
              <div class="gallery-overlay">
                <div class="overlay-content">
                  <h3>{{ t('nav.lang') === 'ID' ? item.title_id : item.title_en }}</h3>
                  <p class="view-project">Lihat Selengkapnya <i class="fas fa-arrow-right"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery CTA -->
    <section class="gallery-cta">
      <div class="container">
        <div class="cta-card glass">
          <div class="cta-glow"></div>
          <h2>{{ t('gallery.ctaTitle') }}</h2>
          <a href="https://wa.me/628114499096" target="_blank" class="btn btn-primary btn-lg pulse-glow">
            {{ t('gallery.ctaBtn') }} <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-view {
  padding-bottom: 5rem;
}

.gallery-hero {
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
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Masonry Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 1.5rem;
  padding: 2rem 0;
}

.gallery-item {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1) rotate(1deg);
}

/* Span Classes */
.normal { grid-area: span 1 / span 1; }
.tall { grid-area: span 2 / span 1; }
.wide { grid-area: span 1 / span 2; }
.large { grid-area: span 2 / span 2; }

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
  opacity: 0;
  transition: all 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.8rem;
  font-weight: 700;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.view-project {
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateY(20px);
  transition: transform 0.4s ease 0.1s;
}

.gallery-item:hover h3, 
.gallery-item:hover .view-project {
  transform: translateY(0);
}

/* CTA */
.gallery-cta {
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

@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .hero-title { font-size: 3.5rem; }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  .large, .wide { grid-area: span 1 / span 2; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.1rem; }
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  .large, .wide, .tall { grid-area: span 1 / span 1; }
}
</style>
