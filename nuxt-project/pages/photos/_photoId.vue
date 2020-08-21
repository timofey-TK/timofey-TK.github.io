<template>
  <div>
    <div class="header">
      <h1 class="h1">Photo preview</h1>
      <vs-button relief :active="active == 1" @click="active = 1">
        <nuxt-link to="/photos">Back </nuxt-link>
      </vs-button>
    </div>
    <hr />
    <h2>Photo title: {{ photo[0].title }}</h2>
    <div class="img">
      <img :src="photo[0].url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let url =
      "https://jsonplaceholder.typicode.com/photos?id=" + params.photoId;
    const photo = await $axios.$get(url);
    return {
      photo
    };
  },
  data() {
    return {
      photo: null,
      active: 0
    };
  }
};
</script>

<style>
.img {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.nuxt-link-active {
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
hr {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
