<template>\
  <p class = "button">

    <a v-bind:href="url">
      <slot>Label</slot>
    </a>

  </p>
</template>

<style>

  .button {
    background: #FFFFFF;
    text-transform: uppercase;
    padding: 1.2rem;
    border: 2px solid blue;
    border-radius: 12px;
    display: inline-block;
  }

</style>

<script>

  export default {

    name: 'Button',
    props: {
    	url: {
        type: String,
    	},
    }

  }

</script>
