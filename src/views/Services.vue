<template>
  <div class="services">
    <!-- Introdução -->
    <section class="introduction">
      <div class="intro-banner">
        <img src="@/assets/images/team2.jpg" alt="Banner" class="banner-image" />
        <div class="banner-text">
          <h1 class="main-title">Transformando Desafios em Oportunidades</h1>
        </div>
      </div>
      <div class="intro-content">
        <div class="text">
          <h2>Nosso Impacto</h2>
          <p>
            Transformamos desafios em oportunidades para nossos clientes ao longo de diferentes setores.
            Nosso compromisso é gerar resultados sólidos e duradouros.
          </p>
          <p>
            Contamos com uma equipe multidisciplinar de especialistas prontos para fornecer soluções
            personalizadas que atendem às necessidades específicas de cada cliente.
          </p>
          <p>
            Nossa abordagem inovadora e focada em resultados garante o sucesso em todos os projetos que realizamos.
          </p>
        </div>
        <img src="@/assets/images/impact-placeholder.jpg" alt="Impacto da consultoria" class="intro-image" />
      </div>
    </section>

    <!-- Projetos de Sucesso -->
    <section class="success-stories">
      <h2 class="section-title">Casos de Sucesso</h2>
      <div class="projects">
        <div class="project">
          <h3>Reestruturação Organizacional</h3>
          <p>
            Uma multinacional aumentou sua eficiência operacional em 35% com nossa consultoria.
          </p>
          <img src="@/assets/images/restructure-placeholder.jpg" alt="Reestruturação Organizacional" />
        </div>
        <div class="project">
          <h3>Transformação Digital</h3>
          <p>
            Implementamos um sistema digital que economizou milhões em custos.
          </p>
          <img src="@/assets/images/digital-transformation-placeholder.jpg" alt="Transformação Digital" />
        </div>
      </div>
    </section>

    <!-- Gráficos e Métricas -->
    <section class="metrics">
      <h2 class="section-title">Nossos Resultados em Números</h2>
      <div class="metrics-container">
        <div class="metric">
          <h3>85%</h3>
          <p>Clientes satisfeitos</p>
        </div>
        <div class="metric">
          <h3>100+</h3>
          <p>Projetos entregues</p>
        </div>
        <div class="metric">
          <h3>25+</h3>
          <p>Anos de experiência</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
};
</script>

<style scoped>
/* Estilo geral */
.services {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
}

/* Título das seções */
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  font-weight: bold;
  color: #00274d;
  text-align: center;
  margin-bottom: 40px;
}

/* Banner da Introdução */
.intro-banner {
  position: relative;
  color: #555;
  height: 60vh;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
}

/* Introdução */
.introduction {
  padding: 0;
  background-color: #f9f9f9;
}

.intro-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.intro-content .text {
  max-width: 600px;
  text-align: left;
}

.intro-content h2 {
  font-size: 2em;
  color: #0056b3;
  margin-bottom: 10px;
}

.intro-content p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
}

.intro-image {
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Projetos de Sucesso */
.success-stories {
  padding: 60px 20px;
  background-color: #f9f9f9;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.project {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.project img {
  width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 8px;
}

/* Gráficos e Métricas */
.metrics {
  padding: 60px 20px;
  background-color: #f4f7fa;
}

.metrics-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.metric {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px 30px;
  max-width: 200px;
}

.metric h3 {
  font-size: 2.5em;
  color: #0056b3;
  margin-bottom: 10px;
}

.metric p {
  font-size: 1.2em;
  color: #555;
}
</style>
