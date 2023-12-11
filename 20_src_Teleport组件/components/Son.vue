<template>
  <div class="son">
    <h2>I'm Son component(孙)</h2>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog';

export default {
    name: 'Son',
    components: {Dialog},
}
</script>

<style scoped>
.son {
    background: mediumaquamarine;
    padding: 10px;
}
</style>