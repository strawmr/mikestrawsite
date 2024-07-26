// server/api/AllProjects.ts
export default defineEventHandler(() => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'Gaming Layoffs Tracker', description: 'The gaming industry is in it\'s most unstable era with closures and layoffs every day. This is a project to track all of the latest layoffs in the industry and keep track of the number of employees affected.', details: 'Details about Project One', slug: 'gaming-layoffs' },
    { id: 2, name: 'WellConnected.co', description: `While working for RPRT/Wellconnected, I was responsible for developing the company's website. The site is built using Vue.JS & Vuetify on the front end and Strapi CMS for the backend.`, details: 'Details about Project Two', slug: 'wellconnected' },
    { id: 3, name: 'Sports Betting Calculator', description: 'The gaming industry is in it\'s most unstable era with closures and layoffs every day. This is a project to track all of the latest layoffs in the industry and keep track of the number of employees affected.', details: 'Details about Project Three', slug: 'sports-betting' },
  ];

  // Return all projects
  return projects;
});
