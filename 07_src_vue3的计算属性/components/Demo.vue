<template>
<!--vue3的组件模版结构可以没有根标签-->
  <h1>个人信息</h1>
  姓：<input type="text" v-model="person.firstName">
  名：<input type="text" v-model="person.lastName">
  <p>姓名： {{ person.fullName }}</p>
  修改全名：<input type="text" v-model="person.fullName">

</template>
<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
//   computed: {
//     fullName() {
//         return this.person.firstName + '-' + this.person.lastName
//     }
//   },
  setup(props, context) {
    
    // console.log(context, context.attrs); //相当于vue2中的$attrs
    // console.log(context,context.slots); //插槽
    // console.log(this);
    console.log(props, context)
    let person = reactive({
      firstName: "Eason",
      lastName: "Jobs",
      age: 18,
    });
    //计算属性(简写，没有考虑计算属性被修改的情况)
    // person.fullName = computed(() =>person.firstName + '-' + person.lastName)
    
    //计算属性(完整写法，既考虑了读也考虑了改)
    person.fullName = computed({
        get() {
            return person.firstName + '-' + person.lastName
        },
        set(value) {
            let [fn, ln] = value.split('-');
            person.firstName = fn
            person.lastName = ln
        }
    })
    //返回一个对象
    return {
      person,
    };
  },
};
</script>

<style>
</style>