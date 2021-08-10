<template>
  <div class = "video-container">
	   <iframe class = "video" width="560" height="315" :src="'http://youtube.com/embed/' + videoID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

</style>


<script>
export default {
  name: 'Video',
  props: {
  	videoID: {
      type: String,
  	},
  }
}
</script>
