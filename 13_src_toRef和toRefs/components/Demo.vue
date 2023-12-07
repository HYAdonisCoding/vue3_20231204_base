<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h6>当前信息为: {{ person }}</h6>
  <h1>个人信息</h1>
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>年薪： {{ salary }}K</h2>
  <button @click="name += '~'">点我修改姓名</button>
  <button @click="age += 1">点我修改年龄</button>
  <button @click="salary++">点我涨薪</button>
</template>
<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      name: "Eason",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });
    
    //ref类型的值在模板里使用是不需要.value来取的
    const name1 = person.name;
    console.log('@@@', name1);

    //RefImpl 这里的name2与person.name是完全一模一样的(你改这里的name2与你改person.name是一码事),且数据还是响应式的
    const name2 = toRef(person.name);
    console.log('###', name2);
    

    //返回一个对象
    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary'),
      ...toRefs(person),
      salary: toRef(person.job.j1, 'salary'),
    };
  },
};
</script>

<style>
</style>