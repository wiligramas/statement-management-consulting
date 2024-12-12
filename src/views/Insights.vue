<template>
  <div class="insights">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Percepções</h1>
      <p>
        Publicações, análises de especialistas e perspectivas inovadoras para líderes que
        buscam um crescimento constante e sustentável.
      </p>
    </section>

    <!-- Filter Section -->
    <section class="filters">
      <div class="filter-buttons">
        <button>Indústrias</button>
        <button>Serviços</button>
        <button>Tópicos em destaque</button>
        <button>Tipos</button>
      </div>
    </section>

    <!-- Main Articles Section -->
    <section class="main-articles">
      <div class="featured-article">
        <img :src="images.featured" alt="Artigo em destaque">
        <div class="content">
          <span class="category">Estratégia e análise</span>
          <h2>Pontos de inflexão: quando apostar em novas tecnologias</h2>
          <p>
            Ferramentas preditivas podem ajudar as empresas a avaliar quando novas
            tecnologias devem ser adotadas.
          </p>
          <span class="date">Criado em: 11 de outubro de 2024</span>
        </div>
      </div>
      <aside class="recommended">
        <h3>Recomendado</h3>
        <ul>
          <li>O futuro do varejo: Modelos vencedores para uma nova era</li>
          <li>Transformação digital: Um marco no crescimento empresarial</li>
          <li>Administração de crises e recuperação em tempos de incerteza</li>
          <li>Integração de processos: O sistema único como vantagem competitiva</li>
          <li>ESG na prática: Financiar uma transição para o futuro</li>
        </ul>
      </aside>
    </section>

    <!-- Articles Grid Section -->
    <section class="articles-grid">
      <div class="article" v-for="(article, index) in articles" :key="index">
        <img :src="article.image" :alt="`Artigo ${index + 1}`">
        <h4>{{ article.title }}</h4>
        <p>{{ article.description }}</p>
        <span class="date">{{ article.date }}</span>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <h2>Insights em Foco</h2>
      <p>
        Quer saber mais sobre tópicos específicos? Escolha os boletins informativos
        abaixo e acompanhe as novas tendências.
      </p>
      <button>Escolher Meu Newsletter</button>
    </section>

    <!-- Load More Section -->
    <section class="load-more">
      <button>Carregar Mais</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "InsightsPage",
  data() {
    return {
      images: {
        featured: "/images/featured-article.jpg",
        placeholder: "/images/article-placeholder.jpg",
      },
      articles: [
        {
          title: "Melhorando a produtividade nas operações industriais",
          description: "Dicas e práticas para transformar operações com impacto positivo.",
          image: "/images/article-1.jpg",
          date: "12 de dezembro de 2024",
        },
        {
          title: "Tendências em sustentabilidade empresarial",
          description: "Como as empresas estão liderando a mudança em ESG.",
          image: "/images/article-2.jpg",
          date: "10 de dezembro de 2024",
        },
        {
          title: "A revolução da inteligência artificial no varejo",
          description: "Explorando as oportunidades criadas pela IA no setor.",
          image: "/images/article-3.jpg",
          date: "8 de dezembro de 2024",
        },
        {
          title: "Estratégias de crescimento para startups",
          description: "Acelerando o crescimento com insights estratégicos.",
          image: "/images/article-4.jpg",
          date: "5 de dezembro de 2024",
        },
        {
          title: "Transformação digital em instituições financeiras",
          description: "Os desafios e oportunidades da modernização tecnológica.",
          image: "/images/article-5.jpg",
          date: "3 de dezembro de 2024",
        },
        {
          title: "A importância da cultura organizacional",
          description: "Criando ambientes de trabalho saudáveis e produtivos.",
          image: "/images/article-6.jpg",
          date: "1 de dezembro de 2024",
        },
      ],
    };
  },
};
</script>

<style scoped>
/*****************************/
/* Layout Geral */
/*****************************/
.insights {
  font-family: Arial, sans-serif;
  color: #333;
}

/*****************************/
/* Hero Section */
/*****************************/
.hero {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
}

.hero h1 {
  font-size: 2em;
  color: #b11116;
}

.hero p {
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

/*****************************/
/* Filters Section */
/*****************************/
.filters {
  text-align: center;
  margin: 20px 0;
}

.filter-buttons button {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

/*****************************/
/* Main Articles Section */
/*****************************/
.main-articles {
  display: flex;
  gap: 20px;
  margin: 20px;
}

.featured-article {
  flex: 3;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
}

.featured-article img {
  width: 100%;
  height: auto;
}

.featured-article .content {
  padding: 10px;
}

.featured-article .category {
  font-size: 0.8em;
  color: #888;
}

.featured-article h2 {
  font-size: 1.5em;
  color: #b11116;
}

.featured-article p {
  color: #555;
}

.featured-article .date {
  font-size: 0.8em;
  color: #aaa;
}

.recommended {
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.recommended h3 {
  font-size: 1.2em;
  color: #b11116;
}

.recommended ul {
  list-style: none;
  padding: 0;
}

.recommended li {
  margin: 10px 0;
  font-size: 0.9em;
  color: #555;
}

/*****************************/
/* Articles Grid */
/*****************************/
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px;
}

.article {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
}

.article img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article h4 {
  font-size: 1.2em;
  color: #b11116;
}

.article p {
  font-size: 0.9em;
  color: #555;
}

.article .date {
  font-size: 0.8em;
  color: #aaa;
}

/*****************************/
/* Newsletter Section */
/*****************************/
.newsletter {
  text-align: center;
  padding: 40px;
  background-color: #f4f4f4;
}

.newsletter h2 {
  font-size: 1.8em;
  color: #b11116;
}

.newsletter p {
  color: #555;
}

.newsletter button {
  background-color: #b11116;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/*****************************/
/* Load More Section */
/*****************************/
.load-more {
  text-align: center;
  margin: 20px 0;
}

.load-more button {
  background-color: #b11116;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.load-more button:hover {
  background-color: #900d13;
}
</style>
