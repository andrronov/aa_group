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
        <li>+7 977-900-09-90</li>
        <li>AA.4ram@yandex.ru</li>
        <li>Г. Москва</li>
      </ul>
      <div class="flex items-center gap-2">
        <template v-for="link in ICON_LINKS" :key="link">
            <img :src="link" alt="icon link">
        </template>
      </div>
    </div>
  </section>
</template>
