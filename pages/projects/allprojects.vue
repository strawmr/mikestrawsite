<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

useHead({
  title: 'Projects',
  script: ['main.js'],
  meta: [
    {
      name: 'description',
      content: 'This site is for Mike Straw',
    },
  ],
});

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProjects = async () => {
  try {
    const response = await fetch('/api/projects');
    projects.value = await response.json();
  } catch (err) {
    error.value = 'Failed to fetch projects';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProjects);

const router = useRouter();

const goToProject = (slug) => {
  router.push(`/projects/${slug}`);
};
</script>

<template>
  <div class="flex flex-col md:flex-row items-center text-center md:text-left p-4">
    <div class="flex flex-col items-center md:items-start gap-4">
      <h1 class="text-4xl font-ag">My Projects</h1>
      <p class="">Throughout my career, I've worked on a number of projects. Whether it's on my own or while I was
        working for a company, I've been able to build some really fun things that I think showcase my abilities.
      </p>
      <p>Here are a few of my favorite ones over the last couple of years:</p>

      <div class="contrainer mx-auto">
        <div class="grid m-auto  md:grid-cols-3 grid-cols-1 gap-8 text-center">
        <div class="text-center">
          <button
            class="bg-sky-300 w-full hover:bg-sky-500 text-gray-800 font-bold py-2 px-4 rounded">
            <NuxtLink class="text-xl " to="/projects/gaminglayoffs">Video Game Layoff Tracker</NuxtLink>
          </button>
        </div>

        <div class="text-center">
          <button
            class="bg-sky-300 w-full hover:bg-sky-500 text-gray-800 font-bold py-2 px-4 rounded items-center">
            <NuxtLink class="text-xl " to="/projects/gaminglayoffs">Wellconnected</NuxtLink>
          </button>
        </div>
        <div>
          <button
            class="bg-sky-300 w-full hover:bg-sky-500 text-gray-800 font-bold py-2 px-4 rounded items-center">
            <NuxtLink class="text-xl " to="/projects/gaminglayoffs">Impact HQ</NuxtLink>
          </button>
        </div>
      </div>
      </div>

      <!-- <div>   
       <div v-if="loading">
          <p>Loading projects...</p>
        </div>
        <div v-else-if="error">
          <p>{{ error }}</p>
        </div>
        <ul v-else>
          <li v-for="project in projects" :key="project.id">
            <a @click.prevent="goToProject(project.slug)" href="#">{{ project.name }}</a>
          </li>
        </ul> 
      </div> -->

    </div>
  </div>
  <br />

</template>
