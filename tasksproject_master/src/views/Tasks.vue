<template>
<div class="tasks wrapper">
  <div class="row grid-between">
    <div class="col-sm-6 col-xs-12">
      <form action="" @submit.prevent="addItem">
        <h2 class="ui-title-2"> Создайте задачу:</h2>
        <label for="nameField">Название задачи:</label>
        <input type="text" id="nameField" v-model="TaskName">
        <label for="descField">Комментарий:</label>
        <textarea type="text" id="descField" v-model="TaskDesc"></textarea>
        <button class="button button--round button-primary" type="submit">Добавить задачу</button>
      </form>
    </div>
    <div class="col-sm-6 col-xs-12">
      
        <h2 class="ui-title-2 header"> Добавленные задачи:</h2>
        <div class="filter-tabs">
          <div class="ui-tag__wrapper">
            <div class="ui-tag" @click="filterData = ''"><span class="tag-title" >Все</span></div>
          </div>
          <div class="ui-tag__wrapper">
            <div class="ui-tag" @click="filterData = 'completed'"><span class="tag-title">Выполненные</span></div>
          </div>
          <div class="ui-tag__wrapper">
            <div class="ui-tag" @click="filterData = 'active'"><span class="tag-title" >Активные</span></div>
          </div>
        </div>
        <ul class="tasks-list">
        <li v-for="(task, index) in TasksFiltered" :key="task.id" class="ui-card ui-card--shadow-always" :class="{ completed: task.isComletedDB }">
          <p class=" ui-title-4">{{index+1}}. {{task.name}}</p>
          <p class="com"> <span>Комментарий:</span> {{task.desc}} </p>
          <!-- <div class="hr bg-neutral-placeholder"></div> -->
          <div class="nav-panel">

            <div class="button doneBtn button--round button-default " @click="updateTask(task.id)">Выполнено<span class="material-icons">
                check_circle_outline
              </span> </div>

            <div class="button button--round button-default delete-btn" @click="deleteTask(task.id)">Удалить <span class="material-icons">
                remove_circle_outline
              </span></div>

          </div>
        </li>

      </ul>
    </div>
  </div>
</div>

</template>

<script>
import {
  db
} from "../firebase/db";
export default {
  name: 'TasksProject',
  data() {
    return {
      filterData: "",
      Tasks: [],
      TasksR: [],
      TaskName: "",
      TaskDesc: "",
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    TasksFiltered: function () {
      if (this.filterData == 'completed') {
        return this.Tasks.filter(task => task.isComletedDB)
      } else if (this.filterData == 'active') {
        return this.Tasks.filter(task => !task.isComletedDB)
      } 
      else {
        return this.Tasks
      }
      
    }
  },
  methods: {
    updateTask(id) {
      this.isComleted = !this.isComleted
      db.collection("Tasks")
        .doc(id)
        .update({
          isComletedDB: this.isComleted
        });
    },
    deleteTask(id) {
      db.collection("Tasks")
        .doc(id)
        .delete();
    },
    async addItem() {
      if (this.TaskName == "") {
        alert("Название обязательно")
        return
      } else if (this.TaskDesc == "") {
        if (this.Tasks) {
          await db.collection("Tasks").add({
            name: this.TaskName,
            desc: "Комментрий отсутсвует",
            isComletedDB: false
          });
        }
      } else {
        if (this.Tasks) {
          await db.collection("Tasks").add({
            name: this.TaskName,
            desc: this.TaskDesc,
            isComletedDB: false
          });
        }
      }
      this.TaskName = "";
      this.TaskDesc = "";
    }
  },
  firestore: {
    Tasks: db.collection("Tasks")
  }
};
</script>

<style>
textarea{
font-size: 14px;
}
.filter-tabs {
  margin-bottom: 20px;
}

.filter-tabs .ui-tag {
  transition: all ease time;
  cursor: pointer;
  margin-right: 20px;
}

.filter-tabs .ui-tag:hover {
  border-color: #8854d0;
  color: #8854d0;
}

.completed .ui-title-4,
.completed .com {
  text-decoration: line-through;
}

.completed .doneBtn {
  border-color: #26de81;
}

.completed .doneBtn span {
  color: #26de81;
}

.nav-panel .button {
  display: flex;
  transition: all ease 0.3s;
}

.nav-panel .button span {
  margin-left: 15px;
}

.label--inline {
  margin-right: 10px;
  cursor: pointer;
}

.nav-panel {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.hr {
  width: 100%;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.header {
  margin-top: 100px;
}
.tasks-list {
  transition: all ease 0.3s;
  padding: 10px;
 
}

.ui-card span {
  transition: all ease 0.3s;
  color: #909399;
}

.tasks-list li {
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
}

form {
  padding: 10px;
  padding-top: 100px;
  max-width: 500px;
  margin: 0 auto;

}

form .ui-title-2 {

  margin-bottom: 30px;
}

form .button {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .ui-title-4{
    font-size: 16px;
  }

}
</style>
