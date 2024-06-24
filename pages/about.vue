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

    <h1>About Michael Straw</h1>
    <p>Hi! I'm a developer.</p>
    <NuxtLink to="/">Go Home</NuxtLink>

</template>