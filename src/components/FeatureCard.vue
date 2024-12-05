<template>
  <div class="feature-card">
    <img :src="icon" alt="Feature Icon" class="feature-icon" />
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 18px;
  color: #00274d;
  margin-bottom: 8px;
}

.feature-description {
  font-size: 14px;
  color: #555;
}
</style>
