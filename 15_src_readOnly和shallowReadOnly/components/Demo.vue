<template>
  <h2>当前的值为: {{ sum }}</h2>
  <button @click="sum=666">点我替换</button>
  <button @click="sum++">点我++</button>
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
import { reactive, toRef, toRefs, ref, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0)
    let person = reactive({
      name: "Eason",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });
    //此时person里面的属性值都不允许修改
    // person = readonly(person)
    //第一层不能改(name,age), 但j1和salary仍然可以改动
    person = shallowReadonly(person)

    // sum = readonly(sum);
    // sum = shallowReadonly(sum)

    //返回一个对象
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, 'salary'),
      sum,
    };
  },
};
</script>

<style>
</style>