<template>
  <div>
    <header id="global-header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/test">Test</g-link>
      </nav>
    </header>

    <router-view />

    <div id="footer">
      <g-link class="nav__link" to="/">Home</g-link>
    </div>
  </div>
</template>

<script>

<style lang="scss">
  div {
    border: 1px dashed grey;
  }
</style>
