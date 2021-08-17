<template>
  <div class="container">

    <div>
      <slot name="image">
        <img src="http://www.placekitten.com/360/200?image=13" />
      </slot>
    </div>

    <div>
      <p class="category">
        <slot name="category">Default</slot>
      </p>
      <h4>
        <slot name="card-title">Title Default</slot>
      </h4>

      <p>
        <slot>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</slot>
      </p>

      <p>
        <slot name="card-link">
          <a href="https://placekitten.com">Link Default</a>
        </slot>
      </p>
    </div>

  </div>
</template>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    width: 33%;
    margin: 12px;
    padding: 1rem;
    background-color: #B3EEFF;
  }

  img {
    width: 100%;
    height: auto;
  }

  .category {
    font-size: .5rem;
    text-transform: uppercase;
  }

</style>
