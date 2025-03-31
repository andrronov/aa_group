<script setup>
import MainButton from "./MainButton.vue";
import NavMenu from "./NavMenu.vue";
import Logo from "./Logo.vue";

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
      <NavMenu class="mx-auto" />
      <MainButton white v-if="!footer">
        Заказать услугу
      </MainButton>
      <span v-else class="font-semibold">
        Наверх
      </span>
    </div>
  </component>
</template>

<style>

</style>