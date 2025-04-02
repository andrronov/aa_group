<script setup>
import { scrollIntoView } from '../composables/useScroll';
import MainButton from './MainButton.vue';

const steps = [
  {
    "title": "Возведение стен",
    "description": "Создание новых перегородок для зонирования помещений."
  },
  {
    "title": "Штукатурка",
    "description": "Выравнивание стен для последующей отделки."
  },
  {
    "title": "Сантехника и электрика",
    "description": "Прокладка труб и электрических кабелей, установка точек подключения."
  },
  {
    "title": "Стяжка пола",
    "description": "Выравнивание пола для подготовки к финальной отделке."
  },
  {
    "title": "ГКЛ",
    "description": "Монтаж листов ГКЛ для выравнивания поверхностей и создания конструкций."
  },
  {
    "title": "Плиточные работы",
    "description": "Укладка плитки на стены и полы."
  },
  {
    "title": "Малярные работы",
    "description": "Подготовка поверхностей и покраска стен и потолков."
  },
  {
    "title": "Напольные покрытия",
    "description": "Укладка ламината, паркета, линолеума, инженерной доски и других покрытий."
  },
  {
    "title": "Натяжные потолки",
    "description": "Установка натяжных потолков любой сложности."
  },
  {
    "title": "Чистовая сантехника и электрика",
    "description": "Установка розеток, выключателей, сантехники и окончательная настройка."
  },
  {
    "title": "Клининг",
    "description": "Профессиональная уборка после ремонта и строительства."
  }
];

</script>

<template>
    <section class="w-full bg-primary text-white py-20" id="repair-steps">
        <div class="container mx-auto flex flex-col w-full items-center px-2">
            <h2 class="text-center text-3xl font-bold">Этапы работ по ремонту:</h2>
            <div class="grid grid-cols-1 grid-rows-9 sm:grid-cols-3 sm:grid-rows-3 gap-4 w-full gap-y-24 py-24">
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