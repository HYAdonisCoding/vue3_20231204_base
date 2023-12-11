<template>
  <div class="child">
    <h2>I'm Child component（子）</h2>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Child',
    async setup() {
      let sum = ref(0)
      let p = new Promise(resolve => {
        setTimeout(() => {
          resolve({sum})
        }, 3000);
      })
      return await p
    },

}
</script>

<style scoped>
.child {
    background: orange;
    padding: 10px;
}
</style>