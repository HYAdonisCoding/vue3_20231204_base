<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>我是App组件</h1>
  <h2>我叫 {{ name }}， 我今年{{ age }}岁了</h2>
  <h3>职位: {{ job.type }}</h3>
  <h3>薪水: {{ job.salary }}k</h3>
  <button @click="changeInfo">修改个人信息</button>



</template>

<script>
import { ref } from 'vue';
// import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    //表演的舞台
    //准备数据 data
    //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
    let name = ref('Eason');
    let age = ref(20);
    let job = ref({ type: 'Frontend developer', salary: 20})

    // 方法Mehtods
    function changeInfo() {
      name.value = '燕云'
      age.value = 22
      job.value.type = 'iOS developer'
      job.value.salary = 30

      console.log(name, job);
    }


    //返回一个对象
    return {
      name,
      age,
      job,
      changeInfo,
    }

    //返回一个渲染函数
    //这是直接将你在这里渲染的东西替换到template中
    // return () => h('h1', 'Hello')
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
