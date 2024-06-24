// server/api/Projects.ts
export default defineEventHandler((event) => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'Project One', details: 'Details about Project One', slug: 'project-one' },
    { id: 2, name: 'Project Two', details: 'Details about Project Two', slug: 'project-two' },
    { id: 3, name: 'Project Three', details: 'Details about Project Three', slug: 'project-three' },
  ];

  // Extract query params
  const query = getQuery(event);

  // Handle fetching project details by ID
  if (query.id !== undefined) {
    const projectId = parseInt(query.id as string);
    const project = projects.find((p) => p.id === projectId);
    return project ? project : { error: 'Project not found' };
  }

  // Handle fetching project details by slug
  if (query.slug !== undefined) {
    const projectSlug = query.slug as string;
    // Case-insensitive slug comparison
    const project = projects.find((p) => p.slug.toLowerCase() === projectSlug.toLowerCase());
    return project ? project : { error: 'Project not found' };
  }

  // Return all projects if no specific id or slug is provided
  return projects;
});
