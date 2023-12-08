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
  <h3 v-show="person.car">座驾信息：{{  person.car }}</h3>
  <button @click="name += '~'">点我修改姓名</button>
  <button @click="age += 1">点我修改年龄</button>
  <button @click="salary++">点我涨薪</button>
  <button @click="showRawPerson">打印原始信息</button>
  <button v-show="!person.car" @click="addCar">添加一台车</button>
  <button v-show="person.car" @click="changeCar">换车</button>
  <button v-show="person.car" @click="changePrice">换价格</button>
</template>
<script>
import { reactive, toRef, toRefs, ref, markRaw, toRaw} from "vue";

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
    function showRawPerson() {
      const p = toRaw(person)
      //注意此时页面不会再发生变化了,普普通通的对象不是响应式
      console.log('@@', p);
      p.age ++
      console.log(p);

      // const sum  = toRaw(sum);
      // console.log(sum); //undefined //这条路走不通,toRaw只处理reactive对象
    }
    function addCar() {
      //在响应式的对象身上添加任何属性都是响应式的，经过markRaw一包装就变成最原始的数据就不会再做响应
      person.car = markRaw({ name: 'BMW', price:50})
    }
    function changeCar() {
      person.car.name += '~'
    }
    function changePrice() {
      person.car.price++
    }
    


    //返回一个对象
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, 'salary'),
      sum,
      addCar,
      changeCar,
      changePrice,
      showRawPerson,

    };
  },
};
</script>

<style>
</style>