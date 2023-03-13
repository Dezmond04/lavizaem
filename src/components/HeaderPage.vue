<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <a href="/" class="header__logo-link">
            <img src="@/assets/img/logo.png" alt="Logo" class="header__logo-icon">
          </a>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.title">
            <router-link
                class="navbar-link"
                :title="link.title"
                :to="link.url"
            >
              {{ link.title }}
            </router-link>
          </li>
        </ul>
        <div class="header__logout">
          <button class="header__logout-btn">Войти</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      require: true,
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this block only -->
<style lang="scss" scoped>

</style>
