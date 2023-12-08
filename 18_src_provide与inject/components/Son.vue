<template>
  <div class="son">
    <h2>I'm Son component(孙)</h2>
    <h2>从app组件获取的数据:{{ name }} {{ price }}W</h2>
    <button @click="name+='~'">换车</button>
    <button @click="price++">换价格</button>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
    name: 'Son',
    setup() {
        console.log('Son setup car', inject('car'));
        //获取数据
        let car = inject('car');
        //响应式数据
        return { ...toRefs(car), }
    }
}
</script>

<style scoped>
.son {
    background: mediumaquamarine;
    padding: 10px;
}
</style>