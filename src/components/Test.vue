
<template>
<div>
  <div class="text">hello</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            color: 'red',
        }
    }
}
</script>

<style>
.text {
    color: v-bind(color);
}
</style>
