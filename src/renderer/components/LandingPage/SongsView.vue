<template lang="pug">
  el-row
    el-row.row-header(type='flex' justify='end')
      el-col(:span='8')
        h5.song-name Title
      el-col(:span='6' )
        h5.song-name Artist
      el-col(:span='3')
        h5.song-name Album  
      el-col(:span='3')
        h5.song-name Duration  
    el-row.song-row(v-for="(song,index) in songs" :key="0")
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
        el-col(:span='3')
          h5.song-artist {{song.album}}
        el-col(:span='3')
          h5.song-artist {{(song.duration/60).toFixed(2)}} min



</template>

<script>

import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      songs: [],
      currentSongIndex: -1,
      duration: 0
    }
  },

  mounted() {
    this.songs = this.db;
    console.log(this.songs);
  },

  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      GlobalBus.$emit('prepend-queue', this.songs[index]);
    },
    appendSongToQueue(index){
      GlobalBus.$emit('append-queue', this.songs[index]);
    },

    sortSongs(){
      this.songs.sort();
      console.log(this.songs);
    }
  },
  props: {
    db: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.song-row {
  background-color: darken(#21272c, 1);
  margin-top: 2px;
}

.row-header{
  background-color: darken(#1f2429, 1);
  border-bottom: 1px solid rgba(250, 250, 250, 0.5);
}

.song-name {
  font-size: 16px;
  font-weight: 600;
}

.song-artist {
  font-size: 16px;
  font-weight: 200;
}
</style>

