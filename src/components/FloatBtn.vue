<script setup>
</script>

<template>
  <a href="https://wa.me/628114499096" target="_blank" class="float-btn" title="Chat with us on WhatsApp">
    <div class="pulse"></div>
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<style scoped>
.float-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  transition: all 0.3s ease;
  text-decoration: none;
}

.float-btn:hover {
  transform: scale(1.1);
  background-color: #20ba5a;
}

.pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #25d366;
  opacity: 0.7;
  z-index: -1;
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .float-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 25px;
  }
}
</style>
