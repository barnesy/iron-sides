<template>

  <nav class="nav">
    <g-link class="nav__link" to="/">Home</g-link>
    <g-link class="nav__link" to="/content">Content</g-link>
    <g-link class="nav__link" to="/other-directory">Other Directory</g-link>
  </nav>

</template>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: flex-start;

    a {
      padding: 1rem;
      text-decoration: none;

      &.active--exact {
        text-decoration: underline;
      }
    }
  }
</style>
