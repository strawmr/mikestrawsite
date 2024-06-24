<template>
  <nav class="bg-white p-4 pt-6">
    <ul class="flex justify-center space-x-6 md:text-xl font-bold text-black">
      <li><NuxtLink to="/" class="text-black hover:text-blue-500">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="text-black hover:text-blue-500">Bio</NuxtLink></li>
      <li><NuxtLink to="/experience" class="text-black hover:text-blue-500">Experience</NuxtLink></li>
      <li><NuxtLink to="/projects/allprojects.vue" class="text-black hover:text-blue-500">My Projects</NuxtLink></li>      
    </ul>
  </nav>
</template>

<script setup>
// No script needed for this simple component
</script>
