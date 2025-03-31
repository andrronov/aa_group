<script setup>
import MainButton from './MainButton.vue';

const steps = [
  {
    title: "Демонтаж и подготовка",
    description: "Удаление старых покрытий и конструкций, уборка помещения."
  },
  {
    title: "Черновая отделка",
    description: "Выравнивание стен, потолков, монтаж проводки и труб."
  },
  {
    title: "Штукатурка и шпаклевка",
    description: "Подготовка поверхностей к финишной отделке."
  },
  {
    title: "Монтаж окон и дверей",
    description: "Установка и регулировка окон, дверей, герметизация."
  },
  {
    title: "Отделка",
    description: "Покраска, обои, плитка или другие декоративные покрытия."
  },
  {
    title: "Монтаж сантехники и электрики",
    description: "Установка сантехники, освещения и розеток."
  }
];

</script>

<template>
    <section class="w-full bg-primary text-white py-20">
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
            <MainButton white big>
                Оставить заявку
            </MainButton>
        </div>
    </section>
</template>