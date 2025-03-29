<script setup>
import { shallowRef } from "vue";

const types = [
  {
    label: "Ремонт квартир",
    img: "/images/repair-type/apartment.png",
    description: "Качественный ремонт квартир любой сложности.",
  },
  {
    label: "Ремонт домов",
    img: "/images/repair-type/apartment.png",
    description: "Полный спектр услуг по ремонту домов.",
  },
  {
    label: "Ремонт офисов",
    img: "/images/repair-type/apartment.png",
    description: "Современный ремонт офисных помещений.",
  },
  {
    label: "Ремонт под ключ",
    img: "/images/repair-type/apartment.png",
    description: "Ремонт под ключ с гарантией качества.",
  },
  {
    label: "Поэтапный ремонт",
    img: "/images/repair-type/apartment.png",
    description: "Ремонт поэтапно с учетом всех пожеланий.",
  },
];

const selectedType = shallowRef({
  label: "Ремонт квартир",
  img: "/images/repair-type/apartment.png",
  description: "Качественный ремонт квартир любой сложности.",
});
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="container mx-auto w-full flex flex-col items-center">
      <h2 class="text-2xl sm:text-3xl text-black font-bold">Виды ремонта</h2>
      <ul class="grid grid-cols-5 grid-rows-1 w-full text-center my-16">
        <li
          v-for="type in types"
          :key="type"
          class="text-lg cursor-pointer place-self-center max-w-max px-2.5 py-2"
          :class="{
            'text-white bg-primary': selectedType.label === type.label,
          }"
          @click="selectedType = type"
        >
          {{ type.label }}
        </li>
      </ul>
      <div class="flex flex-col sm:flex-row gap-10">
        <div class="w-full sm:w-1/2">
          <img
            :src="selectedType.img"
            alt="repair type image"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full sm:w-1/2 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">{{ selectedType.label }}</h3>
          <p class="text-lg text-gray-700">{{ selectedType.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
