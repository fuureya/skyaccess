<script setup>
import Jumbotron from '../components/Jumbotron.vue';
</script>

<template>
  <div class="home-view">
    <Jumbotron />
    
    <!-- Future sections can be added here -->
    <section class="info-section container">
      <div class="section-badge">Premium Experience</div>
      <h2 class="section-title">Why Choose SkyAccess?</h2>
      <p class="section-desc">We combine cutting-edge technology with unmatched customer service to provide the best internet experience in the region.</p>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding-bottom: 5rem;
}

.info-section {
  padding: 8rem 0;
  text-align: center;
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
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
}

.section-desc {
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
