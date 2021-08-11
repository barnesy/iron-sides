
<template>
<div>
  <div class="text" :style="{ 'background-color': color }">hello</div>
</div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    color: {
      type: String,
    },
  }

    // data() {
    //     return {
    //         color: 'green',
    //     }
    // }
}
</script>

<style lang = "scss">
.text {
    color: v-bind(color);
}
</style>
