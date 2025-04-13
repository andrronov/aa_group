<script setup>
import MobileMenu from "./MobileMenu.vue";
import { scrollIntoView } from "../composables/useScroll";

defineProps({
    hide: {
        type: Boolean,
        default: false
    }
})

const menuItems = [
    {
        label: "О нас",
        element: "about"
    },
    {
        label: "Преимущества",
        element: "advantages"
    },
    {
        label: "Виды ремонта",
        element: "repair-types"
    },
    {
        label: "Этапы работ",
        element: "repair-steps"
    }
]
</script>

<template>
    <ul class="w-full max-w-[700px] hidden sm:flex justify-between items-center">
        <li v-for="(item, index) in menuItems" :key="index" @click="scrollIntoView(item.element)" class="cursor-pointer">
            {{ item.label }}
        </li>
    </ul>

    <MobileMenu v-if="!hide" :items="menuItems" />
</template>