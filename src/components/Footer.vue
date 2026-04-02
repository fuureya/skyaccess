<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <!-- Company Info -->
      <div class="footer-section company-info">
        <div class="footer-logo">
          <img src="../assets/img/logo-skyaccess.png" alt="SkyAccess Logo" class="footer-logo-img" />
        </div>
        <p class="tagline">TV on your every screen with the so fastest internet</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h4 class="footer-title">Links</h4>
        <ul class="footer-links">
          <li><router-link to="/about"><i class="fas fa-chevron-right"></i> About</router-link></li>
          <li><router-link to="/contact"><i class="fas fa-chevron-right"></i> Contact</router-link></li>
          <li><router-link to="/packages"><i class="fas fa-chevron-right"></i> Our Packages</router-link></li>
          <li><router-link to="/services"><i class="fas fa-chevron-right"></i> Services</router-link></li>
        </ul>
      </div>

      <!-- Meet Us -->
      <div class="footer-section">
        <h4 class="footer-title">Meet us</h4>
        <div class="address">
          <p><i class="fas fa-map-marker-alt"></i> Jl. Keindahan 1 Blok AA No.4</p>
          <p>Tamalanrea - Makassar</p>
          <p>Sulawesi - Indonesia</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h4 class="footer-title">Contact</h4>
        <div class="contact-details">
          <a href="mailto:noc@shangtel.co.id" class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>noc@shangtel.co.id</span>
          </a>
          <a href="tel:0411586975" class="contact-item">
            <i class="fas fa-phone"></i>
            <span>0411 586975</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container copyright-wrapper">
        <p class="copyright">Copyright © 2023. <span class="brand-name">SKYACCESS</span>. All Rights Reserved.</p>
        <div class="footer-accent-line"></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #020617; /* Slate 950 */
  padding: 5rem 0 2rem;
  border-top: 1px solid rgba(14, 165, 233, 0.1);
  color: var(--text-light);
  font-family: 'Inter', sans-serif;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
}

.tagline {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 250px;
}

.footer-title {
  color: var(--text-light);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-links a {
  color: var(--text-muted);
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.address p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.contact-item:hover {
  color: var(--primary);
}

.icon {
  font-size: 1.2rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.copyright-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.copyright {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: center;
}

.brand-name {
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 1px;
}

.footer-accent-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(to right, transparent, var(--primary), transparent);
  border-radius: 10px;
}

@media (max-width: 991px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section {
    align-items: center;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links a:hover {
    padding-left: 0;
  }

  .contact-item {
    justify-content: center;
  }
}
</style>
