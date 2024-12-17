<template>
  <div class="portfolio">
    <!-- 1. Header -->
    <section class="portfolio-header">
      <h1>Nosso Portfólio</h1>
      <p>Conheça alguns de nossos projetos realizados com sucesso para clientes de diversos setores.</p>
    </section>

    <!-- 2. Categorias -->
    <section class="portfolio-categories">
      <div class="category-list">
        <button
          v-for="(category, index) in categories"
          :key="index"
          :class="{ active: activeCategory === category }"
          @click="filterProjects(category)"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- 3. Projetos -->
    <section class="portfolio-projects">
      <div class="project-grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="project-card"
        >
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
// eslint-disable
import webinarImage from '@/assets/images/strategy-placeholder.jpg';
import report from '@/assets/images/report-placeholder.jpg';
import impact from '@/assets/images/impact-placeholder.jpg';
import digital from '@/assets/images/digital-transformation-placeholder.jpg';
import team from '@/assets/images/team-placeholder.jpg';

export default {
  name: "PortfolioPage",
  data() {
    return {
      categories: ["Todos", "Consultoria", "Estratégia", "Operações", "Tecnologia"],
      activeCategory: "Todos",
      projects: [
        {
          title: "Projeto Consultoria X",
          description: "Estratégia personalizada para uma empresa global de tecnologia.",
          category: "Consultoria",
          image: webinarImage,
        },
        {
          title: "Projeto Estratégia Y",
          description: "Desenvolvimento de um modelo de expansão para mercados emergentes.",
          category: "Estratégia",
          image: report,
        },
        {
          title: "Projeto Operações Z",
          description: "Otimização de processos logísticos e operacionais.",
          category: "Operações",
          image: impact,
        },
        {
          title: "Projeto Tech A",
          description: "Implementação de soluções tecnológicas avançadas.",
          category: "Tecnologia",
          image: digital,
        },
        {
          title: "Projeto Multinacional B",
          description: "Reestruturação estratégica em multinacional do setor financeiro.",
          category: "Consultoria",
          image: team,
        },
      ],
      filteredProjects: [],
    };
  },
  methods: {
    filterProjects(category) {
      this.activeCategory = category;
      if (category === "Todos") {
        this.filteredProjects = this.projects;
      } else {
        this.filteredProjects = this.projects.filter(
          (project) => project.category === category
        );
      }
    },
  },
  created() {
    this.filteredProjects = this.projects;
  },
};
</script>

<style scoped>
/* Global */
.portfolio {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

/* Header */
.portfolio-header {
  text-align: center;
  padding: 30px 10px;
  background-color: #f5f5f5;
}

.portfolio-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.portfolio-header p {
  font-size: 1.2rem;
  color: #666;
}

/* Categorias */
.portfolio-categories {
  margin: 20px 0;
  text-align: center;
}

.category-list button {
  background-color: #00274d;
  color: #fff;
  border: none;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-list button.active {
  background-color: #00274d;
}

.category-list button:hover {
  background-color: #0056b3;
}

/* Projetos */
.portfolio-projects {
  padding: 20px 0;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  width: calc(33.333% - 20px);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #00274d;
}

.project-info p {
  font-size: 0.9rem;
  color: #555;
}

/* Responsividade */
@media (max-width: 1024px) {
  .project-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .project-card {
    width: calc(100% - 20px);
  }
}

@media (max-width: 480px) {
  .portfolio-header h1 {
    font-size: 2rem;
  }

  .portfolio-header p {
    font-size: 1rem;
  }

  .category-list button {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
}
</style>
