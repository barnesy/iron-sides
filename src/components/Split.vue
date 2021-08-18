<template>
  <div>

    <div class="container">

      <div class="left">
        <slot name="image"/>
      </div>

      <div class="right">
        <slot/>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

  .container {
    display: flex;

    .left, .right {
      width: 50%;
    }

    .left img {
      width: 100%;
    }

    .right {
      padding: 3rem;
    }
  }

  .flip .container {
    flex-direction: row-reverse;
  }

  @media (max-width: 800px) {
    .flip .container {
      flex-direction: column;

      .left, .right {
        width: 100%;
      }
    }
  }

</style>
