<template>
<div class="home wrapper">
  <div class="offer">
    <div>
      <h1 class="ui-title-2">Пример ToDo листа с использованием базы данных</h1>
      <p class="ui-text-regular"> Все синхронизорованно! Будет работать даже после перезагрузки страницы и не будет удалено, пока вы не сделаете это сами (или кто-то другой :D) </p>
    </div>
    <img src="@/assets/tasks.png" alt="">
  </div>
  <div class="btn-wrapper">
    <router-link class="button button--large button--round button-primary" :to="{ name: 'Tasks'}">Попробовать</router-link>
    <a href="https://timofey-tk.github.io/" class="button button--large button--round button--plain button-default">Мой GitHub Pages</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
body{
  max-width: 100vw;
  overflow-x: hidden;
}
.offer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 800px;
}

.button {
  display: block;
}

.btn-wrapper {
  margin: 0 auto;
  margin-top: 100px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 980px){
  .offer {
    text-align: center;
    padding: 15px;
    flex-direction: column;
  }
  img {
  width: 500px;
}
}
@media screen and (max-width: 768px) {
  .offer {
    text-align: center;
    padding: 15px;
    flex-direction: column;
  }
  img {
    margin-top: 15px;
  width: 400px;
}
.btn-wrapper {
  width: 100%;
  justify-content: center;
}
.button-primary {
  margin-right: 20px;
}
}
@media screen and (max-width: 480px){
  .button-primary {
  margin-right: 5px;
}
  img {
    margin-top: 15px;
  width: 290px;
}
}
</style>
