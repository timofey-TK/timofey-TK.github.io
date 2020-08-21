<template>
  <nav>
    <vs-navbar fixed v-model="active" center-collapsed>
      <template #left>
        <div class="logo">
          <img src="@/static/code.svg" alt="code" />
        </div>
      </template>
      <vs-navbar-item id="home" :active="active == 'home'">
        <nuxt-link to="/">
          home
        </nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item id="about" :active="active == 'about'">
        <nuxt-link to="/about">
          about
        </nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item id="photos" :active="active == 'photos'">
        <nuxt-link to="/photos">
          photos
        </nuxt-link>
      </vs-navbar-item>
    </vs-navbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    active: "home"
  }),
  mounted: function() {
    if (this.$route.name == "index") {
      this.active = "home";
    } else if (this.$route.name == "photos-photoId") {
      this.active = "photos";
    } else {
      this.active = this.$route.name;
    }
  }
};
</script>

<style>
a {
  display: block;
  text-decoration: none;
  color: #000 !important;
  font-size: 16px !important;
}
nav {
  margin-bottom: 85px;
}
</style>
