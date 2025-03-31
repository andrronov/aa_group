<script setup>
defineProps({
  black: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
    <img :src="black ? '/logo_black.svg' : '/logo.svg'" alt="logo" class="w-36 pointer-events-none">
</template>