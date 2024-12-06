<template>
  <section class="contact-us">
    <h1 class="contact-title">Contact-Us</h1>
    <div class="contact-info">
      <div class="contact-location">
        <h2>Luanda</h2>
        <p>Avenida Lenine,</p>
        <p>Torres Oceano,</p>
        <p>Torre A, 21ºA</p>
        <p>Ingombota</p>
        <p>Luanda, Angola</p>
        <br />
        <p>
          <strong>Voice:</strong> +244 226 425 400
        </p>
        <p>
          <strong>Fax:</strong> +244 226 425 401
        </p>
      </div>
    </div>
  </section>
   <!-- Formulário de Contato -->
    <div class="contact-form">
      <h3>Type of Inquiry*</h3>
      <form>
        <div class="form-group">
          <label>
            <input type="radio" name="inquiry" value="general" /> Client Services & General Inquiries
          </label>
          <label>
            <input type="radio" name="inquiry" value="media" /> Media Inquiries
          </label>
          <label>
            <input type="radio" name="inquiry" value="recruiting" /> Recruiting Inquiries
          </label>
        </div>
        <div class="form-group">
          <label for="name">Name*</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="subject">Subject*</label>
          <input type="text" id="subject" placeholder="Enter subject" />
        </div>
        <div class="form-group">
          <label for="message">Message*</label>
          <textarea id="message" placeholder="Write your message"></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-us {
  text-align: center;
  padding: 60px 20px; /* Espaço ao redor do conteúdo */
  font-family: "Arial", sans-serif;
  color: #00274d;
}

.contact-title {
  font-size: 42px; /* Aumenta o tamanho do título */
  font-weight: bold;
  margin-bottom: 50px; /* Espaçamento abaixo do título */
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha os itens ao topo */
}

.contact-location {
  background-color: #00274d; /* Fundo azul-escuro */
  color: #fff; /* Texto branco */
  padding: 40px; /* Espaço interno */
  border-radius: 10px; /* Bordas arredondadas */
  width: 80%; /* Ocupa 80% da largura da tela */
  text-align: left; /* Texto alinhado à esquerda */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
}
.contact-location h2 {
  font-size: 28px; /* Tamanho do título */
  font-weight: bold;
  margin-bottom: 20px;
}

.contact-location p {
  font-size: 18px; /* Tamanho do texto */
  margin: 8px 0; /* Espaçamento entre as linhas */
  line-height: 1.8; /* Espaçamento entre as linhas */
}

.contact-location strong {
  font-weight: bold;
}

.contact-form {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.contact-form h3 {
  font-size: 24px;
  margin-bottom: 20px;
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
  height: 120px;
}

.submit-button {
  background-color: #00274d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #004080;
}

</style>
