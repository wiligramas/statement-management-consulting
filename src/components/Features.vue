<template>
  <section class="features">
    <h2 class="features-heading">Our Core Features</h2>
    <div class="features-grid">
      <FeatureCard
        icon="/assets/icons/strategy.svg"
        title="Strategic Consulting"
        description="We guide businesses in making critical decisions to achieve sustainable growth."
      />
      <FeatureCard
        icon="/assets/icons/analytics.svg"
        title="Process Optimization"
        description="Improve your operational efficiency with our expert process optimization services."
      />
      <FeatureCard
        icon="/assets/icons/team.svg"
        title="Team Collaboration"
        description="Enhance your team's productivity with tailored collaboration strategies."
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  name: "Features",
  components: {
    FeatureCard,
  },
};
</script>

<style scoped>
.features {
  padding: 40px;
  background-color: #f9f9f9;
}

.features-heading {
  text-align: center;
  color: #00274d;
  margin-bottom: 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
