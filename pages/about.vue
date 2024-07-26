<script setup>

useHead({
    title:'About',
    script:['main.js'],
    meta:[
        {name: 'description',
         content: 'This site is for Mike Straw',
        }
    ]
});
</script>
<template>
  <div class="flex flex-col md:flex-row items-center text-center md:text-left p-4">
    <div class="flex flex-col items-center md:items-start gap-4">
      <h1 class="text-4xl font-ag">Who Am I?</h1>
      <p class="">My name is Mike Straw, from Buffalo, NY. I've been a front-end developer for nearly 10 years, working on a range of projects big and small.</p>
      <p class="">I also happen to be a veteran journalist who's covered sports and gaming for 15 years. If that tickles your fancy, you can find all of my writing work at <a class="" href="https://mikestrawmedia.com" target="_blank">MikeStrawMedia.com.</a></p>
      <p class=""></p>
      

    </div>
  </div>
</template>