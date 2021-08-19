<template>
  <div class="card-group">

    <slot />

  </div>
</template>

<style lang="scss" scoped>
  .card-group {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 3rem;
  }

  @media (max-width: 800px) {
    .container {
        flex-direction: column;
        width: 100%;
      }
  }
</style>
