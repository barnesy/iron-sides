<template>
  <div class = "display">
    <h3>A subsection (h3) is one pattern inside a section</h3>
    <p>The sub-section could be a lot of things: a copy block, a card group, a card/image. The section places context around this group of things.</p>
    <slot name = "pattern" />

  </div>
</template>


<style scoped>
.display {
  background-color: #eee;
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
