<template>
  <section class="relative overflow-hidden h-screen flex items-center">
    <div class="container">
      <div
          class="p-10 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto rounded-lg relative z-10 flex flex-col items-center justify-center h-full text-center bg-gray-100/70"
      >
        <h2 class="text-[32px] leading-[1.2] tracking-[-0.1px] text-blue-900/90 max-w-[890px] mx-auto mb-4 md:text-[48px] lg:text-6xl font-serif">
          {{ title }}
        </h2>
        <p class="text-xl leading-none text-blue-900" v-html="description">
        </p>
      </div>
    </div>
    <div class="absolute top-0 left-0 size-full">
      <BcmsImage :media="image" class="size-full object-cover"/>
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
      required: false,
    },
    image: {
      type: Object as PropType<PropMediaDataParsed>,
      required: false,
    },
  });
</script>
