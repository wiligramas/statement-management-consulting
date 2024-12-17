import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import AboutPage from '@/views/About.vue';
import ContactPage from '@/views/Contact.vue';
import ServicesPage from '@/views/Services.vue';
import InsightsPage from '@/views/Insights.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/portifolho', name: 'portifolho', component: ServicesPage }, 
  { path: '/Insights', name: 'Insights', component: InsightsPage }, 
  { path: '/Contact', name: 'Contact', component: ContactPage }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
