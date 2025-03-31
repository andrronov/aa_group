<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import MainButton from "./MainButton.vue";
import { scrollIntoView } from "../composables/useScroll";

defineProps({
  items: {
    type: Array
  }
})
</script>

<template>
  <div class="block sm:hidden text-right">
    <Menu as="div" class="relative inline-block text-left">
        <MenuButton
          class="inline-flex w-full justify-center rounded-md p-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <img src="/icons/burger-menu.svg" class="text-white" alt="">
        </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 z-100 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-for="item in items" :key="item" v-slot="{ active }">
              <button
                @click="scrollIntoView(item.element)"
                :class="[
                  active ? 'bg-primary text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                
                {{ item.label }}
              </button>
            </MenuItem>
            <MainButton class="w-full" @click="scrollIntoView('application')">
              Заказать услугу
            </MainButton>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>