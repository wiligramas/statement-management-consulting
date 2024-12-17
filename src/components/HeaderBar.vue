<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
         <img src="../assets/images/logo-placeholder.png" style="border-radius: 10px;" />
        </router-link>
        <!-- Botão de Menu para Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Links do Menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Início</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link" to="/portifolho">Portfólio</router-link>               
            
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Carreira</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/insights">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacte-nos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
//import logo from './assets/images/logo-placeholder.png';
export default {
  name: "HeaderBar",
};
</script>

<style lang="scss" scoped>
/* Estilos Personalizados */
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  background: #042239 !important;

  .navbar-brand {
    font-weight: 600;
    letter-spacing: 0.5px;
    &:hover {
      color: #1a73e8 !important;
    }
  }

  .nav-link {
    font-weight: 500;
    &:hover {
      color: #1a73e8 !important;
    }
  }

  .dropdown-menu {
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    a {
      color: #042239;
      &:hover {
        color: #1a73e8 !important;
      }
    }
  }
}
</style>
