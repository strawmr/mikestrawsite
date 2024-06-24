// server/api/AllProjects.ts
export default defineEventHandler(() => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'Project One', details: 'Details about Project One', slug: 'project-one' },
    { id: 2, name: 'Project Two', details: 'Details about Project Two', slug: 'project-two' },
    { id: 3, name: 'Project Three', details: 'Details about Project Three', slug: 'project-three' },
  ];

  // Return all projects
  return projects;
});
