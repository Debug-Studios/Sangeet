<template lang="pug">
  el-row
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
        el-col(:span='6')
          h5.song-artist {{song.album}}

</template>

<script>

import GlobalBus from './GlobalEventBus';

export default {
  data() {
    return {
      songs: [],
      currentSongIndex: -1
    }
  },

  mounted() {
    this.songs = this.db;
  },

  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      GlobalBus.$emit('prepend-queue', this.songs[index]);
    },
    appendSongToQueue(index){
      GlobalBus.$emit('append-queue', this.songs[index]);
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

.song-name {
  font-size: 16px;
  font-weight: 400;
}

.song-artist {
  font-size: 16px;
  font-weight: 200;
}
</style>

