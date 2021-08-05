<template>
<section>
  <div class = "display">
    <h2>A Section (h2) is a division of the page</h2>
    <p>The section gathers like content using a background to denote grouping. It contains sub-sections.</p>

      <slot name = "subsection" />

  </div>


</section>
</template>


<style scoped>
.display {
  background-color: #eee;

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
