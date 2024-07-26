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
      <p class=""> Throughout my career, I've worked on a number of fun projects. Here is some of the work I've done
        both as side projects and as work for my employeers.
      </p>

      <div>
        <NuxtLink to="/projects/gaminglayoffs">Gaming Layoff Tracker</NuxtLink>

        <!-- <div v-if="loading">
          <p>Loading projects...</p>
        </div>
        <div v-else-if="error">
          <p>{{ error }}</p>
        </div>
        <ul v-else>
          <li v-for="project in projects" :key="project.id">
            <a @click.prevent="goToProject(project.slug)" href="#">{{ project.name }}</a>
          </li>
        </ul> -->
        
      </div>

    </div>
  </div>
  <br />

</template>
