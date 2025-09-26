<template>
  <section class="relative overflow-hidden h-screen flex items-center">
    <div class="container">
      <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center"
      >
        <h2 class="text-[32px] leading-[1.2] tracking-[-0.1px] text-white max-w-[890px] mx-auto mb-4 md:text-[48px] lg:text-6xl">
          {{ title }}
        </h2>
        <p class="text-xl leading-none text-white">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="absolute top-0 left-0 size-full">
      <BcmsImage :media="image" class="size-full object-cover" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type {PropMediaDataParsed} from '@thebcms/types';

  defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Object as PropType<PropMediaDataParsed>,
      required: true,
    },
  });
</script>
