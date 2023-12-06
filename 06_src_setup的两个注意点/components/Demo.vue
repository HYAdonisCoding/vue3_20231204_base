<template>
<!--vue3的组件模版结构可以没有根标签-->
  <h1>我是Demo组件</h1>
  <h3>我叫 {{ person.name }}</h3>
  <h3>我今年{{ person.age }}岁了</h3>
  <button @click="test">测试触发一次Demo的自定义事件</button>
  <slot name="qwe"></slot>
  <slot name="asd"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ['msg', 'school'] ,
  emits: ['hello'],
  beforeCreate() {
    console.log('Starting -- beforeCreate', this);
  },
  setup(props, context) {
    
    // console.log(context, context.attrs); //相当于vue2中的$attrs
    // console.log(context,context.slots); //插槽
    // console.log(this);
    console.log(props, context)
    let person = reactive({
      name: "Eason",
      age: 18,
    });
    function test() {
        context.emit("hello", JSON.stringify(person));
    }
    //返回一个对象
    return {
      person,
      test,
    };
  },
};
</script>

<style>
</style>