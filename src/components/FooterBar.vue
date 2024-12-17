<template>
  <footer class=" text-white py-5" style="background-color: #042239; color: white;">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3 class="mb-3" style="color: white;  font-size: 14pt;">Contato & Endereço</h3>
          <div class="d-flex align-items-center mb-2">
            <i class="bi bi-phone me-2"></i>
            <span>WhatsApp: +224 938-613-955</span>
          </div>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt me-2"></i>
            <span>Edifício Kende, Rua 28 de Maio, 7º andar, Luanda</span>
          </div>
        </div>
        <div class="col-md-6">
          <h3 class="mb-3" style="color: white; font-size: 14pt;">Siga-nos</h3>
          <div class="d-flex gap-3">
            <a 
              v-for="social in socialLinks" 
              :key="social.name" 
              :href="social.url" 
              class="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="`bi bi-${social.icon} fs-4`"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-4 pt-3 border-top border-secondary">
        <p class="mb-0">&copy; {{ currentYear }} STATEMENT MANAGEMENT CONSULTING. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
]
</script>


  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  
  .footer {
    background-color:#042239;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .contact-info,
  .social-media {
    margin: 10px;
  }
  
  .social-media a {
    margin: 0 10px;
  }
  
  .social-media img {
    width: 40px;
    height: 40px;
  }
  .footer-bottom {
    margin-top: 20px;
  }
  </style>