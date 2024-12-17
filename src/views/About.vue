<template>
  <div class="career-page">
    <!-- 1. Cabeçalho -->
    <section class="career-header">
      <div class="header-content">
        <h1>Venha Crescer Conosco</h1>
        <p>
          Somos uma equipe apaixonada por inovação e resultados. Oferecemos um ambiente
          inspirador para seu crescimento profissional. Descubra como é trabalhar em nossa
          empresa!
        </p>
      </div>
    </section>

    <!-- 2. Por Que Trabalhar Conosco -->
    <section class="why-join-us">
      <h2>Por Que Trabalhar Conosco?</h2>
      <div class="why-grid">
        <div class="why-card">
          <img src="@/assets/images/team-placeholder.jpg" alt="Cultura Inclusiva" />
          <h3>Cultura Inclusiva</h3>
          <p>
            Priorizamos a diversidade e a inclusão em todos os níveis, criando um ambiente onde
            cada voz é valorizada.
          </p>
        </div>
        <div class="why-card">
          <img src="@/assets/images/banner-placeholder.jpg" alt="Crescimento Profissional" />
          <h3>Crescimento Profissional</h3>
          <p>
            Oferecemos oportunidades de aprendizado contínuo, treinamentos e planos de carreira.
          </p>
        </div>
        <div class="why-card">
          <img src="@/assets/images/process-management-placeholder.jpg" alt="Tecnologia de Ponta" />
          <h3>Tecnologia de Ponta</h3>
          <p>
            Trabalhamos com ferramentas modernas e soluções tecnológicas para inovar em cada
            projeto.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Vagas Disponíveis -->
    <section class="job-openings">
      <h2>Vagas Disponíveis</h2>
      <div class="job-list">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="job-card"
        >
          <h3>{{ job.title }}</h3>
          <p><strong>Local:</strong> {{ job.location }}</p>
          <p><strong>Tipo:</strong> {{ job.type }}</p>
          <p>{{ job.description }}</p>
          <button @click="applyJob(job.title)">Candidatar-se</button>
        </div>
      </div>
    </section>

    <!-- 4. Valores da Empresa -->
    <section class="company-values">
      <h2>Nossos Valores</h2>
      <div class="values-grid">
        <div class="value-card">
          <h3>Integridade</h3>
          <p>Trabalhamos com ética, transparência e compromisso em tudo o que fazemos.</p>
        </div>
        <div class="value-card">
          <h3>Inovação</h3>
          <p>Valorizamos a criatividade e incentivamos novas ideias para criar soluções únicas.</p>
        </div>
        <div class="value-card">
          <h3>Colaboração</h3>
          <p>Nosso sucesso vem do trabalho em equipe e da união de diferentes talentos.</p>
        </div>
      </div>
    </section>

    <!-- 5. Chamada para Ação -->
    <section class="cta-section">
      <h2>Pronto Para Fazer Parte do Nosso Time?</h2>
      <p>
        Estamos sempre em busca de novos talentos. Envie seu currículo e venha crescer conosco.
      </p>
      <button class="cta-button" @click="redirectToApply">
        Enviar Currículo
      </button>
    </section>
  </div>
</template>

<script>
// eslint-disable
export default {
  name: "CareerPage",
  data() {
    return {
      jobs: [
        {
          title: "Desenvolvedor Frontend",
          location: "Remoto",
          type: "Tempo Integral",
          description: "Responsável por criar interfaces modernas e responsivas.",
        },
        {
          title: "Designer UX/UI",
          location: "São Paulo, SP",
          type: "Presencial",
          description: "Criação de experiências visuais e funcionais incríveis.",
        },
        {
          title: "Gerente de Projetos",
          location: "Híbrido",
          type: "Tempo Integral",
          description: "Gerenciamento de projetos complexos com foco em resultados.",
        },
        {
          title: "Analista de Dados",
          location: "Remoto",
          type: "Tempo Integral",
          description: "Análise e interpretação de dados para tomada de decisões estratégicas.",
        },
      ],
    };
  },
  methods: {
    applyJob(jobTitle) {
      alert(`Você está se candidatando à vaga: ${jobTitle}`);
    },
    redirectToApply() {
      window.open("https://www.placeholder-jobs.com", "_blank");
    },
  },
};
</script>

<style scoped>
/* Global */
.career-page {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Cabeçalho */
.career-header {
  background: url("../assets/images/work-environment-placeholder.jpg") center/cover no-repeat;
  color: #fff;
  text-align: center;
  padding: 310px;
}

.career-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.career-header p {
  font-size: 1.3rem;
}

/* Por Que Trabalhar Conosco */
.why-join-us {
  text-align: center;
  padding: 50px 20px;
}

.why-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.why-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.why-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.why-card h3 {
  margin: 15px 0 10px;
  color: #00274d;
}

.why-card p {
  padding: 0 15px 15px;
  font-size: 0.95rem;
}

/* Vagas Disponíveis */
.job-openings {
  padding: 50px 20px;
  text-align: center;
}

.job-card {
  border: 1px solid #ddd;
  margin: 15px auto;
  padding: 15px;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.job-card button {
  background: #00274d;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.job-card button:hover {
  background: #00274d;
}

/* Valores da Empresa */
.company-values {
  background-color: #f9f9f9;
  padding: 50px 20px;
  text-align: center;
}

.values-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.value-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.value-card h3 {
  color: #00274d;
}

/* Chamada para Ação */
.cta-section {
  padding: 40px 20px;
  text-align: center;
}

.cta-button {
  background: #00274d;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
}

.cta-button:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .why-grid,
  .values-grid {
    flex-direction: column;
  }

  .career-header h1 {
    font-size: 2.5rem;
  }
}
</style>
