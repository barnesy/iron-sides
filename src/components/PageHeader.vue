<template>
  <section>
    <div class="pageheader" :style="{ 'background-color': bgColor }">

      <Navigation />

      <div v-bind:class="align">
        <h1 class="text">
          <slot>This is a Level 1 Header</slot>
        </h1>

        <p class="support">
          <slot name="support">Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. </slot>
        </p>

        <p class="CTA">
          <slot name="call-to-action">
            <Button />
          </slot>
        </p>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

  .pageheader {
    width: 100%;
    background-image: url('../assets/images/grey-bg.png');
    background-size: cover;
    background-position: center;
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
      type: String
  	},
    bgColor: {
      type: String
    },
  }
}

</script>
