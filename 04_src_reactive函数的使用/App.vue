<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <h1>我是App组件</h1>
  <h2>我叫 {{ person.name }}， 我今年{{ person.age }}岁了</h2>
  <h3>职位: {{ person.job.type }}</h3>
  <h3>薪水: {{ person.job.salary }}k</h3>
  <h3>爱好： {{ person.hobbies }}</h3>
  <h3>测试数据c: {{ person.a.b.c }}</h3>
  <button @click="changeInfo">修改个人信息</button>



</template>

<script>
import { reactive } from 'vue';
// import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    //表演的舞台
    //准备数据 data
    //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
    // let name = ref('py'); //ref引用对象(RefImpl)实例
    // let age = ref(21);
    //ref实现响应式(对象类型)也是采用Proxy来实现(proxy) 这里如果就算是用ref也是借助了reactive
    
    let person = reactive({
      name:'Eason',
      age: 18,
      job: { type: 'Frontend developer', salary: 60},
      hobbies: ['抽烟', '喝酒', '开车'],
      a: { b: { c: 200}},
    })
    // 方法Mehtods
    function changeInfo() {
      person.name = '燕云'
      person.age = 22
      person.job.type = 'iOS developer'
      person.job.salary = 30
      person.hobbies[0] = '云游'
      person.a.b.c = 666
    }


    //返回一个对象
    return {
      person,
      changeInfo,
    }

    //返回一个渲染函数
    //这是直接将你在这里渲染的东西替换到template中
    // return () => h('h1', 'Hello')
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
</style>
