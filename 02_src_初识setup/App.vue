<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>我是App组件</h1>
  <h2>我叫 {{ name }}， 我今年{{ age }}岁了</h2>
  <button @click="sayHello">hello</button>
  <h3>{{ vue2 }}</h3>
  <h3>a的值是：{{ a }}</h3>
  <hr>

  <button @click="sayWelcome">Welcome</button>
  <hr>
  <button @click="test1">测试一下在vue2中去读取vue3的配置</button>
  
  <button @click="test2">测试一下在vue3的setup中去读取vue2的配置</button>

</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  //此处只是测试setup，暂时先不考虑响应式的问题
  //测试使用vue2的内容
  data() {
    return {
      vue2: 'vue3 still can use vue2 in vue3 code',
      a: 100
    }
  },
  methods: {
    sayWelcome() {
      alert(`Welcome to vue3, My name is${this.name} and ${this.age} years old!`)
    },
    test1() {
      console.log(this.vue2);
      console.log(this.name);
      console.log(this.sayHello);
      this.sayHello();
    },
  },
  setup() {
    //表演的舞台
    //准备数据 data
    let name = 'Eason';
    let age = '20';
    let a = 200

    // 方法Mehtods
    function sayHello() {
      alert(`Hello, My name is${name} and ${age} years old!`)
    }

    function test2() {
      console.log(this.vue2);
      console.log(this.name);
      console.log(this.sayWelcome);
      this.sayWelcome();
    }

    //返回一个对象
    return {
      name,
      age,
      a,
      sayHello,
      test2,
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
