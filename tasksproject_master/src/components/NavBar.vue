<template>

  <div class="navbar">
    <div class="container">
      <div class="navbar-content"><router-link class="header-logo"  :to="{ name: 'Home'}">TasksProject</router-link>
        <div class="button-burger" @click="isMenuActive = !isMenuActive" v-bind:class="{ active: isMenuActive }"><span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></div>
        <div class="navbar-list__wrapper"  v-bind:class="{ active: isMenuActive }">
          <ul class="navbar-list">
            <li class="navbar-item" @click="closeMenu"><router-link   class="navbar-link" :to="{ name: 'Home'}">Главная</router-link></li>
            <li class="navbar-item" @click="closeMenu"><router-link  class="navbar-link" :to="{ name: 'Tasks'}">Менеджер задач</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      isMenuActive: false,
    }
  },
  methods: {
    closeMenu(){
      this.isMenuActive = false
    }
  }
}
</script>
