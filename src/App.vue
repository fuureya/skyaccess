<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatBtn from './components/FloatBtn.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <FloatBtn />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.main-content {
  padding-top: 20px;
}
</style>
