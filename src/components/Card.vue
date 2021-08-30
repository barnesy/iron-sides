<template>
  <div class="card">
    <div>
      <slot name="image">
        <img src="http://www.placekitten.com/360/200?image=15" />
      </slot>
    </div>

    <div class="content">
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

  .card {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
  }

  .content {
    padding: 3rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  .category {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

</style>
