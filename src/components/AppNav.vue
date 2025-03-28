<script setup>
import MainButton from "./MainButton.vue";
import NavMenu from "./NavMenu.vue";
</script>

<template>
  <header class="w-full bg-primary text-white">
    <div class="flex justify-between items-center h-[79px] container mx-auto px-2">
      <img src="../public/logo.svg" alt="logo" class="w-36 pointer-events-none">
      <NavMenu class="mx-auto" />
      <MainButton white>
        Заказать услугу
      </MainButton>
    </div>
  </header>
</template>

<style>

</style>