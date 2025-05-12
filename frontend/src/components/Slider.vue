<script setup lang="ts">
import { useAttrs, ref, onMounted } from "vue";
import EmblaCarousel from "embla-carousel";
import AutoPlay from "embla-carousel-autoplay";

defineProps<{
  images: string[];
}>();

const typeSlider = ref(null);
const attrs = useAttrs()

onMounted(() => {
  if (typeSlider.value) {
    EmblaCarousel(typeSlider.value, { loop: true }, [
      AutoPlay({ delay: 3500, stopOnInteraction: false }),
    ]);
  }
});
</script>

<template>
  <div class="embla" ref="typeSlider">
    <div class="embla__container">
      <div v-for="image in images" :key="image" class="embla__slide">
        <img :src="image" :v-bind="attrs" :alt="`type-image-${image}`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  height: 100%;
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  min-height: 100%;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
