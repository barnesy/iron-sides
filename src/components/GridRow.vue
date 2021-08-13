<template>
  <div class="container center">

    <slot />

  </div>
</template>

<style lang="scss" scoped>

  .container {
    display: flex;
    width: 66%;
  }

  .center {
     margin: 0 auto;
     justify-content: center;
     align-items: center;
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      width: 80%;
    }
  }

</style>
