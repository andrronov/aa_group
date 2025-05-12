<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import AutoPlay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue({ loop: true }, [
  AutoPlay({ delay: 3500, stopOnInteraction: false }),
]);

const heroImages = [
  "/images/hero.jpg",
  "/images/hero-1.jpeg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.webp",
];
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div v-for="image in heroImages" :key="image" class="embla__slide">
        <img :src="image" alt="" />
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
