<template>
<div id="app">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <NavBar></NavBar>
  <router-view />
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>

</style>
