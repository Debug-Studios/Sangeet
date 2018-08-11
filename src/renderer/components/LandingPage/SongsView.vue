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
    el-row.song-row(v-for="(allsong,index) in songs")
      el-container
        el-col(:span='2')
          el-button(icon='fa fa-play' type="primary" plain circle @click='playSong(index)' v-show="index != currentSongIndex" style="margin-top:1rem;").transparent-button
          img(src='http://www.animatedimages.org/data/media/102/animated-music-image-0543.gif' rel='icon' type='image/gif' v-show="index == currentSongIndex" style="margin:1rem 0px 0px 1rem;" )
        el-col(:span='2')
          el-button(icon='fa fa-plus' type="primary" plain circle @click='appendSongToQueue(index)' style="margin-top:1rem;").transparent-button
        el-col(:span='8')
          h5.song-name {{allsong.title}}
        el-col(:span='6')
          h5.song-artist {{allsong.artist}}
        el-col(:span='3')
          h5.song-artist {{allsong.album}}
        el-col(:span='3')
          h5.song-artist {{(allsong.duration/60).toFixed(2)}} min



</template>

<script>

import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      songs: [],
      currentSongIndex: -1,
    };
  },

  mounted() {
    this.songs = this.db;
  },

  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      GlobalBus.$emit('prepend-queue', this.songs[index]);
    },
    appendSongToQueue(index) {
      GlobalBus.$emit('append-queue', this.songs[index]);
    },

    sortSongs() {
      this.songs.sort();
    },
  },
  props: {
    db: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.row-header {
  background-color: darken(#1f2429, 1);
  border-bottom: 1px solid rgba(250, 250, 250, 0.5);
}
</style>

