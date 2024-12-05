<template>
  <div class="services">
    <section class="hero">
      <h1>Nossos Serviços</h1>
      <p>Oferecemos soluções personalizadas para empresas de todos os setores.</p>
    </section>
    <section class="services-list">
      <div class="service-item">
        <h2>Consultoria Estratégica</h2>
        <p>Ajudamos sua empresa a definir e alcançar objetivos estratégicos.</p>
      </div>
      <div class="service-item">
        <h2>Otimização de Processos</h2>
        <p>Transformamos processos ineficientes em fluxos de trabalho produtivos.</p>
      </div>
      <div class="service-item">
        <h2>Inovação e Tecnologia</h2>
        <p>Implementamos soluções tecnológicas para impulsionar seu negócio.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
};
</script>

<style scoped>
.services .hero {
  padding: 50px;
  background-color: #002b5c;
  color: white;
  text-align: center;
}
.services-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.service-item {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
