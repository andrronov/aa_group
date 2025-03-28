<template>
  <div class="overflow-hidden bg-white py-12 sm:py-24">
    <div class="mx-auto container px-6 lg:px-8">
      <div
        class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="">
            <h2 class="text-base font-semibold leading-7 text-primary">
              мы создаём идеальное пространство для жизни и работы!
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              AA Group
            </p>
            <dl
              class="mt-10 space-y-8 text-base leading-7 text-gray-600"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-dev-300"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
            <p class="mt-6 text-lg leading-8 text-primary">
              Наш приоритет – превзойти ваши ожидания и создать интерьер мечты!
            </p>
          </div>
        </div>
        <img
          src="../public/images/about.png"
          alt="Product screenshot"
          class="pointer-events-none h-full object-cover bg-gray-500 rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  CubeIcon,
  FolderIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "AA Group - это",
    description: "профессионалы в сфере ремонта и отделки помещений.",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Сотни довольных клиентов",
    description:
      "уже доверили нам ремонт своих квартир, офисов и домов. Мы превращаем идеи в стильные и функциональные интерьеры.",
    icon: CubeIcon,
  },
  {
    name: "Гарантируем",
    description:
      "высокое качество работ, соблюдение сроков и прозрачные условия сотрудничества.",
    icon: CheckCircleIcon,
  },
  {
    name: "Наши клиенты",
    description:
      "– те, кто ценит комфорт, стиль и надежность. Мы работаем как с частными заказчиками, так и с бизнесом.",
    icon: FolderIcon,
  },
];
</script>
