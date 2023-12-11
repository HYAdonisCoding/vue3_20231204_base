<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <div class="app">
    <h2>App(祖) </h2>
    <hr>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>Loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child" //静态引入组件
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(() => import("./components/Child"));//动态引入组件(异步)
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
