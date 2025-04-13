<script setup>
import AppNav from "./components/AppNav.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Advantages from "./components/Advantages.vue";
import RepairTypes from "./components/RepairTypes.vue";
import RepairSteps from "./components/RepairSteps.vue";
import Application from "./components/Application.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <div class="flex flex-col items-center min-h-screen">
    <AppNav />
    <Hero />
    <About />
    <Advantages />
    <RepairTypes />
    <RepairSteps />
    <Application />
    <FooterSection />
    <AppNav footer />
  </div>
</template>

<style scoped>
</style>
