<template>
  <div class="insights">
    <!-- Hero Section -->
    <section class="hero" style="margin-top: 100px;">
      <h1 style="text-align: center;color: #042236;">Insights Estratégicos</h1>
      <p>
        Nosso blog é o espaço onde compartilhamos tendências de mercado, análises de casos, boas práticas e insights estratégicos. Aqui, você encontra ideias que ajudam a tomar decisões informadas e a navegar com confiança pelas complexidades do mundo dos negócios.
      </p>
    </section>

    <!-- Filter Section -->
    <section class="filters">
      <div class="filter-buttons">
        <button>Insights e Tendências</button>
        <button>Casos de Sucesso</button>
        <button>Estratégia e Processos</button>
        <button>Economia e Mercados</button>
      </div>
    </section>

    <!-- Main Articles Section -->
    <section class="main-articles">
      <div class="featured-article">
        <img src="@/assets/images/work-environment-placeholder.jpg" alt="Artigo em destaque">
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
        <div class="row mb-4 border-bottom pb-3"  v-for="(prinicipal, index) in prinicipal" :key="index">
        <div class="col-4">
            <img :src="prinicipal.image" class="img-fluid" alt="Notícia 2">
        </div>
        <div class="col-8">
            <h5 class="mb-1">{{ prinicipal.title }}</h5>
            <small class="text-muted">{{ prinicipal.date }}</small>
        </div>
    </div>

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

      <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="mb-0">
            Quer saber mais sobre tópicos específicos? Escolha os boletins informativos
        abaixo e acompanhe as novas tendências.
          </p>
        </div>
        <div class="col-md-6">
          <form class="d-flex align-items-center">
            <input type="email" class="form-control me-2" placeholder="Seu Endereço de Email" aria-label="Email">
            <button type="submit" class="btn btn-subscribe">Newsletter</button>
          </form>
          <div class="form-check mt-2">
            <input class="form-check-input" type="checkbox" value="" id="privacyPolicy">
            <label class="form-check-label privacy-policy" for="privacyPolicy">
             
            </label>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InsightsPage",
  data() {
    return {
      images: {
        featured: "@/assets/images/featured-article.jpg",
        placeholder: "/src/assets/images/article-placeholder.jpg",
      },
      articles: [
        {
          title: "Melhorando a produtividade nas operações industriais",
          description: "Dicas e práticas para transformar operações com impacto positivo.",
          image: require('@/assets/images/pexels-tamillesesposito-25568827.jpg'),
          date: "12 de dezembro de 2024",
        },
        {
          title: "Tendências em sustentabilidade empresarial",
          description: "Como as empresas estão liderando a mudança em ESG.",
          image: require('@/assets/images/pexels-shkrabaanthony-5816291.jpg'),
          date: "10 de dezembro de 2024",
        },
        {
          title: "A revolução da inteligência artificial no varejo",
          description: "Explorando as oportunidades criadas pela IA no setor.",
          image: require('@/assets/images/pexels-thirdman-5327914.jpg'),
          date: "8 de dezembro de 2024",
        },
        {
          title: "Estratégias de crescimento para startups",
          description: "Acelerando o crescimento com insights estratégicos.",
          image: require('@/assets/images/team1.jpg'),
          date: "5 de dezembro de 2024",
        },
        {
          title: "Transformação digital em instituições financeiras",
          description: "Os desafios e oportunidades da modernização tecnológica.",
          image: require('@/assets/images/processo-candidatura-placeholder.jpg'),
          date: "3 de dezembro de 2024",
        },
        {
          title: "A importância da cultura organizacional",
          description: "Criando ambientes de trabalho saudáveis e produtivos.",
          image: require('@/assets/images/costa-rica-7479062_1280.jpg'),
          date: "1 de dezembro de 2024",
        },

        {
          title: "A importância da cultura organizacional2",
          description: "Criando ambientes de trabalho saudáveis e produtivos.",
          image: require('@/assets/images/pexels-mikhail-nilov-7679562.jpg'),
          date: "1 de dezembro de 2024",
        },

        {
          title: "A importância da cultura organizacional3",
          description: "Criando ambientes de trabalho saudáveis e produtivos.",
          image: require('@/assets/images/vietnam-9069634_640.png'),
          date: "1 de dezembro de 2024",
        },

        {
          title: "A importância da cultura organizacional4",
          description: "Criando ambientes de trabalho saudáveis e produtivos.",
          image: require('@/assets/images/webinar-placeholder.jpg'),
          date: "1 de dezembro de 2024",
        },
      ],
      prinicipal:[
        {
          title: "5 Tendências para Transformação Digital em Empresas",
          description: "Descrição 1",
          image: require('@/assets/images/webinar-placeholder.jpg'),
          date: "1 de dezembro de 2024",
        },

        {
          title: "Como Gerenciar Mudanças Organizacionais com Sucesso",
          description: "Descrição 1",
          image: require('@/assets/images/processo-candidatura-placeholder.jpg'),
          date: "1 de dezembro de 2024",
        },
        {
          title: "Estratégias para Otimizar Processos e Reduzir Custos",
          description: "Descrição 1",
          image: require('@/assets/images/pexels-tamillesesposito-25568827.jpg'),
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
  text-align: justify;
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

  /* Adicionando transição */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.filter-buttons button:hover,
.filter-buttons button:active {
  background-color: #042236;
  color: #fff;
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
}

.recommended h3 {
  font-size: 1.2em;
  color: #042236;
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
  color: #042236;
}

.article p {
  font-size: 0.9em;
  color: #333;
  text-align: justify;
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
  color: #042236;
}

.newsletter p {
  color: #555;
}

.newsletter button {
  background-color: #042236;
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
