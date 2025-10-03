<template>
  <section class="relative overflow-hidden h-screen flex items-center">
    <div class="container">
      <div
          class="p-10 xl:p-12 w-full md:w-4/5 lg:w-1/2 mx-auto rounded-lg relative z-10 flex flex-col gap-4 items-center justify-center h-full bg-gray-100/80"
      >
        <h2>
          {{ title }}
        </h2>
        <p
            v-if="description"
            class="text-xl leading-none text-left ld:text-center"
            v-html="description"
        >
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
