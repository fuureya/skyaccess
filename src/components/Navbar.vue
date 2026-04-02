<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../i18n';

const { t, toggleLocale, currentLocale } = useI18n();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar glass" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container navbar-content">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="../assets/img/logo-skyaccess.png" alt="SkyAccess Logo" class="logo-img" />
      </router-link>

      <!-- Desktop Menu -->
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">{{ t('nav.home') }}</router-link></li>
        <li><router-link to="/about" class="nav-link">{{ t('nav.about') }}</router-link></li>
        <li><router-link to="/gallery" class="nav-link">{{ t('nav.gallery') }}</router-link></li>
        <li><router-link to="/contact" class="nav-link">{{ t('nav.contact') }}</router-link></li>
      </ul>

      <!-- Contact Info & Action -->
      <div class="nav-actions">
        <!-- Language Switcher -->
        <button class="lang-switcher" @click="toggleLocale">
          <i class="fas fa-globe"></i>
          <span>{{ currentLocale.toUpperCase() }}</span>
        </button>

        <a href="mailto:noc@shangtel.co.id" class="contact-email">
          <i class="fas fa-envelope"></i>
          <span class="email-text">noc@shangtel.co.id</span>
        </a>
        <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu glass">
        <ul class="mobile-links">
          <li><router-link to="/" class="mobile-link" @click="toggleMenu">{{ t('nav.home') }}</router-link></li>
          <li><router-link to="/about" class="mobile-link" @click="toggleMenu">{{ t('nav.about') }}</router-link></li>
          <li><router-link to="/gallery" class="mobile-link" @click="toggleMenu">{{ t('nav.gallery') }}</router-link></li>
          <li><router-link to="/contact" class="mobile-link" @click="toggleMenu">{{ t('nav.contact') }}</router-link></li>
          <li class="mobile-lang">
            <button class="lang-switcher" @click="toggleLocale">
              <i class="fas fa-globe"></i>
              <span>{{ currentLocale.toUpperCase() }}</span>
            </button>
          </li>
          <li class="mobile-contact">
            <a href="mailto:noc@shangtel.co.id" class="contact-email">
              <i class="fas fa-envelope"></i>
              <span>noc@shangtel.co.id</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(15, 23, 42, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 45px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover .logo-img {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-weight: 500;
  color: var(--text-muted);
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
}

.nav-link:hover, .router-link-active {
  color: var(--text-light);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after, .router-link-active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.lang-switcher:hover {
  color: var(--primary);
  background: rgba(14, 165, 233, 0.1);
}

.contact-email {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(14, 165, 233, 0.1);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
  transition: all 0.3s ease;
}

.contact-email:hover {
  background: var(--primary);
  color: white;
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  z-index: 1001;
}

.bar {
  width: 25px;
  height: 2px;
  background: var(--text-light);
  transition: all 0.3s ease;
}

/* Mobile Menu */
@media (max-width: 991px) {
  .nav-links, .email-text, .nav-actions > .lang-switcher {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .mobile-menu {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    z-index: 999;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .mobile-link {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .mobile-lang {
    margin-top: 1rem;
  }

  .mobile-contact {
    margin-top: 2rem;
  }
}

/* Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
