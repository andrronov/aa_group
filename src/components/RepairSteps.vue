<script setup>
import { scrollIntoView } from '../composables/useScroll';
import MainButton from './MainButton.vue';

const steps = [
  {
    title: "Монтаж временного освещения и разметка",
    description: "Установка временного освещения и разметка помещений для последующих работ."
  },
  {
    title: "Возведение стен и стяжка пола",
    description: "Создание новых перегородок, выравнивание пола для дальнейших покрытий."
  },
  {
    title: "Штукатурка и прокладка коммуникаций",
    description: "Выравнивание стен, прокладка электрики и сантехники."
  },
  {
    title: "Малярные и отделочные работы",
    description: "Покраска, укладка плитки, монтаж потолков из гипсокартона и ГКЛ."
  },
  {
    title: "Установка дверей и декоративных элементов",
    description: "Монтаж дверей, плинтусов, молдингов и других декоративных элементов."
  },
  {
    title: "Чистовая отделка и клининг",
    description: "Завершение работ, установка сантехники и электрики, уборка помещения."
  }
];

</script>

<template>
    <section class="w-full bg-primary text-white py-20" id="repair-steps">
        <div class="container mx-auto flex flex-col w-full items-center px-2">
            <h2 class="text-center text-3xl font-bold">Этапы работ по ремонту:</h2>
            <div class="grid grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2 gap-4 w-full gap-y-24 py-24">
                <div v-for="(step, index) in steps" :key="index" class="flex flex-row gap-5 w-full items-start">
                    <span class="h-[60px] min-w-[60px] bg-white text-primary flex items-center justify-center text-xl font-bold">
                        {{ index + 1}}
                    </span>
                    <div class="flex flex-col items-start">
                        <h3 class="text-xl font-bold">{{ step.title }}</h3>
                        <p class="text-base text-white">{{ step.description }}</p>
                    </div>
                </div>
            </div>
            <MainButton white big @click="scrollIntoView('application')">
                Оставить заявку
            </MainButton>
        </div>
    </section>
</template>