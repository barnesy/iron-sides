<template>
  <Layout>

    <ul class = "flextest">
      <li class = "item">Item 1</li>
      <li class = "item">Item 2</li>
      <li class = "item">Item 3</li>
      <li class = "item big">Item 4</li>
      <li class = "item">Item 5</li>
      <li class = "item">Item 6</li>
    </ul>


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

.item {
  background: tomato;
  width: 100px;
  height: 100px;
  margin: 10px;

  color: white;
  font-weight: regular;
  font-size: 2em;
  text-align: center;
}

.big {
  width: 166px;
  height: 166px;
}

.tile-one {
  flex-grow: 1;
}

.tile-two {
  flex-grow: 2;
}

.wrap {
  flex-wrap: wrap;

}

.flextest {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: flex-end;
  padding: 2px;
  border: 1px blue solid;
  list-style: none;

}

</style>
