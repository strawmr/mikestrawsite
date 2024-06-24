<template>
    <div>
      <Navigation />
      <div class="flex justify-center py-5 px-4 md:px-3">
        <div class="p-6 w-full max-w-4xl border-2 border-black">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import Navigation from '~/components/Navigation.vue';
</script>
  