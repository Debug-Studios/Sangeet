<template lang="pug">
  el-container(style="display:block")
    el-container.artist-cover-image
      div.artist-image
        img.image(src='https://img4.nickiswift.com/img/gallery/why-does-eminem-look-so-different-now/run-eminem-run-1519412300.jpg' )
      div.artist-name
        span EMINEM
        span.song-artist Total Songs 200
    el-container.song-container(style="display:block")
      el-row.song-row(v-for="(song,index) in songs" :key="0")
            el-container
              el-col(:span='2')
                el-button(icon='fa fa-play' type="primary" plain circle style="margin-top:1rem;").transparent-button
                //- img(src='http://www.animatedimages.org/data/media/102/animated-music-image-0543.gif' rel='icon' type='image/gif' v-show="index == currentSongIndex" style="margin:1rem 0px 0px 1rem;" )
              el-col(:span='2')
                el-button(icon='fa fa-plus' type="primary" plain circle style="margin-top:1rem;").transparent-button
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

export default {

  data() {
    return {
      songs: [],
    };
  },

  mounted() {
    this.songs = this.db;
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
.artist-cover-image {
  min-height: 40vh;
  background-image: linear-gradient(
      to right,
      rgba(27, 29, 28, 0.5),
      rgba(252, 95, 69, 0.4)
    ),
    url("https://img4.nickiswift.com/img/gallery/why-does-eminem-look-so-different-now/run-eminem-run-1519412300.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}

.artist-image {
  position: absolute;
  left: 2rem;
  top: 14rem;
  box-shadow: 5px 5px 15px #1b1d1c;
  border: 1px solid #fafafa;
}

.artist-name {
  position: absolute;
  left: 14.5rem;
  top: 19.5rem;
  display: grid;
}

.image {
  width: 12rem;
  height: 8rem;
  display: block;
}

.song-container {
  margin-top: 4rem;
}
</style>



