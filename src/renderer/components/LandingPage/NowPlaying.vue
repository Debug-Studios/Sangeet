<template lang="pug">
  el-row
    el-col(:span="10")
      el-row
        h1 Now Playing
        el-container.center-container(style="align-items:center")
        img.image(src="https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg" height="256px" width="256px")
        el-container(direction="vertical").now-playing-song-container
          h2 {{songName}}
          h3 {{artistName}}

    el-col(:span="14")
      h2 Queue
      el-row(v-for="queueItem in queue").queue-item
        el-container
          el-button(icon="fas fa-play" plain circle).transparent-button.el-col-2.queue-button
          el-button(icon="fas fa-plus" plain circle).transparent-button.el-col-2.queue-button
          el-container.center-container.el-col-2
            img.image(src="http://2.bp.blogspot.com/-5MmoCDPUp10/VgTEb9N8AMI/AAAAAAAAJPs/_2y6tH2ZjsY/s1600/avicii-for-a-better-day-pure-grinding-stories-prmd.jpg" height="48rem" width="48rem")
          el-container(direction="vertical").song-container.el-col-14
            h4.queue-text.song {{queueItem.songName}}
            h5.queue-text.artist {{queueItem.artistName}}
</template>

<script>
export default {
  data () {
    return {
      songName: 'Never Going Back',
      artistName: 'The Score',
      queue: []
    }
  },
}
</script>

<style lang="scss" scoped>
.now-playing-song-container {
  h2 {
    margin-bottom: 0;
    font-weight: 600;
  }
  h3 {
    margin-top: 0.5rem;
    opacity: 0.8;
  }
}

.queue-item {
  margin-top: 0.8rem;
  padding: 0.5rem 0rem;

  &:active {
    background-color: #1b1d1c;
  }
}

.queue-button {
  margin: 0;
}

.song-container {
  margin-left: 0.5rem;
}

.queue-text {
  margin: 0.2rem 0rem;
  padding: 0;

  &.artist {
    font-weight: 200;
  }
}
</style>

