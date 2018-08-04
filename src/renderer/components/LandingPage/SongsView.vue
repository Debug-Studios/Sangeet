<template lang="pug">
  el-row
    el-col(:span="24" v-for="index in 10" :key="0")
      el-container
        el-col(:span='4')
          h5 1.
        el-col(:span='6')
          h5.song-name Song title
        el-col(:span='6')
          h5.song-artist Song Artist
        el-col(:span='6')
          h5.song-artist Song Album
        el-col(:span='6')
          el-button(icon='fa fa-play' type="primary" plain circle).transparent-button
        
</template>

<script>

import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      songTitle : '',
      songArtist : '',
      serialNumber : 1,
    }
  },

  mounted() {
    this.$db.find({}, (err, docs) => {
      this.songTitle = title;
      this.songArtist = artist;
      serialNumber++;
    });
  }
}
</script>

<style lang="scss" scoped>

  .song-name {
    font-weight: 400;
    margin-bottom: 0;
  }

  .song-artist {
    font-weight: 200;
  }


</style>

