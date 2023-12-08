<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <div class="app">
    <h2>App(祖) {{ name }} {{ price }}W</h2>
    <button @click="name+='~'">换车</button>
    <button @click="price++">换价格</button>
    <hr>
    <Child/>
  </div>
</template>

<script>
import Child from "./components/Child"
import { reactive, provide, toRefs  } from "vue";

export default {
  name: 'App',
  components: { Child  },
  setup() {
    let car = reactive({ name: 'BMW', price: 50 });
    provide('car', car);//给自己的后代组件递数据 后代都可以
    return {
      ...toRefs(car),
    }
  }
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
