<script setup>
import { ref, computed } from 'vue';
import { useI18n } from '../translations';
const { t } = useI18n();

const activeFilter = ref('all');

// Helper to get image path
const getImg = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

const galleryItems = [
  { id: 1, category: 'village', img: 'hero-slide-1.png', title_id: 'Konektivitas Desa Pedalaman', title_en: 'Inland Village Connectivity' },
  { id: 2, category: 'business', img: 'hero-slide-2.png', title_id: 'Digitalisasi UMKM Pesisir', title_en: 'Coastal SME Digitalization' },
  { id: 3, category: 'public', img: 'hero-slide-3.png', title_id: 'Layanan Dukungan Masyarakat', title_en: 'Community Support Services' },
  { id: 4, category: 'public', img: 'uptime.png', title_id: 'Monitor Reliabilitas Sinyal', title_en: 'Signal Reliability Monitoring' },
  { id: 5, category: 'village', img: 'deployment.png', title_id: 'Instalasi Cepat di Pelosok', title_en: 'Rapid Remote Installation' },
  { id: 6, category: 'public', img: 'security.png', title_id: 'Transmisi Data Terenkripsi', title_en: 'Encrypted Data Transmission' },
  { id: 7, category: 'public', img: 'support.png', title_id: 'Pusat Dukungan Teknis NOC', title_en: 'NOC Technical Support Center' },
  { id: 8, category: 'village', img: 'gallery-v1.png', title_id: 'Pendidikan Digital di Pegunungan', title_en: 'Digital Education in Mountains' }
];

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return galleryItems;
  return galleryItems.filter(item => item.category === activeFilter.value);
});

const setFilter = (filter) => {
  activeFilter.value = filter;
};
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
        <!-- Filters -->
        <div class="filter-group">
          <button 
            v-for="(label, key) in t('gallery.filters')" 
            :key="key"
            class="filter-btn"
            :class="{ active: activeFilter === key }"
            @click="setFilter(key)"
          >
            {{ label }}
          </button>
        </div>

        <!-- Grid -->
        <div class="gallery-grid">
          <transition-group name="list">
            <div 
              v-for="item in filteredItems" 
              :key="item.id" 
              class="gallery-item glass"
            >
              <div class="image-wrapper">
                <img :src="getImg(item.img)" :alt="item.title_id" class="gallery-img" />
                <div class="gallery-overlay">
                  <div class="overlay-content">
                    <span class="category-tag">{{ t(`gallery.filters.${item.category}`) }}</span>
                    <h3>{{ t('nav.lang') === 'ID' ? item.title_id : item.title_en }}</h3>
                    <div class="zoom-icon">
                      <i class="fas fa-expand"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </section>

    <!-- Gallery CTA -->
    <section class="gallery-cta">
      <div class="container">
        <div class="cta-card glass">
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
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
}

.filter-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover, .filter-btn.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.gallery-item {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  width: 100%;
}

.category-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.overlay-content h3 {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0;
}

.zoom-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  background: rgba(14, 165, 233, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: translateY(-20px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .zoom-icon {
  transform: translateY(0);
}

.gallery-cta {
  padding: 8rem 0;
}

.cta-card {
  padding: 5rem;
  border-radius: 40px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-card h2 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
}

/* Animations */
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; }
  .gallery-grid { grid-template-columns: 1fr; }
  .cta-card { padding: 3rem 1.5rem; }
  .cta-card h2 { font-size: 1.8rem; }
}
</style>
