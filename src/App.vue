<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <router-view />
      
      <!-- Placeholder content to test scroll -->
      <section style="height: 150vh; padding-top: 100px;" class="container">
        <h1 style="font-size: 3rem; margin-bottom: 2rem; background: linear-gradient(to right, #0ea5e9, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Welcome to SkyAccess</h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 600px;">Experience modern sky-high access with our cutting-edge solutions. This navbar is designed to be eye-catching and premium.</p>
      </section>
    </main>
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
