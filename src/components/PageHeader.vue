<template>
  <div class = "head">
    <h1><slot name = "header"/></h1>
    <p><slot name="support"></slot></p>
  </div>
</template>



<style scoped>
.head {
  background-color: #ccc;
  /* background-image: url("http://placekitten.com/1200/675"); */

  border: 1px solid black;
  outline-style: solid;
  outline-color:  grey;
  outline-width: thin;

  padding: 4rem 2rem 4rem 2rem;
}


h1, p {
/* color: white; */
}

</style>
