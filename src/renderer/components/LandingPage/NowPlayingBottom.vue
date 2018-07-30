<template lang="pug">
  el-row.now-playing-bottom
    el-col(:span="6")
      el-container.center-container(style="align-items:center")
        img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="64px" width="64px")
        el-container(direction="vertical").song-container
          h4.song-name Fight My Regrets
          h5.song-artist Amity Affliction


    el-col(:span="18")
      el-container.center-container


</template>

<style lang="scss" scoped>
.center-container {
  justify-content: center;
}

.now-playing-bottom {
  background-color: #1b1d1c;
  padding: 0.5rem 0.5rem;
  border: none;
  display: flex;
  align-items: center;
}

.song-container {
  margin: 0 1rem;

  & > * {
    margin: 0.3rem 0;
  }

  .song-name {
    font-weight: 400;
    margin-bottom: 0;
  }

  .song-artist {
    font-weight: 200;
  }
}
</style>
