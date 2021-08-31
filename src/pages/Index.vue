<template>
  <Layout>

    <picture>
      <source media="(min-width:650px)" srcset="images/img_pink_flowers.jpg">
      <source media="(min-width:465px)" srcset="images/img_white_flower.jpg">
      <img src="/images/img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
    </picture>

    <img src="/images/img_orange_flowers.jpg">

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
