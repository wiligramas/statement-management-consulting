<template>
  <div class="about">
    <!-- 3.1. Introdução -->
    <section class="introduction">
      <h1>Cresça Conosco</h1>
      <div class="intro-content">
        <h2>Por que Trabalhar na Statement?</h2>
        <p>
          Aqui, você encontrará um ambiente dinâmico, repleto de aprendizado e oportunidades de crescimento.
        </p>
        <img src="@/assets/images/work-environment-placeholder.jpg" alt="Ambiente de trabalho" class="intro-image" />
      </div>
    </section>

    <!-- 3.2. Vagas Abertas -->
    <section class="open-positions">
      <h2>Estamos Contratando</h2>
      <ul class="positions">
        <li>
          <strong>Consultor Estratégico:</strong> 5 anos de experiência.
        </li>
        <li>
          <strong>Analista de Processos:</strong> 2+ anos de experiência.
        </li>
      </ul>
      <button class="cta-button">Envie seu currículo hoje mesmo</button>
    </section>

    <!-- 3.3. Benefícios -->
    <section class="benefits">
      <h2>O Que Oferecemos</h2>
      <ul class="benefits-list">
        <li>Plano de carreira.</li>
        <li>Treinamentos contínuos.</li>
        <li>Ambiente inovador.</li>
      </ul>
      <img src="@/assets/images/benefits-placeholder.jpg" alt="Benefícios da equipe" class="benefits-image" />
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Estilo Geral */
.about {
  font-family: Arial, sans-serif;
}

/* 3.1. Introdução */
.introduction {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.intro-content h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

.intro-content p {
  max-width: 600px;
  color: #555;
}

.intro-image {
  width: 500px;
  height: auto;
  border-radius: 8px;
}

/* 3.2. Vagas Abertas */
.open-positions {
  padding: 40px 20px;
  text-align: center;
  background-color: #ffffff;
}

.positions {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

.positions li {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.cta-button:hover {
  background-color: #003f82;
}

/* 3.3. Benefícios */
.benefits {
  padding: 40px 20px;
  background-color: #f0f0f0;
  text-align: center;
}

.benefits-list {
  list-style-type: disc;
  margin: 20px auto;
  padding: 0;
  max-width: 400px;
  text-align: left;
  color: #555;
}

.benefits-image {
  margin-top: 20px;
  width: 500px;
  height: auto;
  border-radius: 8px;
}
</style>
