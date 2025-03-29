<script setup>
import MainButton from "./MainButton.vue";
</script>

<template>
    <section class="w-full flex flex-col gap-12 justify-center items-center h-[688px] relative">
        <img src="../public/images/hero.jpg" class="w-full h-[688px] object-cover opacity-90 absolute top-0 left-0" alt="">
        <div class="bg-[#2E2E2E] opacity-65 max-w-[720px] text-center p-1">
            <p class="text-[46px] text-white bg-blend-difference line-clamp-6 font-bold">Ремонт, который превосходит ожидания</p>
        </div>
        <MainButton class="z-100" big>
            Оставить заявку
        </MainButton>
    </section>
</template>