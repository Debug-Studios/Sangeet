<template lang="pug">
  el-row
    el-col(:span="24" v-for="song in songs" :key="0")
      el-container
        el-col(:span='2')
          el-button(icon='fa fa-play' type="primary" plain circle).transparent-button
        el-col(:span='7')
          h5.song-name {{song.title}}
        el-col(:span='7')
          h5.song-artist {{song.artist}}
        el-col(:span='7')
          h5.song-artist {{song.album}}
        
        
</template>

<script>

import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      songs: [],
      serialNumber: 0
    }
  },

  mounted() {
    this.$db.find({}, (err, docs) => {
      console.log(docs);
      this.songs = docs;
    });
  }
}
</script>

<style lang="scss" scoped>

  .song-name {
    font-weight: 400;
    margin-bottom: 0px;
  }

  .song-artist {
    font-weight: 200;
  }


</style>

