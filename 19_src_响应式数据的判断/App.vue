<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <div class="app">
    <h2>App(祖) {{ name }} {{ price }}W</h2>
    <button @click="name+='~'">换车</button>
    <button @click="price++">换价格</button>
  </div>
</template>

<script>

import { reactive, ref, toRefs, readonly, isRef, isReactive, isReadonly, isProxy  } from "vue";

export default {
  name: 'App',
  components: {   },
  setup() {
    let car = reactive({ name: 'BMW', price: 50 });
    let sum = ref(0)
    let car1 = readonly(car) ///readonly依然返回代理类型的对象只不过它不能再改而已

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReactive(car1));
    console.log(isReadonly(car1));
    console.log(isProxy(car));



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
