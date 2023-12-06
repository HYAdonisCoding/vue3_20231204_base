<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <img alt="Vue logo" src="./assets/person_logo.png">
  <Demo @hello="showHelloMsg" msg="Hello" school="PKU">
    <template v-slot:qwe>
      世界
    </template>
    <template v-slot:asd>
      和平
    </template> 
  </Demo>

</template>

<script>
import Demo from './components/Demo';
// import {h} from 'vue'
export default {
  name: 'App',
  components: { Demo,},
  setup() {
    function showHelloMsg(value) {
      alert(`Hello, I am App, I have got Demo params: ${value}`);
    }

    return {
      showHelloMsg,
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
