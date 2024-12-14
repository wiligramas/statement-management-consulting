<template>
  <div class="contact-us">
    <!-- Título Principal -->
    <h1 class="contact-title">Estamos Aqui Para Ajudar</h1>

    <!-- Formulário de Contato -->
    <section class="contact-form">
      <h2>Fale Conosco</h2>
      <form>
        <div class="form-group">
          <label for="name">Nome*</label>
          <input type="text" id="name" placeholder="Digite seu nome" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail*</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" required />
        </div>
        <div class="form-group">
          <label for="subject">Assunto*</label>
          <input type="text" id="subject" placeholder="Digite o assunto" required />
        </div>
        <div class="form-group">
          <label for="message">Mensagem*</label>
          <textarea id="message" placeholder="Digite sua mensagem" required></textarea>
        </div>
        <button type="submit" class="submit-button">Envie sua mensagem</button>
      </form>
    </section>

    <!-- Mapa e Localização -->
    <section class="location">
      <h2>Onde Estamos</h2>
      <p>Visite-nos em nosso escritório para uma consulta.</p>
      <div class="map">
        <!-- Mapa fictício (substituir pela integração real, como Google Maps) -->
        <img src="@/assets/images/map-placeholder.jpg" alt="Mapa de Localização" />
      </div>
    </section>

    <!-- Redes Sociais -->
    <section class="social-media">
      <h2>Conecte-se Conosco</h2>
      <p>Fique por dentro das novidades e tendências seguindo nossas redes sociais:</p>
      <div class="social-links">
        <a href="#" target="_blank" class="social-link">
          <img src="@/assets/images/linkedin-icon.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a href="#" target="_blank" class="social-link">
          <img src="@/assets/images/instagram-icon.png" alt="Instagram" />
          Instagram
        </a>
        <a href="#" target="_blank" class="social-link">
          <img src="@/assets/images/facebook-icon.png" alt="Facebook" />
          Facebook
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* Estilo Geral */
.contact-us {
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  color: #002b5c;
}

/* Título Principal */
.contact-title {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 2.5rem;
}

/* Formulário de Contato */
.contact-form {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  margin-bottom: 2.5rem;
}

.contact-form h2 {
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.3125rem;
}

input,
textarea {
  width: 100%;
  padding: 0.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
  font-size: 1rem;
}

textarea {
  height: 6.25rem;
}

.submit-button {
  background-color: #002b5c;
  color: white;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.625rem;
}

.submit-button:hover {
  background-color: #004080;
}

/* Mapa e Localização */
.location {
  text-align: center;
  margin-bottom: 2.5rem;
}

.location h2 {
  font-size: 1.75rem;
  margin-bottom: 0.625rem;
}

.map img {
  max-width: 100%;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
}

/* Redes Sociais */
.social-media {
  text-align: center;
}

.social-media h2 {
  font-size: 1.75rem;
  margin-bottom: 0.625rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #002b5c;
  font-size: 1.125rem;
}

.social-link img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.625rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .contact-form, .location, .social-media {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-form h2,
  .location h2,
  .social-media h2 {
    font-size: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .label {
    font-size: 0.875rem;
  }
  
  .submit-button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}
</style>
