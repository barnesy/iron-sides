<template>
  <div class = "container">
    <slot />
    <slot name = "SecondCard" />
    <slot name = "ThirdCard" />
  </div>
</template>


<style lang="scss" scoped>

  .container {
    display: flex;
    width: 100%;
  }


  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      width: 100%;
      }
  }


</style>
