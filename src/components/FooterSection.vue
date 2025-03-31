<script setup>
import Logo from "./Logo.vue";

const ICON_LINKS = [
    "icons/phone.svg",
    "icons/mail.svg",
    "icons/wa.svg",
    "icons/tg.svg"
]
</script>

<template>
  <section class="w-full bg-white flex justify-center items-center">
    <div class="container mx-auto py-12 flex flex-col items-center h-[350px]">
      <Logo black />
      <ul class="flex flex-col items-center gap-2 my-8">
        <li>+7 (999) 999-99-99</li>
        <li>pochta@gmail.com</li>
        <li>Г. Москва</li>
        <li>Время работы:</li>
        <li>с 09:00 до 18:00</li>
      </ul>
      <div class="flex items-center gap-2">
        <template v-for="link in ICON_LINKS" :key="link">
            <img :src="link" alt="icon link">
        </template>
      </div>
    </div>
  </section>
</template>
