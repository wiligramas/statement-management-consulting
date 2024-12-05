<template>
  <div class="contact">
    <section class="hero">
      <h1>Entre em Contato</h1>
      <p>Estamos prontos para ajudar. Envie-nos uma mensagem!</p>
    </section>
    <section class="form">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div>
          <label for="message">Mensagem:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      alert(`Mensagem enviada por ${this.formData.name}!`);
    },
  },
};
</script>

<style scoped>
.contact .hero {
  padding: 50px;
  background-color: #002b5c;
  color: white;
  text-align: center;
}
.form {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
form div {
  margin-bottom: 15px;
}
button {
  background-color: #002b5c;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #004080;
}
</style>
