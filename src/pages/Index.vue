<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images
    <g-image alt="Example image" src="~/favicon.png" width="135" /> -->


    <PageHeader>
      <template #header>The display title is set with an H1 tag.</template>
      <template #support>It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn’t feel like a giant. I felt very, very small.</template>
    </PageHeader>

    <Video
      videoID="WUvTyaaNkzM"
    />

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

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
