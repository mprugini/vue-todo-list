<template>
  <div id="app">
    <new-todo-task></new-todo-task>
    <br>
    <active-tasks></active-tasks>
    <br>
    <completed-tasks></completed-tasks>
  </div>
</template>

<script>
  import NewTodoTask from './components/NewTodoTask'
  import ActiveTasks from './components/ActiveTasks'
  import CompletedTasks from './components/CompletedTasks'
  export default {
    components: {
      NewTodoTask,
      ActiveTasks,
      CompletedTasks
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
