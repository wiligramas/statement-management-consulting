<template>
  <div class="about">
    <section class="hero">
      <h1>Sobre Nós</h1>
      <p>
        A Statement Management Consulting é uma empresa dedicada a transformar desafios empresariais em soluções estratégicas.
        Nossa missão é auxiliar empresas a atingirem seus objetivos com eficiência e inovação.
      </p>
    </section>
    <section class="team">
      <h2>Nossa Equipe</h2>
      <div class="team-members">
        <div class="member">
          <img src="@/assets/images/team1.jpg" alt="Membro 1" />
          <h3>João Monteiro</h3>
          <p>CEO & Fundador</p>
        </div>
        <div class="member">
          <img src="@/assets/images/team2.jpg" alt="Membro 2" />
          <h3>Ana Costa</h3>
          <p>Especialista em Estratégia</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>





<style scoped>
.about .hero {
  padding: 50px;
  background-color: #f0f8ff;
  text-align: center;
}
.team {
  padding: 30px;
}
.team-members {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.member img {
  width: 100px;
  border-radius: 50%;
}
</style>
