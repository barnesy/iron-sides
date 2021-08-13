<template>
  <div class="container">

    <slot />

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
