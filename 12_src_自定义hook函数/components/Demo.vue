<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>当前求和为: {{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr>
  <h3>当前点击时鼠标的坐标为{{ point }}</h3>
</template>
<script>
import {
  ref,
} from "vue";
import usePoint from '../hooks/usePoint';

export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);

    //复用自定义hooks
    const point = usePoint();
    
 
    //返回一个对象
    return {
      sum,
      point
    };
  },

};
</script>

<style>
</style>