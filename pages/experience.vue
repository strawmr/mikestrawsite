<script setup>

useHead({
  title: 'Experience',
  script: ['main.js'],
  meta: [
    {
      name: 'description',
      content: 'This site is for Mike Straw',
    }
  ]
});
</script>
<template>

  <div class="flex flex-col md:flex-row items-center text-center md:text-left p-4">
    <div class="flex flex-col items-center md:items-start gap-4">
      <h1 class="text-4xl font-ag">Where I've Been</h1>
      <p class="">Throughout my time as a developer, I've worked for a number of companies. From larger hospitals to
        small start-ups, I'm eager to tackle any challenge that comes up.</p>
      <p class="">You can see a rundown of where I've been and what I've done below.</p>
      <a href="/MikeStrawResume2024.pdf" download>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>

      </a>



    </div>
  </div>
</template>