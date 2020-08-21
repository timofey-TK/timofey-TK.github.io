<template>
  <div class="photos">
    <h1>Photos page</h1>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <div class="placeholder">
          <nuxt-link :to="'/photos/' + photo.id">
            <img :src="photo.thumbnailUrl" alt="" />
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    return { photos };
  },
  data() {
    return {
      photos: null
    };
  }
};
</script>

<style scoped>
.placeholder {
  width: 150px;
  height: 150px;
  border-radius: 0 20px 0 20px;
  background: #fff;
}
img {
  border-radius: 0 20px 0 20px;
}
ul {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
li {
  display: block;
  margin: 5px;
}
</style>
