<template>
  <div class="d-flex flex-column main-container">
    <HeaderComponent/>
    <div class="container d-flex flex-column justify-content-center align-items-center router-view">
      <RouterView/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
</script>

<style scoped>
.main-container {
  min-height: 100vh;
}
.router-view {
  flex: 1;
}
</style>
