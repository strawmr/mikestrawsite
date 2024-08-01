<template>

<div class="flex flex-col md:flex-row items-center text-center md:text-left p-4">
    <div class="flex flex-col items-center md:items-start gap-4">
      <h1 class="text-4xl font-ag">Gaming Layoffs Tracker</h1>
    <p>The gaming industry is in its most unstable era with closures and layoffs every day. This is a project to track all of the latest layoffs in the industry and keep track of the number of employees affected.</p>
      
    <a href="https://gaminglayoffs.com"  target="_blank">
      <button
          class="bg-sky-300 hover:bg-sky-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      
          <span>Visit GamingLayoffs.com</span>
        </button>

    </a>

    </div>
  </div>
</template>

<script setup>

useHead({
    title:'Video Game Layoffs | Michael Straw',
    script:['main.js'],
    meta:[
        {name: 'description',
         content: 'The video game layoff tracker created by Mike Straw',
        }
    ]
});
</script>

<style>

</style>