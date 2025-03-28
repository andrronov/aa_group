<script setup>
const menuItems = [
    "О нас", "Преимущества", "Виды ремонта", "Этапы работ", "Оставить заявку"
]
</script>

<template>
    <ul class="w-full max-w-[800px] flex justify-between items-center">
        <li v-for="(item, index) in menuItems" :key="index" class="cursor-pointer">
            {{ item }}
        </li>
    </ul>
</template>