<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <hr>
  <button @click="isHide = !isHide">Show/Hide</button>
  <Demo v-if="!isHide"/>

</template>

<script>
import Demo from './components/Demo';
import { ref,  } from "vue";

export default {
  name: 'App',
  components: { Demo,},
  setup() {
    let isHide = ref(false)

    return {
      isHide
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
