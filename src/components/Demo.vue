<template>
<!--vue3的组件模版结构可以没有根标签-->
    <h1>当前求和为: {{ sum }}</h1>
    <button @click="sum++">点我加一</button>
    <h2>当前的信息为： {{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
  <h1>个人信息</h1>
  <h2>姓名： {{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h2>年薪： {{ person.job.j1.salary }}</h2>
  <button @click="person.name+='~'">点我修改姓名</button>
  <button @click="person.age+=1">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我涨薪</button>
</template>
<script>
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",
//   computed: {
//     fullName() {
//         return this.person.firstName + '-' + this.person.lastName
//     }
//   },
// watch: {
//     // sum(nv, ov) {
//     //     console.log(`sum发生变化了，${nv}, ${ov}`);
//     // }
//     sum: {
//         ddeep: true,//深度监视
//         immediate: true,//一开始就监视一下
//         handler(nv, ov) {console.log(`sum发生变化了，${nv}, ${ov}`);}
//     }
// },
  setup(props, context) {
    
    // console.log(context, context.attrs); //相当于vue2中的$attrs
    // console.log(context,context.slots); //插槽
    // console.log(this);
    console.log(props, context)
    let sum = ref(0)
    let msg = ref('你好')
    let person = reactive({
      name: "Eason",
      age: 18,
      job: {
        j1: {
            salary: 30
        }
      }
    });
    // //情况一: 监视ref所定义的响应式数据
    // watch(sum, (nv, ov) => {
    //     console.log(`情况一: sum发生变化了，${nv}, ${ov}`);
    // }, {
    //     //监视的配置
    //     immediate: true,//一开始就监视一下
    // })

    // //情况二: 监视ref所定义的多个响应式数据
    // watch([sum, msg], (nv, ov) => {
    //     console.log(`发生变化了，new: [${nv}], old: [${ov}]`);
    // }, {
    //     //监视的配置
    //     immediate: true,//一开始就监视一下
    // })

    //情况三: 监视reactive所定义的多个响应式数据
    // 坑:1.此处无法获取正确的ov(oldValue)
    //  *    2.强制开启了深度监视
    // watch(person, (nv, ov) => {
    //     console.log(`发生变化了，new: [${JSON.stringify(nv)}], old: [${JSON.stringify(ov)}]`);
    // }, {
    //     //监视的配置
    //     deep: false,
    // })

    //情况四：监视reactive所定义的响应式中的某一个属性
    // watch(()=> person.age, (nv, ov) => {
    //     console.log(`person.age发生变化了，new: [${nv}], old: [${ov}]`);
    // })
    //情况五:监视reactive所定义的响应式中的某些属性:并不只是一个
    watch([()=> person.name, ()=> person.age], (nv, ov) => {
        console.log(`person发生变化了，new: [${nv}], old: [${ov}]`);
    })
    //特殊情况
    watch(()=> person.job, (nv, ov) => {
        //这里依然无法拿到正确的ov，因为依然监视的是对象
        console.log(`person发生变化了，new: [${JSON.stringify(nv)}], old: [${JSON.stringify(ov)}]`);
    }, {
        //这里必须要加deep:true注意
        //此处因为监视的是reactive所定义的响应式对象的一个属性(这个属性的值它依然是一个对象)，所以deep配置有效
        deep: true,
    })
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