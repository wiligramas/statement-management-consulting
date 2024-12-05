<template>
  <div>
    <Header />
    <Feature />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderBar.vue";
import Footer from "@/components/FooterBar.vue";
import Feature from "@/components/FeatureCard.vue";

export default {
  components: {
    Header,
    Footer,
    Feature,
  },
};
</script>

<style>
/* Aqui você pode adicionar estilos globais */
</style>

