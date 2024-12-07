<template>
  <div class="home">
    <!-- Seção Hero -->
    <section class="hero"> 
      <h3>Orientando Empresas Rumo ao Sucesso<br> Estratégico</h3>
      <img src="@/assets/images/Banner.jpg" alt="Descrição da imagem" class="hero-image" />
    </section>

    <!-- Header Azul Escuro -->
    <section class="azul-header"></section>

    <!-- Sessão Transformando desafios -->
    <section class="highlight">
      <div class="highlight-content">
        <div class="text-section">
          <h3>Transformando desafios em oportunidades estratégicas</h3>
          <p>
            A Statement Management Consulting é a parceira ideal para empresas e projetos que buscam superar desafios estratégicos e processuais. Nosso time altamente capacitado oferece soluções personalizadas que conectam o nível operacional ao estratégico, promovendo resultados sustentáveis e impacto real.
            Explore como podemos ajudar a transformar sua visão em realidade.
          </p>
          <button class="cta-button">Cadastre-se no evento</button>
        </div>
        <div class="image-section">
          <img src="@/assets/images/highlight-image.jpg" alt="Destaque IA" />
        </div>
      </div>
    </section>

    <!-- Sessão Call to Action -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Descubra nossos serviços</h2>
        <p>Entre em contato conosco agora mesmo!</p>
        <button class="cta-contact-button">Fale Conosco</button>
      </div>
    </section>

    <!-- Sessão Novo e Notável -->
    <section class="new-and-notable">
      <div class="left-text">
        <h2>NOTICIAS</h2>
        <h3>DESTAQUES DA SEMANA</h3>
      </div>
      <div class="carousel">
        <div class="carousel-item" v-for="n in 4" :key="n">
          <div class="card">
            <h4>Título do Artigo {{ n }}</h4>
            <p>Descrição breve do artigo ou relatório relacionado</p>
          </div>
        </div>
      </div>
      <button class="info-button">ENCONTRE MAIS INFORMAÇÕES</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Estilos Gerais */
.home {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.hero {
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.hero h3 {
  font-size: 2.5em;
  color: #00274d;
}

.hero-image {
  width: 90%;
  max-width: 1600px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Header Azul Escuro */
.azul-header {
  text-align: center;
  background-color: #f9f9f9;
  padding: 1rem 2rem;
  color: white;
}

/* Sessão Vantagem da IA */
.highlight {
  background-color: #f9f9f9;
  padding: 40px 0;
}

.highlight-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.text-section,
.image-section {
  width: 50%;
}

.text-section h3 {
  color: #333;
  font-size: 1.5em;
}

.text-section p {
  color: #555;
  line-height: 1.8;
  font-size: 1em;
}

.cta-button {
  padding: 10px 20px;
  color: #fff;
  background-color: #006400;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

.cta-button:hover {
  background-color: #004d00;
}

.image-section img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Sessão Call to Action */
.cta-section {
  background-color: #f5f5f5;
  color: #00274d;
  text-align: center;
  padding: 40px 20px;
}

.cta-section h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.cta-section p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.cta-contact-button {
  padding: 10px 25px;
  font-size: 1em;
  color: #fff;
  background-color: #006400;
  border: none;
  cursor: pointer;
}

.cta-contact-button:hover {
  background-color: #004d00;
}

/* Sessão Novo e Notável */
.new-and-notable {
  background-color: #eaeaea;
  padding: 40px 20px;
}

.left-text {
  text-align: left;
  margin-bottom: 20px;
}

.left-text h2 {
  color: #00274d;
}

.left-text h3 {
  color: #555;
}

.carousel {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.carousel-item {
  flex: 0 0 30%;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.info-button {
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #006400;
  border: none;
  cursor: pointer;
}

.info-button:hover {
  background-color: #004d00;
}
</style>
