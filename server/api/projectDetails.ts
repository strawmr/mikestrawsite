// server/api/ProjectDetails.ts
export default defineEventHandler((event) => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'Project One', details: 'Details about Project One', slug: 'project-one' },
    { id: 2, name: 'Project Two', details: 'Details about Project Two', slug: 'project-two' },
    { id: 3, name: 'Project Three', details: 'Details about Project Three', slug: 'project-three' },
  ];

  // Extract project slug from query params
  const query = getQuery(event);
  const projectSlug = query.slug as string;

  // Find project by slug
  const project = projects.find((p) => p.slug === projectSlug);

  // Return project details
  return project ? project : { error: 'Project not found' };
});
