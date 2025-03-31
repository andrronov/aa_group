<script setup>
const advantages = [
    {
        label: "Не выходим за рамки сметы",
        icon: "/icons/money.svg"
    },
    {
        label: "Гарантия на все 3 года работы",
        icon: "/icons/guarantee.svg"
    },
    {
        label: "Официальный договор",
        icon: "/icons/documents.svg"
    },
    {
        label: "Черновые материалы от 9т руб/м2",
        icon: "/icons/shovel.svg"
    },
    {
        label: "Опыт более 15 лет работы",
        icon: "/icons/calendar.svg"
    },
    {
        label: "Дизайн проекты и бесплатный замер",
        icon: "/icons/accept.svg"
    },
]
</script>

<template>
    <section class="w-full content-center min-h-[368px] bg-primary text-white py-20" id="advantages">
        <h2 class="text-2xl sm:text-3xl text-white font-bold text-center mb-14">Преимущества работы с нами</h2>
        <div class="container mx-auto px-2 grid grid-cols-2 grid-rows-3 sm:grid-cols-6 sm:grid-rows-1 gap-10">
            <div v-for="item in advantages" :key="item" class="bg-transparent border-2 border-white p-2 w-full h-[245px] flex flex-col gap-5 text-center justify-center items-center">
                <img :src="item.icon" alt="money icon">
                <p class="font-bold text-sm sm:text-base">
                    {{ item.label }}
                </p>
            </div>
        </div>
    </section>
</template>