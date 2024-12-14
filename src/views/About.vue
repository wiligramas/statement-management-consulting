<template>
  <div class="careers-page">
    <!-- Banner principal -->
    <section class="hero-banner" style="background-image: url('@/assets/images/trabalhar-placeholder.jpg');">
      <div class="banner-content">
        <h1>Carreiras em Angola</h1>
      </div>
    </section>

    <!-- O que procuramos -->
    <section class="what-we-look-for">
      <div class="section-title">O que procuramos</div>
      <p>Procuramos pessoas talentosas com um currículo académico e profissional excelente e que querem fazer a diferença.</p>
    </section>

    <!-- Blocos informativos -->
    <section class="info-blocks">
      <div class="info-block">
        <img src="@/assets/images/trabalhar-placeholder.jpg" alt="Trabalhar na McKinsey Angola" />
        <h3>Trabalhar na McKinsey Angola</h3>
        <p>Vais poder trabalhar com pessoas excepcionais em projetos que marcam a diferença para os nossos clientes, num processo de aprendizagem constante.</p>
      </div>

      <div class="info-block">
        <img src="@/assets/images/opcoes-carreira-placeholder.jpg" alt="Opções de Carreira" />
        <h3>Opções de Carreira</h3>
        <p>Os processos de recrutamento são estandardizados e decorrem ao longo do ano para três posições: Analista, Associado Júnior e Associado.</p>
      </div>

      <div class="info-block">
        <img src="@/assets/images/processo-candidatura-placeholder.jpg" alt="Processo de Candidatura" />
        <h3>Processo de Candidatura</h3>
        <p>Procuramos pessoas excepcionais com potencial para se tornarem os futuros líderes de negócios em Angola, em África e no Mundo.</p>
      </div>
    </section>

    <!-- Perguntas frequentes -->
    <section class="faq">
      <button class="cta-button">Perguntas Frequentes</button>
    </section>

    <!-- Links adicionais -->
    <section class="additional-links">
      <div class="link">
        <h4>Explora oportunidades em Angola</h4>
        <a href="#">Procura oportunidades &rarr;</a>
      </div>

      <div class="link">
        <h4>Já te candidataste a alguma posição?</h4>
        <a href="#">Inscreve-te aqui &rarr;</a>
      </div>

      <div class="link">
        <h4>Prepara-te para a entrevista</h4>
        <a href="#">Sabe mais &rarr;</a>
      </div>
    </section>

    <!-- Mensagem inspiradora -->
    <section class="inspirational-message">
      <div class="message-content">
        <img src="@/assets/images/inspirational-placeholder.jpg" alt="Mensagem inspiradora" />
        <p>
          Todos os dias, ajudamos os nossos clientes a solucionar os maiores problemas, desenvolver capacidades e gerar resultados melhores.
        </p>
      </div>
    </section>

    <!-- Contato -->
    <section class="contact">
      <h3>Entra em contacto com a nossa equipa de recrutamento</h3>
      <button class="cta-button">Contactar</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "CareersPage",
};
</script>

<style scoped>
/* Estilo geral */
.careers-page {
  font-family: Arial, sans-serif;
}

/* Banner principal */
.hero-banner {
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.banner-content h1 {
  font-size: 2.5em;
}

/* O que procuramos */
.what-we-look-for {
  padding: 40px 20px;
  text-align: center;
}

.section-title {
  font-size: 1.8em;
  margin-bottom: 10px;
}

.what-we-look-for p {
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}

/* Blocos informativos */
.info-blocks {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 20px;
}

.info-block {
  max-width: 300px;
  text-align: center;
}

.info-block img {
  width: 100%;
  border-radius: 8px;
}

.info-block h3 {
  margin-top: 15px;
  font-size: 1.2em;
}

.info-block p {
  color: #555;
}

/* Perguntas frequentes */
.faq {
  text-align: center;
  padding: 20px;
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

/* Links adicionais */
.additional-links {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 40px 20px;
}

.link h4 {
  margin-bottom: 10px;
}

.link a {
  color: #0056b3;
  text-decoration: none;
  font-size: 1em;
}

.link a:hover {
  text-decoration: underline;
}

/* Mensagem inspiradora */
.inspirational-message {
  padding: 40px 20px;
  text-align: center;
}

.message-content {
  max-width: 800px;
  margin: 0 auto;
}

.message-content img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.message-content p {
  font-size: 1.2em;
  color: #333;
}

/* Contato */
.contact {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.contact h3 {
  margin-bottom: 20px;
  font-size: 1.5em;
}
</style>