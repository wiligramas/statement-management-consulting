import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import AboutPage from '@/views/About.vue';
import ContactPage from '@/views/Contact.vue';
import ServicesPage from '@/views/Services.vue';
import InsightsPage from '@/views/Insights.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/Services', name: 'About', component: ServicesPage },
  { path: '/Insights', name: 'About', component: InsightsPage },
  { path: '/Contact', name: 'About', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
