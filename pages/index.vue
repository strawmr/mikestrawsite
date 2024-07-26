<script setup>

useHead({
  title: 'Home',
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
      <h1 class="text-4xl font-ag">Mike Straw</h1>
      <p class="text-lg">I’m a front-end developer with experience in project management, database management, and
        more. </p>
      <p>My goal is to bring projects to life through development.</p>
      <div class="flex justify-center md:justify-start space-x-4">
        <a href="https://www.twitter.com/mikestrawmedia" target="_blank" class="text-black hover:text-blue-500 text-4xl"><i
            class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/michaelstrawjr/" target="_blank" class="text-black hover:text-blue-500 text-4xl"><i
            class="fab fa-linkedin"></i></a>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="/assets/images/msimage.png" alt="Mike Straw"
        class="w-48 h-48 md:w-80 md:h-80 object-cover rounded-lg border border-gray-300">
    </div>
  </div>
</template>


<style>
/* Import Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>