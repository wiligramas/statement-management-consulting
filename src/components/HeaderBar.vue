<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">Statement Management Consulting</router-link>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/">Início</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/Services">Portfólio</router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/services#strategy">Strategy</router-link></li>
              <li><router-link to="/services#consulting">Consulting</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/about">Carreira</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/insights">Notícias</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contacte-nos</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #042239; /* Atualizado para a cor desejada */
  padding: 1.5rem 2rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.5px;

      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #1a73e8; /* Destaque ao passar o mouse */
        }
      }
    }

    .nav {
      .nav-list {
        list-style: none;
        display: flex;
        gap: 1.5rem;

        .nav-item {
          position: relative;

          a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;

            &:hover {
              color: #1a73e8;
            }
          }

          &.dropdown:hover .dropdown-menu {
            display: block;
          }

          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            list-style: none;
            padding: 0.8rem 1rem;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);

            li {
              margin-bottom: 0.5rem;

              &:last-child {
                margin-bottom: 0;
              }

              a {
                color: #042239;
                font-weight: 400;
                transition: color 0.3s ease;

                &:hover {
                  color: #1a73e8;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
