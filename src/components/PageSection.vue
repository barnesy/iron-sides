<template>
  <section>

    <div class = "pagesection" :style="{ 'background-color': bgcolor }">

      <div v-bind:class="align">
        <h2 class = "text">
          <slot name = "header">This is a Level 2 Header</slot>
        </h2>

        <p class = "support">
          <slot name = "support">Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. </slot>
        </p>

        <slot/>
      </div>

    </div>

  </section>
</template>

<style scoped lang="scss">

  .pagesection {
    width: 100%;
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
