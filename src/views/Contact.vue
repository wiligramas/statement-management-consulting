<template>
  <div class="contact-us">
    <!-- Título Principal -->
    <h1 class="contact-title">Estamos Aqui Para Ajudar</h1>

    <!-- 5.1. Formulário de Contato -->
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

    <!-- 5.2. Mapa e Localização -->
    <section class="location">
      <h2>Onde Estamos</h2>
      <p>Visite-nos em nosso escritório para uma consulta.</p>
      <div class="map">
        <!-- Mapa fictício (substituir pela integração real, como Google Maps) -->
        <img src="@/assets/images/map-placeholder.jpg" alt="Mapa de Localização" />
      </div>
    </section>

    <!-- 5.3. Redes Sociais -->
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
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
}

/* Formulário de Contato */
.contact-form {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.contact-form h2 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

textarea {
  height: 100px;
}

.submit-button {
  background-color: #002b5c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #004080;
}

/* Mapa e Localização */
.location {
  text-align: center;
  margin-bottom: 40px;
}

.location h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.map img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Redes Sociais */
.social-media {
  text-align: center;
}

.social-media h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #002b5c;
  font-size: 18px;
}

.social-link img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style>
