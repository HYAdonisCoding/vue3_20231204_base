<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <hr>
  <input type="text" v-model="keyword">
  <hr>
  <strong>{{ keyword }}</strong>
</template>

<script>


import { ref, customRef  } from "vue";

export default {
  name: 'App',
  components: {   },
  setup() {
    // let keyword = ref('world')

    let keyword = cusRef('world')

    //自定义ref(customRef)
    function cusRef(world) {
      return customRef((track, trigger) => {
        let timer;
        return {
          
          get() {
            console.log(`从myRef这个容器读取数据,data: ${world}`);
            track()//通知追踪value的变化(跟getter商量一下让它明确你这个value是有用的)
            return world//读取的时候就会调用get
          },
          set(value) {
            console.log(`myRef容器中的数据被修改,data改为${value}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              world = value
              trigger()//trigger通知vue重新解析模版 //防抖
            }, 1000);
            
          }
        }
      })
    }
    return {
      keyword
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
} 
</style>
