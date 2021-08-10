<template>
  <div class="camera">
	   <h2 >{{ name }}</h2>
     <img src = "/images/generic.png" />
	    <!-- <img class="camera__image" src= "img" /> -->
  </div>
</template>


<script>
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
  	},
  	img: {
      type: String,
      default: './images/generic.png',
  	}
  }
}
</script>
