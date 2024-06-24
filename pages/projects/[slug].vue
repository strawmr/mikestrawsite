<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchProjectDetails = async () => {
  try {
    let response;
    if (route.params.slug) {
      response = await fetch(`/api/projects?slug=${route.params.slug}`);
    } else if (route.params.id) {
      response = await fetch(`/api/projects?id=${route.params.id}`);
    }
    
    const data = await response.json();

    if (data.error) {
      error.value = data.error;
    } else {
      project.value = data;
    }
  } catch (err) {
    error.value = 'Failed to fetch project details';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProjectDetails);
</script>

<template>
  <div v-if="loading">
    <p>Loading project details...</p>
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <h1>{{ project.name }}</h1>
    <p>{{ project.details }}</p>
  </div>
</template>
