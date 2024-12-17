<template>
  <section style="margin-top: 150px;">
    <div class="container">
      <!-- Seção de informações -->
      <div class="info-box">
        <h1>Luanda</h1>
        <p>Rua 28 de Maio,<br />
          Edifício Kende,<br />
          7º andar<br />
          Maianga<br />
          Luanda, Angola</p>
        <p><strong>Tel:</strong> +224 938-613-955<br />
          <strong>WhatsApp:</strong> +224 938-613-955</p>
      </div>

      <!-- Seção do mapa -->
      <div class="map-box">
        <iframe
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
          :src="mapSrc"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Formulário -->
    <div class="form-container">
      <h2>Entre em Contato</h2>
      <form @submit.prevent="submitForm">
        <!-- Tipo de Consulta -->
        <label><strong>TIPO DE CONSULTA *</strong></label><br />
        <label>
          <input type="radio" v-model="form.tipoConsulta" value="Atendimento ao cliente" />
          Atendimento ao cliente e consultas gerais
        </label><br />
        <label>
          <input type="radio" v-model="form.tipoConsulta" value="Consultas da mídia" />
          Consultas da mídia
        </label><br />
        <label>
          <input type="radio" v-model="form.tipoConsulta" value="Consultas de recrutamento" />
          Consultas de recrutamento
        </label><br /><br />

        <!-- Nome -->
        <label for="name">Nome *</label>
        <input type="text" id="name" v-model="form.name" required /><br />

        <!-- Email -->
        <label for="email">E-mail *</label>
        <input type="email" id="email" v-model="form.email" required /><br />

        <!-- Assunto -->
        <label for="assunto">Assunto *</label>
        <input type="text" id="assunto" v-model="form.assunto" required /><br />

        <!-- Mensagem -->
        <label for="message">Mensagem *</label>
        <textarea id="message" v-model="form.message" required></textarea><br />

        <!-- Botão de envio -->
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        tipoConsulta: '',
        name: '',
        email: '',
        assunto: '',
        message: ''
      },
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890!2d-122.4194157481234!3d37.7749295481234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818e12345678%3A0x1234567890abcdef!2sExemplo!5e0!3m2!1spt-BR!2sbr!4v1612345678901!5m2!1spt-BR!2sbr'
    };
  },
  methods: {
    submitForm() {
      console.log('Formulário enviado:', this.form);
      alert("Formulário enviado com sucesso!");
      // Limpar o formulário
      this.form = {
        tipoConsulta: '',
        name: '',
        email: '',
        assunto: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 450px;
  margin-top: 15px;
  margin-bottom: 35px;
}

.info-box {
  width: 40%;
  padding: 40px;
  background-color: #002433;
  color: #ffffff;
}

.map-box {
  width: 60%;
}

.form-container {
  padding: 20px;
  background-color: #f8f8f8;
  margin: 20px auto; /* Centraliza horizontalmente */
  max-width: 600px; /* Define uma largura máxima */
  border: 1px solid #ddd; /* Adiciona uma borda sutil */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Efeito sombra leve */
}

form label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #002433;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00567e;
}

</style>
