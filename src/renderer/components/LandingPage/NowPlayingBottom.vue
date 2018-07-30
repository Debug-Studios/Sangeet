<template lang="pug">
  .now-playing-bottom
    el-row
      el-col(:span="8")
        el-container(style="align-items: center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="64px" width="64px")
          el-container(direction="vertical").song-container
            h3.song-name Fight My Regrets
            h5.song-artist Amity Affliction
      el-col(:span="12")
      el-col(:span="4")

</template>

<style lang="scss" scoped>
// Only for UI Creation purpose
.now-playing-bottom {
  background-color: #2f3130;
  padding: 0.5rem 0.5rem;
  border: none;
}

.song-container {
  margin: 0 1rem;

  & > * {
    margin: 0.3rem 0;
  }

  .song-name {
    font-weight: 200;
    margin-bottom: 0;
  }
}
</style>
