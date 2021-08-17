<template>
  <div class="container">
      <div class="topicNav">
        <h2>
          <slot name="subhead">These are topics in a directory</slot>
        </h2>
      </div>
      <div>
          <ul>
            <li><a v-bind:href="url">{{link}}</a></li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {

  name: 'TopicNav',

  props: {
  	link: {
      type: String,
  	},
    url: {
       type: String,
    },
  }
}

</script>


<style lang="scss" scoped>
  .container {
    width: 100%;
    padding: 2rem;
    background-color: #B3EEFF;
  }
</style>
