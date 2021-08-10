<template>
  <div class="camera">
	   <h2 >{{ name }}</h2>
     {{ img }} <br />

     <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/{{name}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
	    <img  :src=img />
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
  	}
  }
}
</script>
