<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">Statement Management Consulting</router-link>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/services">Services</router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/services#strategy">Strategy</router-link></li>
              <li><router-link to="/services#consulting">Consulting</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/insights">Insights</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact Us</router-link>
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
  background-color: #001f3f;
  padding: 1rem 2rem;
  color: white;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 1.5rem;

      a {
        color: white;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: #1a73e8;
        }
      }
    }

    .nav {
      .nav-list {
        list-style: none;
        display: flex;
        gap: 2rem;

        .nav-item {
          position: relative;

          a {
            color: white;
            text-decoration: none;
            font-weight: bold;

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
            padding: 0.5rem 1rem;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

            li {
              margin-bottom: 0.5rem;

              &:last-child {
                margin-bottom: 0;
              }

              a {
                color: #001f3f;
                font-weight: normal;

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
