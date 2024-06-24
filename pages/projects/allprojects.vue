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
  <h1>My Projects</h1>
  <p>
    Throughout my career, I've worked on a number of fun projects. Here are some
    of them to learn about. Simply click on a project for more information.
  </p>
  <div v-if="loading">
    <p>Loading projects...</p>
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <ul v-else>
    <li v-for="project in projects" :key="project.id">
      <!-- Ensure the slug is passed to goToProject method -->
      <a @click.prevent="goToProject(project.slug)" href="#">{{ project.name }}</a>
    </li>
  </ul>
</template>
