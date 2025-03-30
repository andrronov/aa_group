<script setup>
import { shallowRef } from "vue";
import MainButton from "./MainButton.vue";

const types = [
  {
    label: "Ремонт квартир",
    img: "/images/repair-type/apartment.png",
    description: "Преобразим вашу квартиру в стильное и уютное пространство. Мы выполняем весь комплекс ремонтных работ: монтаж временного освещения, возведение стен, штукатурку, прокладку электрики и сантехники, стяжку пола, укладку плитки, малярные работы, установку потолков из гипсокартона и ГКЛ, монтаж плинтусов и молдингов, чистовую сантехнику и электрику, установку дверей и клининг. Каждый этап — с вниманием к деталям и вашим пожеланиям.",
  },
  {
    label: "Ремонт домов",
    img: "/images/repair-type/house.jpg",
    description: "Создадим ваш дом комфортным и современным. Мы выполняем полный спектр ремонтных работ: временное освещение, возведение стен, штукатурка стен, электрика, сантехника, стяжка пола, укладка плитки, малярные работы, монтаж потолков из гипсокартона, установка ГКЛ, монтаж напольных и потолочных плинтусов и молдингов, чистовая сантехника и электрика, установка дверей и клининг. Всё для создания уютного и стильного пространства.",
  },
  {
    label: "Ремонт офисов",
    img: "/images/repair-type/apartment.png",
    description: "Сделаем офис, который работает на ваш успех. Мы выполняем полный спектр ремонтных работ: от перепланировки и отделки помещений до установки инженерных систем и освещения. Уделяем внимание каждой детали, сочетая стиль, функциональность и комфорт. Пространство, которое мотивирует и оставляет приятное впечатление у клиентов и сотрудников.",
  },
  {
    label: "Ремонт под ключ",
    img: "/images/repair-type/by-key.jpg",
    description: "Берём на себя весь процесс — от разработки проекта до последнего штриха. Мы выполняем все виды работ: черновая отделка, инженерные коммуникации, финишная отделка и декор. Контролируем каждую деталь, чтобы вы получили идеальный результат без лишних забот. Ремонт, которым можно просто наслаждаться.",
  },
  {
    label: "Поэтапный ремонт",
    img: "/images/repair-type/by-step.jpg",
    description: "Ремонт, который идёт в вашем ритме. Мы выполняем работы поэтапно — от подготовки и черновой отделки до финишных штрихов. Такой подход позволяет гибко планировать бюджет и контролировать каждый этап. Удобное решение для тех, кто ценит порядок и качество.",
  },
];

const selectedType = shallowRef(types[0]);
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="container mx-auto w-full flex flex-col items-center">
      <h2 class="text-2xl sm:text-3xl text-black font-bold">Виды ремонта</h2>
      <ul class="grid grid-cols-5 grid-rows-1 w-full text-center my-12">
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
      <div class="flex flex-col sm:flex-row w-full gap-24 h-[543px]">
        <transition name="fade" mode="out-in">
          <div v-if="selectedType" :key="selectedType.label" class="w-full sm:w-1/2">
            <img
              :src="selectedType.img"
              alt="repair type image"
              class="w-full h-full object-cover rounded-lg shadow-lg pointer-events-none"
            />
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div v-if="selectedType" :key="selectedType.label" class="w-full sm:w-1/2 min-h-max flex flex-col justify-between items-center">
            <div></div>
            <p class="text-2xl text-black text-end">{{ selectedType.description }}</p>
            <MainButton class="w-full" big empty white>
              Оставить заявку
            </MainButton>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>