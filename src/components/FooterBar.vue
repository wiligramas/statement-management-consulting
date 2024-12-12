<template>
  <footer class="footer">
    <div class="footer-content">
      <h2>Pronto para Transformar Seu Negócio?</h2>
      <p>Entre em contato conosco para saber como podemos ajudar a alcançar seus objetivos e superar desafios.</p>
      <button class="cta-button">Fale Conosco Agora</button>

      <div class="footer-links">
        <a href="#about-us" class="footer-link">Quem Somos</a>
        <a href="#services" class="footer-link">Nossos Serviços</a>
        <a href="#testimonials" class="footer-link">Depoimentos</a>
        <a href="#" class="footer-link">Blog</a>
      </div>

      <div class="social-media">
        <a href="https://facebook.com" class="social-icon" aria-label="Facebook">
          <img src="@/assets/images/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" class="social-icon" aria-label="LinkedIn">
          <img src="@/assets/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="mailto:contact@company.com" class="social-icon" aria-label="E-mail">
          <img src="@/assets/images/instagram-icon.png" alt="E-mail" />
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Statement Management Consulting. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
/* Rodapé */
.footer {
  text-align: center;
  padding: 60px 20px;
  background-color: #00274d;
  color: white;
  font-family: 'Roboto', sans-serif;
  position: relative;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.footer h2 {
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.footer p {
  font-size: 1.2em;
  margin-bottom: 30px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.cta-button {
  background-color: #0056b3;
  color: white;
  padding: 15px 40px;
  font-size: 1.1em;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #003f88;
  transform: scale(1.05);
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 600;
  font-size: 1em;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.footer-link:hover {
  color: #00aaff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.social-icon img {
  width: 20px;
  height: 20px;
}

.social-icon:hover {
  transform: scale(1.2);
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-bottom {
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
}
</style>
