<template>
  <div class = "display">

    <h4><slot/></h4>
    <slot name="second-slot"></slot>

  </div>
</template>




<style scoped>
.display {
  background-color: #CCC;
  padding: 2rem;
}
</style>
