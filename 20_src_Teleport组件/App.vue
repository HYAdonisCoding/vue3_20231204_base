<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <div class="app">
    <h2>App(祖) </h2>
    <hr>
    <Child/>
  </div>
</template>

<script>
import Child from "./components/Child"

export default {
  name: 'App',
  components: { Child  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
} 
.app {
  background: rebeccapurple;
  padding: 10px;
}
</style>
