<script setup>
defineProps({
  white: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
  empty: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="transition duration-300 ease-in-out cursor-pointer"
    :class="[
      empty ? 'border-primary text-primary bg-transparent hover:bg-primary hover:text-white border-2' : '',
      white
        ? 'bg-white text-primary hover:bg-blue-100'
        : 'bg-primary text-white hover:bg-blue-600',
      big ? 'px-6 py-3 text-xl' : 'px-4 py-2 text-base',
    ]"
  >
    <slot></slot>
  </button>
</template>
