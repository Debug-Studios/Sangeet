<template lang="pug">
  el-row.now-playing-bottom
    el-col(:span="6" style="border-right: 1px solid #2f3130")
      el-container.center-container(style="align-items:center")
        img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="64px" width="64px")
        el-container(direction="vertical").song-container
          h4.song-name {{songName}}
          h5.song-artist {{songArtist}}


    el-col(:span="16" :offset="2")
      el-row(style="display: flex; align-items: center;")
        el-col(:span="4")
          h5.time-text {{playedTime}} / {{totalTime}}

        el-col(:span="14")
          el-col(:span="4").el-container.center-container
            el-button(icon="fas fa-random" plain circle).transparent-button
          el-col(:span="12").el-container.center-container
            el-button(icon="fas fa-backward" plain circle).transparent-button
            el-button(icon="fas fa-pause" plain circle type="primary")
            el-button(icon="fas fa-forward" plain circle).transparent-button
          el-col(:span="4").el-container.center-container
            el-button(icon="fas fa-closed-captioning" plain circle).transparent-button

        el-col(:span="6" style="align-items: center").el-container.center-container
          el-button(icon="fas fa-volume-up" plain circle).transparent-button
          el-col(:span="24")
            el-slider(v-model="volume")


</template>

<script>
export default {
  data(){
    return {
      songName: 'Fight My Regrets',
      songArtist: 'Amity Affliction',
      totalTime: '4:40',
      playedTime: '1:20',
      volume: 80
    }
  }
}
</script>


<style lang="scss" scoped>
.center-container {
  justify-content: center;
}

.now-playing-bottom {
  background-color: #1b1d1c;
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

.transparent-button {
  background: none;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background: none;
    border: none;
  }
}
</style>
