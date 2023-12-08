<template>
  <div class="child">
    <h2>I'm Child component（子）</h2>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'
import { inject } from 'vue';

export default {
    name: 'Child',
    components: { Son },
    setup() {
        console.log('Child setup car', inject('car'));
    }
}
</script>

<style scoped>
.child {
    background: orange;
    padding: 10px;
}
</style>