<template>
  <div class="home">
    <!-- 1.1. Banner Principal -->
    <section class="banner">
      <div class="banner-content">
        <h1>Inovação e Estratégia para o Sucesso do Seu Negócio</h1>
        <p>Transformando desafios em oportunidades estratégicas.</p>
        <button class="cta-button">Veja como podemos ajudar você</button>
      </div>
      <img src="@/assets/images/banner-placeholder.jpg" alt="Banner Principal" class="banner-image" />
    </section>

    <!-- 1.2. Sobre Nós -->
    <section class="about-us">
      <h2 class="section-title">Quem Somos</h2>
      <div class="about-content">
        <div class="text-content">
          <p>
            A <strong>Statement Management Consulting</strong> é reconhecida como uma referência em consultoria de negócios, oferecendo soluções inovadoras e altamente personalizadas para enfrentar desafios estratégicos e operacionais. Nossa abordagem é orientada por análises profundas, estratégias inteligentes e um compromisso inabalável com a excelência.
          </p>
          <p>
            Com uma equipe de especialistas altamente qualificados e vasta experiência em diversos setores, capacitamos empresas a alcançar resultados sustentáveis, impulsionando o crescimento e a competitividade em mercados cada vez mais dinâmicos e desafiadores. Trabalhamos lado a lado com nossos clientes para transformar desafios complexos em oportunidades de sucesso duradouro.
          </p>
        </div>
        <img src="@/assets/images/team-placeholder.jpg" alt="Equipe da Empresa" class="about-image" />
      </div>
    </section>


    <section class="services">
  <h2 class="section-title">O Que Fazemos</h2>
  <div class="services-container">
    <div class="service">
      <img src="@/assets/images/strategy-placeholder.jpg" alt="Estratégia Empresarial" class="service-image" />
      <h3>Estratégia Empresarial</h3>
      <p>
        Criamos estratégias sob medida que ajudam sua empresa a alcançar objetivos ambiciosos, identificando oportunidades e fortalecendo sua posição no mercado. Nossa abordagem é orientada por dados e insights de mercado, garantindo decisões assertivas e sucesso a longo prazo.
      </p>
    </div>
    <div class="service">
      <img src="@/assets/images/digital-transformation-placeholder.jpg" alt="Transformação Digital" class="service-image" />
      <h3>Transformação Digital</h3>
      <p>
        Capacitamos sua organização para prosperar na era digital, implementando tecnologias inovadoras e otimizando processos para aumentar a eficiência, melhorar a experiência do cliente e criar vantagem competitiva.
      </p>
    </div>
    <div class="service">
      <img src="@/assets/images/process-management-placeholder.jpg" alt="Gestão de Processos" class="service-image" />
      <h3>Gestão de Processos</h3>
      <p>
        Reestruturamos e otimizamos processos internos para garantir máxima produtividade e qualidade. Nossos especialistas utilizam práticas modernas de gestão para reduzir custos e aumentar a eficiência operacional.
      </p>
    </div>
    <div class="service">
      <img src="@/assets/images/organizational-development-placeholder.jpg" alt="Desenvolvimento Organizacional" class="service-image" />
      <h3>Desenvolvimento Organizacional</h3>
      <p>
        Fortalecemos a cultura organizacional e capacitamos equipes para impulsionar o crescimento e a inovação. Oferecemos consultoria em liderança, gestão de mudanças e programas de desenvolvimento contínuo.
      </p>
    </div>
  </div>
  <button class="cta-button">Saiba mais sobre nosso portfólio</button>
</section>

  <section class="testimonials">
  <h2 class="section-title">O Que Nossos Clientes Dizem</h2>
  <div class="testimonials-container">
    <div class="testimonial">
      <img src="@/assets/images/avatar-placeholder.jpg" alt="João Silva" class="testimonial-image" />
      <blockquote>
        "A Statement Management Consulting trouxe clareza estratégica para nossa empresa. Graças à sua abordagem inovadora, conseguimos superar desafios complexos e alcançar um crescimento sustentável."
      </blockquote>
      <p class="testimonial-author">- João Silva, CEO de Empresa X</p>
    </div>
    <div class="testimonial">
      <img src="@/assets/images/avatar-placeholder.jpg" alt="Maria Oliveira" class="testimonial-image" />
      <blockquote>
        "A equipe da Statement Management Consulting não apenas compreendeu nossas necessidades, mas também entregou soluções que transformaram a eficiência do nosso negócio. É uma parceria que realmente faz a diferença."
      </blockquote>
      <p class="testimonial-author">- Maria Oliveira, Diretora de Empresa Y</p>
    </div>
  </div>
</section>
</div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Estilo geral */
.home {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* 1.1. Banner Principal */
/* Importar fonte elegante do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400&display=swap');

/* Aplicar a fonte globalmente */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

/* 1.1. Banner Principal */
.banner {
  position: relative;
  text-align: center;
  color: white;
  height: 100vh;
  overflow: hidden;
  font-family: 'Playfair Display', serif; /* Fonte elegante para o banner */
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.banner h1 {
  font-size: 3.5em; /* Aumenta o tamanho da fonte */
  font-weight: 700; /* Estilo negrito */
  margin: 10px 0;
  letter-spacing: 2px; /* Espaçamento elegante entre letras */
  line-height: 1.2; /* Melhora o espaçamento entre linhas */
}

.banner p {
  font-size: 1.5em; /* Aumenta o tamanho da fonte */
  font-weight: 400; /* Estilo regular */
  margin: 10px 0 20px;
  letter-spacing: 1.5px;
}

.cta-button {
  background-color: #0056b3;
  color: white;
  padding: 15px 30px; /* Botão maior */
  font-size: 1.2em; /* Texto do botão maior */
  font-weight: 700;
  text-transform: uppercase; /* Texto em maiúsculas */
  border: none;
  border-radius: 30px; /* Cantos arredondados */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #003d82; /* Alteração de cor no hover */
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
  z-index: 1;
}

/* 1.2. Sobre Nós */
/* Estilo geral da seção */
.about-us {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-family: 'Playfair Display', serif; /* Fonte elegante */
  font-size: 2.5em;
  font-weight: 700;
  color: #00274d;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  max-width: 600px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.8;
  font-size: 1.1em;
}

.text-content p {
  margin-bottom: 20px;
}

.text-content strong {
  color: #0056b3; /* Destaque na marca */
}

.about-image {
  width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Efeito de profundidade */
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05); /* Zoom suave ao passar o mouse */
}

/* Estilo da seção Nossos Serviços */
.services {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  font-weight: 700;
  color: #00274d;
  margin-bottom: 30px;
}

.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.service {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.service h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  color: #0056b3;
  padding: 15px 20px;
}

.service p {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #555;
  padding: 0 20px 20px;
  line-height: 1.6;
}

.cta-button {
  margin-top: 30px;
  background-color: #0056b3;
  color: white;
  padding: 15px 30px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #003f88;
}


/* Estilo da seção Depoimentos */
.testimonials {
  padding: 60px 20px;
  background-color: #f4f7fa;
  text-align: center;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  font-weight: 700;
  color: #00274d;
  margin-bottom: 40px;
}

.testimonials-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.testimonial {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #0056b3;
}

blockquote {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin: 0 0 20px 0;
  position: relative;
}

blockquote:before {
  content: "“";
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  color: #0056b3;
  position: absolute;
  top: -20px;
  left: -10px;
}

blockquote:after {
  content: "”";
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  color: #0056b3;
  position: absolute;
  bottom: -20px;
  right: -10px;
}

.testimonial-author {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: #333;
  text-align: right;
  margin-top: 10px;
}
</style>
