<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderBar.vue";
import Footer from "@/components/FooterBar.vue";

export default {
  components: {
    Header,
    Footer,  
  },
};
</script>

<style>
/* Aqui você pode adicionar estilos globais */
</style>

