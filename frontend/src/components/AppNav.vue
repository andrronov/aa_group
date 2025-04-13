<script setup>
import MainButton from "./MainButton.vue";
import NavMenu from "./NavMenu.vue";
import Logo from "./Logo.vue";
import { scrollIntoView, scrollToTop } from "../composables/useScroll";

defineProps({
  footer: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <component :is="footer ? 'footer' : 'header'" class="w-full bg-primary text-white">
    <div class="flex justify-between items-center h-[79px] container mx-auto px-2">
      <Logo />
      <NavMenu class="mx-auto" :hide="footer" />
      <MainButton white v-if="!footer" class="hidden sm:block" @click="scrollIntoView('application')">
        Заказать услугу
      </MainButton>
      <span v-else class="font-semibold cursor-pointer" @click="scrollToTop()">
        Наверх
      </span>
    </div>
  </component>
</template>

<style>

</style>