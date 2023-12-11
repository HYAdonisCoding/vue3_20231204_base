<template>
  <div class="child">
    <h2>I'm Child component（子）</h2>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'

export default {
    name: 'Child',
    components: { Son },

}
</script>

<style scoped>
.child {
    background: orange;
    padding: 10px;
}
</style>