<template>
  <div>
    <header id="global-header">
      <Header />
    </header>

    <router-view />

    <div id="footer">
      <!-- <g-link class="nav__link" to="/">Home</g-link> -->
      <Footer />
    </div>
  </div>
</template>

<script>

<style lang="scss">
  div {
    border: 1px dashed grey;
  }
</style>
