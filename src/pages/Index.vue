<template>
  <Layout>
    <Card>
      Jim says...
      <template v-slot:second-slot>
       <h1>and kewl</h1>
      </template>
    </Card>
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
