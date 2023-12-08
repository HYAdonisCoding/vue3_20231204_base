<template>
  <h2>当前的值为: {{ x.y }}</h2>
  <button @click="x={y:666}">点我替换</button>
  <button @click="x.y++">点我++</button>
  <!--vue3的组件模版结构可以没有根标签-->
  <h6>当前信息为: {{ person }}</h6>
  <h2>个人信息</h2>
  <h3>姓名： {{ name }}</h3>
  <h3>年龄： {{ age }}</h3>
  <h3>年薪： {{ salary }}K</h3>
  <button @click="name += '~'">点我修改姓名</button>
  <button @click="age += 1">点我修改年龄</button>
  <button @click="salary++">点我涨薪</button>
</template>
<script>
import { reactive, toRef, toRefs, shallowReactive, ref, shallowRef } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    //shallowReactive只考虑对象类型的第一层数据响应式
    // let person = reactive({
    let person = shallowReactive({
      name: "Eason",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });
    //传递基本类型来说,ref与shallowRef基本是没什么区别的
    // let x = shallowRef(0);
    //但注意对象类型shallowRef不去处理，而ref底层回去借助reactive生成proxy对象(getter/setter)
    //但注意不管是shallowR还是非shallow, 第一层都是响应式的(不如下面的x依然是响应式数据)
    // let x = ref({y: 0})
    let x = shallowRef({y: 0})

    //返回一个对象
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, 'salary'),
      x,
    };
  },
};
</script>

<style>
</style>