<template>
  <section>
  <div class = "pageSection" :style="{ 'background-color': bgcolor }">
    <div v-bind:class="align">
      <h2 class = "text"><slot>This is a Level 2 Header</slot></h2>
      <p class = "support"><slot name = "support">Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. </slot></p>
      <p><slot name = "1" /></p>
      <p><slot name = "2" /></p>
      <p><slot name = "3" /></p>
      <p><slot name = "4" /></p>
      <p><slot name = "5" /></p>
    </div>
  </div>
  </section>
</template>


<script>
export default {
  name: 'PageHeader',
  props: {
  	align: {
      type: String,
  	},
    bgcolor: {
       type: String,
    },
  }
}
</script>


<style scoped lang="scss">
  .pageSection {
    width: 100%;
    // background-color: v-bind(color);
    background-image: url(#);
  }

  .left {
    margin-left: 180px;
    border: none;
  }

  .right {
    text-align: right;
    border: none;
    margin-right: 180px;
  }

  .center {
    text-align: center;
    border: none;
  }
</style>
