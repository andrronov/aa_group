<script setup>
const advantages = [
    {
        label: "Не выходим за рамки сметы",
        logo: "/icons/money.svg"
    },
    {

    }
]
</script>

<template>
    <section class="w-full content-center min-h-[368px] bg-primary text-white py-20">
        <h2 class="text-2xl sm:text-3xl text-white font-bold text-center mb-14">Преимущества работы с нами</h2>
        <div class="container mx-auto px-2 grid grid-cols-2 grid-rows-3 sm:grid-cols-6 sm:grid-rows-1 gap-10">
            <div v-for="item in 6" :key="item" class="bg-transparent border-2 border-white p-4 w-full h-52 flex flex-col gap-5 text-center justify-center items-center">
                <img src="../public/icons/money.svg" alt="money icon">
                <p class="font-bold text-sm sm:text-base">Не выходим за рамки сметы</p>
            </div>
        </div>
    </section>
</template>