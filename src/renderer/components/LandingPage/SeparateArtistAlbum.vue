<template lang="pug">
  el-container(style="display:block")
    el-container.artist-cover-image
      div.artist-image
        img.image(:src='currentImage' )
      div.artist-name
        span {{songDetail}}
        span.song-artist {{filteredSongs.length}} Songs
    el-container.song-container(style="display:block")
      el-row.song-row(v-for="(filteredSong,index) in filteredSongs")
        el-container
          el-col(:span='2')
            el-button(icon='fa fa-play' type="primary" plain circle @click='playSong(index)' style="margin-top:1rem;").transparent-button
            //- img(src='http://www.animatedimages.org/data/media/102/animated-music-image-0543.gif' rel='icon' type='image/gif' v-show="index == currentSongIndex" style="margin:1rem 0px 0px 1rem;" )
          el-col(:span='2')
            el-button(icon='fa fa-plus' type="primary" plain circle @click='appendSongToQueue(index)' style="margin-top:1rem;").transparent-button
          el-col(:span='8')
            h5.song-name {{filteredSong.title}}
          el-col(:span='6')
            h5.song-artist {{filteredSong.artist}}
          el-col(:span='3')
            h5.song-artist {{filteredSong.album}}
          el-col(:span='3')
            //- h5.song-artist {{(filteredSong.duration/60).toFixed(2)}} min
            h5.song-artist {{Math.floor(filteredSong.duration/60)}}:{{Math.floor(filteredSong.duration% 60)}} min
</template>

<script>
import GlobalBus from './GlobalEventBus';
export default {

  data() {
    return {
      filteredSongs: [],
      allArtists: [],
      allAlbums: [],
      currentImage: '',
    };
  },

  mounted() {
    for (let i = 0; i < this.db.length; i += 1) {
      this.allArtists[i] = this.db[i].artist;
      this.allAlbums[i] = this.db[i].album;
    }
    if (this.allArtists.includes(this.songDetail)) {
      this.filteredSongs = this.db.filter(selectsong => selectsong.artist === this.songDetail);
    }
    if (this.allAlbums.includes(this.songDetail)) {
      this.filteredSongs = this.db.filter(selectsong => selectsong.album === this.songDetail);
      this.currentImage = this.filteredSongs[0].coverArt;
    }
  },
  methods: {
    playSong(index) {
      GlobalBus.$emit('prepend-queue', this.filteredSongs[index]);
    },
    appendSongToQueue(index) {
      GlobalBus.$emit('append-queue', this.filteredSongs[index]);
    },

  },
  props: {
    db: {
      type: Array,
      required: true,
    },
    songDetail: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.artist-cover-image {
  min-height: 45vh;
  background-image: linear-gradient(
      to right,
      rgba(27, 29, 28, 0.5),
      rgba(252, 95, 69, 0.4)
    ),
    url("http://www.chavisrecords.net/wp-content/uploads/2017/11/s.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}

.artist-image {
  position: absolute;
  left: 2rem;
  top: 18rem;
  box-shadow: 5px 5px 15px #1b1d1c;
  border: 1px solid #fafafa;
}

.artist-name {
  position: absolute;
  left: 12rem;
  top: 22.5rem;
  display: grid;
}

.image {
  width: 9rem;
  height: 8rem;
  display: block;
  overflow: hidden;
}

.song-container {
  margin-top: 5.5rem;
}
</style>



