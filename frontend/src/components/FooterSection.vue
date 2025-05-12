<script setup>
import Logo from "./Logo.vue";

const ICON_LINKS = [
  {
    icon: "icons/phone.svg",
    link: "tel:89779000990",
  },
  {
    icon: "icons/tg.svg",
    link: "https://t.me/AA_GROUP01",
  },
];
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
        <a v-for="(link, index) in ICON_LINKS" :key="index" :href="link.link">
          <img :src="link.icon" alt="icon link" />
        </a>
      </div>
    </div>
  </section>
</template>
