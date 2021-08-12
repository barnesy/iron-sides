<template>
  <div class= "container center">
    <div><slot name="image"><img src = "http://www.placekitten.com/270/200?image=15" /></slot></div>
    <div><p class = "label"><slot name = "label">Grid Item Label</slot></p></div>
  </div>
</template>


<script>
</script>


<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    width:25%;
    padding: 1rem;
    background-color: #BC512F;
  }

  .center {
    text-align: center;
  }

  .label {
    font-size: .75rem;
  }
</style>
