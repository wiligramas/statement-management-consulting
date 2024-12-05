<template>
  <div class="insights">
    <section class="hero">
      <h1>Insights e Artigos</h1>
      <p>Explore nossas análises e reflexões sobre o mercado e estratégias empresariais.</p>
    </section>
    <section class="articles">
      <div class="article" v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <router-link :to="`/insights/${article.id}`">Leia mais</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InsightsPage",
  data() {
    return {
      articles: [
        { id: 1, title: "Estratégias de Crescimento", summary: "Descubra como crescer de forma sustentável." },
        { id: 2, title: "Transformação Digital", summary: "A importância da inovação tecnológica." },
      ],
    };
  },
};
</script>

<style scoped>
.insights .hero {
  padding: 50px;
  background-color: #f7f7f7;
  text-align: center;
}
.articles {
  padding: 20px;
}
.article {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>