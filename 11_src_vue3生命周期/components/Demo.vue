<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>当前求和为: {{ sum }}</h1>
  <button @click="sum++">点我加一</button>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    //通过组合式api的形式去使用生命周期钩子
    ///setup()相当于beforeCreate()和created()
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });

    //返回一个对象
    return {
      sum,
    };
  },
  //使用配置项的形式使用生命周期钩子
  // beforeCreate//通过组合式api的形式去使用生命周期钩子
  ///setup()相当于beforeCreate()和created(),
  // beforeCreate() { console.log('---beforeCreate---');},
  // created() { console.log('---created---');},
  // beforeMount() { console.log('---beforeMount---');},
  // mounted() { console.log('---mounted---');},
  // beforeUpdate() { console.log('---beforeUpdate---');},
  // updated() { console.log('---updated---');},
  // beforeUnmount() { console.log('---beforeUnmount---');},
  // unmounted() { console.log('---unmounted---');},
  // beforeDestroy() { console.log('---beforeDestroy---');},// no
  // destroyed() { console.log('---destroyed---');},// no
};
</script>

<style>
</style>