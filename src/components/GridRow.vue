<template>
  <div class = "container center">
    <slot />
    <slot name = "position-two" />
    <slot name = "position-three" />
    <slot name = "position-4" />
  </div>
</template>


<script>
</script>


<style lang="scss" scoped>

  .container {
    display: flex;
    width: 66%;
  }

  .center {
     margin: 0 auto;
  }


  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      width: 80%;
      }
  }


</style>
