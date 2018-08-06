<template lang="pug">
  el-row
    el-col(:span="24" v-for="(song,index) in songs" :key="0" style="background-color:#181b20;margin-top:2px;")
      el-container
        el-col(:span='2')
          el-button(icon='fa fa-play' type="primary" plain circle @click='playSong(index)' v-show="index != currentSongIndex" style="margin-top:1rem;").transparent-button
          el-button(icon='el-icon-loading' type="primary" plain circle v-show="index == currentSongIndex" style="margin-top:1rem;").transparent-button
        el-col(:span='2')
          el-button(icon='fa fa-plus' type="primary" plain circle @click='appendSongToQueue(index)' style="margin-top:1rem;").transparent-button
        el-col(:span='8')
          h5.song-name {{song.title}}
        el-col(:span='6')
          h5.song-artist {{song.artist}}
        el-col(:span='6')
          h5.song-artist {{song.album}}
        
        
        
</template>

<script>

import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      songs: [],
      serialNumber: 0,
      currentSongIndex: -1
    }
  },

  mounted() {
    this.$db.find({}, (err, docs) => {
      this.songs = docs;
    });
  },

  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      GlobalBus.$emit('play-now', this.songs[index]);
    },
    appendSongToQueue(index){
      GlobalBus.$emit('append-queue', this.songs[index]);
    }
  }
}
</script>

<style lang="scss" scoped>

  .song-name {
    font-size: 16px;
    font-weight: 400;
    
  }

  .song-artist {
    font-size: 16px;
    font-weight: 200;
  }


</style>

