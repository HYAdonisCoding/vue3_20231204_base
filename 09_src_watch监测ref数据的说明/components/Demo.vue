<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>当前求和为: {{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <h2>当前的信息为： {{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h1>个人信息</h1>
  <h2>姓名： {{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h2>年薪： {{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age += 1">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我涨薪</button>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // console.log(context, context.attrs); //相当于vue2中的$attrs
    // console.log(context,context.slots); //插槽
    // console.log(this);
    console.log(props, context);
    let sum = ref(0);
    let msg = ref("你好");
    let person = ref({
      name: "Eason",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });
    watch(sum, (nv, ov) => {
      console.log(`sum: new - [${nv}], old - [${ov}]`);
    });
    //这里如果不是person.value则会出现问题 因为person是一个RefImpl(默认没开启深度监视)
    //但是person.value是一个借助了proxy生成的reactive响应式对象 所以这里可以解决问题
    // watch(person.value, (nv, ov) => {
    //   console.log(`person发生变化了，new: [${JSON.stringify(nv)}], old: [${JSON.stringify(ov)}]`);
    // });

    //person是RefImpl
    //开启深度监视不会存在问题
    watch(person, (nv, ov) => {
      console.log(`person发生变化了，new: [${JSON.stringify(nv)}], old: [${JSON.stringify(ov)}]`);
    }, { deep: true});

    //返回一个对象
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>